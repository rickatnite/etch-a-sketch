// Add a button on the top of the screen that will send the user a popup 
// asking for the number of squares per side for the new grid. 

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     let size = prompt("Enter number of grid squares up to 100.");
//     gridSize = size;
//     console.log(gridSize);
//     console.log(size);
// });
let gridNum = prompt("Enter number of grid squares per side up to 100."); // define grid size to determine number of rows and columns

const gridContainer = document.getElementById("grid"); //create reference to grid-container element
gridContainer.style.width = "960px"; //set fixed container width
gridContainer.style.height = "960px"; //set fixed container height

let squareSize = gridContainer.clientWidth / gridNum; //scale grid square size to fixed container size

for (let i = 0; i < gridNum * gridNum; i++) { //create loop to create divs and add to the container
  const div = document.createElement("div"); //create reference to grid-item elements
  div.classList.add("grid-item"); //add elements to classlist
  div.style.width = `${squareSize}px`; //set width based on scaled square size
  div.style.height = `${squareSize}px`; //set height based on scaled square size
  gridContainer.appendChild(div); //append items to the parent container
  let color = "#000000"; //set color to change square to on mouseover
  div.addEventListener("mouseover", () => { //on mouseover event, change the square color
    div.style.backgroundColor = color; //change background to chosen color 
  });
}

 

// Once entered, the existing grid should be removed, 
// (use remove children? or replaceChildren but place it before grid creation)
// and a new grid should be generated in the same total space as before

// Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
// Also check out prompts.
// You should be able to enter 64 and have a brand new 64x64 grid pop up 
// without changing the total amount of pixels used.

