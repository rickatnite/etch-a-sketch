
const gridContainer = document.getElementById("grid"); //create reference to grid-container element
const gridSize = 16; // define grid size to determine number of rows and columns

for (let i = 0; i < gridSize * gridSize - 1; i++) { // create loop to create divs and add to the container
  const div = document.createElement("div");
  div.classList.add("grid-item");
  gridContainer.appendChild(div);
  let color = "#000000"; //set color to change square to on mouseover
  div.addEventListener("mouseover", () => { // on mouseover event, change the square color
    div.style.backgroundColor = color; // change background color 
  });
}

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them, 
// leaving a (pixelated) trail through your grid like a pen would.
// Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. 
// You can set up event listeners for either of those events as a starting point.

// There are multiple ways to change the color of the divs, including:
// Adding a new class to the div.
// Changing the div’s background color using JavaScript.

// Add a button on the top of the screen that will send the user a popup 
// asking for the number of squares per side for the new grid. 
// Once entered, the existing grid should be removed, 
// and a new grid should be generated in the same total space as before 
// (e.g., 960px wide) so that you’ve got a new sketch pad.

// Tip: Set the limit for the user input to a maximum of 100. 
// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up 
// without changing the total amount of pixels used.
























// const container = document.querySelector("#container"); //create reference to the container div
// const grid = document.createElement("div"); //create div element for the squares and store as grid
// grid.classList.add("grid"); //add a class to the grid div
// container.appendChild(grid); //append grid div to the container

// const gridContainer = document.getElementById("grid"); //get reference to grid container
// const rows = 4; //get number of rows in the grid
// const columns = 4; //get number of columns in the grid

// //create nested loops to create grid
// for (let i = 0; i < rows; i++) { //iterate through rows
//   for (let j = 0; j < columns; j++) { //iterate through columns within each row
//     const div = document.createElement('div'); //create div element for each grid item
//     div.className = 'grid-item'; //set class to grid item
//     gridContainer.appendChild(div); //appen to the grid container
//   }
// }