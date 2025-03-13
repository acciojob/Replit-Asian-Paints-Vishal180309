//your JS code here. If required.
// Get the grid items
const gridItems = document.querySelectorAll('.grid-item');

// Get the block id input
const blockIdInput = document.getElementById('block_id');

// Get the color input
const colorInput = document.getElementById('colour_id');

// Get the change color button
const changeColorButton = document.getElementById('change_button');

// Get the reset button
const resetButton = document.getElementById('reset_button');

// Function to change the color of a grid item
function changeColor() {
    // Get the block id
    const blockId = blockIdInput.value;

    // Get the color
    const color = colorInput.value;

    // Check if the block id is valid
    if (blockId >= 1 && blockId <= 9) {
        // Get the grid item
        const gridItem = document.getElementById(blockId);

        // Change the background color of the grid item
        gridItem.style.backgroundColor = color;
    }
}

// Function to reset the colors of all grid items
function resetColors() {
    // Loop through the grid items
    gridItems.forEach((gridItem) => {
        // Reset the background color of the grid item
        gridItem.style.backgroundColor = 'transparent';
    });
}

// Add event listener to the change color button
changeColorButton.addEventListener('click', changeColor);

// Add event listener to the reset button
resetButton.addEventListener('click', resetColors);
