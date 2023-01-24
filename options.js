let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1", "#000000", "#ffffff", "#ff0000", "#FDA898", "#c24bdd", "#6bfe36", "#07a4e5", "#1b45c5", "#85611f", "#4a067c", "#2faf49", "#509ed8", "#bb1c2a", "#8e743d", "#7a3a1e", "#762987", "#424242", "#fdf3f1", "#e5f0f1", "#eaeaea", "#2d2d2d", "#e5e5e5", "#fda898", "#ffc0b4", "#034c52", "#f48d79", "#017075","#d5bbfe", "#c12877", "#da420f", "#85611f", "#1e78fa", "#f39451", "#cbdea6", "#711c91", "#ffd700", "#b49695", "#123234", "#ff4612", "#80cc00", "#03aaf9", "#80cc00", "#cc0080", "#1bc9b6", "#1efe32"];

// Reacts to a button click by marking marking the selected button and saving
// the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
     `.${selectedClassName}`
  );
  if (current && current !== event.target) {
	current.classList.remove(selectedClassName);
  }
  
  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  chrome.storage.sync.set({ color });
}

// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {
	let currentColor = data.color;
	
	// For each color we were provided...
	for (let buttonColor of buttonColors) {
	  // ...create a button with that color...
	  let button = document.createElement("button");
	  button.dataset.color = buttonColor;
	  button.style.backgroundColor = buttonColor;
	  
	  //... mark the currently selected color...
	  if (buttonColor === currentColor) {
		button.classList.add(selectedClassName);
	  }
	  
	  //... and register a listener for when that button is clicked
	  button.addEventListener("click", handleButtonClick);
	  page.appendChild(button);
	}
  });
}

// Initialize the page by constructing the color options
constructOptions(presetButtonColors);