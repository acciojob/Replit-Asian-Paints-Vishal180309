document.getElementById("change_button").addEventListener("click", function () {
    // Get the input values
    let blockId = document.getElementById("block_id").value;
    let color = document.getElementById("colour_id").value;

    // Validate block ID
    if (blockId < 1 || blockId > 9) {
        alert("Please enter a valid Block ID between 1 and 9.");
        return;
    }

    // Reset all grid colors before applying new one
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Apply color to selected block
    document.getElementById(blockId).style.backgroundColor = color;
});

document.getElementById("Reset").addEventListener("click", function () {
    // Reset all grid colors to transparent
    document.querySelectorAll(".grid-item").forEach(item => {
        item.style.backgroundColor = "transparent";
    });

    // Clear input fields
    document.getElementById("block_id").value = "";
    document.getElementById("colour_id").value = "";
});
