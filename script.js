
let gridNum = 16; //initial grid size
const gridContainer = document.getElementById("grid"); //create reference to grid-container element
createGrid(gridNum); //create 16x16 grid to draw


function getRandomRGB() { //get RGB value to use as color reference 
    const r = Math.floor(Math.random() * 256); //randomize references to each RGB value
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; //format return as RGB value
  }


function createGrid(gridNum) { //create a new grid
    deleteGrid(); // clear grid for new inputs
    let squareSize = gridContainer.clientWidth / gridNum; //scale grid square size to fixed container size

    for (let i = 0; i < gridNum * gridNum; i++) { //create loop to create divs and add to the container
      const square = document.createElement("div"); //create reference to grid-item elements
      square.classList.add("grid-item"); //add elements to classlist
      square.style.width = `${squareSize}px`; //set width based on scaled square size
      square.style.height = `${squareSize}px`; //set height based on scaled square size
      gridContainer.appendChild(square); //append items to the parent container
 
        square.addEventListener("mouseover", () => { //on mouseover event, change the square color
        square.style.backgroundColor = "#000000"; //change square color to black on mouseover
        let opacity = square.style.opacity; //variable to hold the opacity style feature
        if (opacity) { //extra credit opacity "sketch mode" - progressive darkening effect
            square.style.opacity = Number(opacity) + 0.2; //increase opacity 20% on each mouseover
        } else {
            square.style.opacity = 0.2; //start at 20%
        }
      });
    }
}


function deleteGrid() { //clear grid contents
    document.querySelector("div").innerHTML = ""; //empty elements from container
}


function updateGrid() { //clear and update grid with new size squares
    const gridContainer = document.querySelector("grid"); //create reference to grid-container
    let newGridNum = prompt("Enter number of grid squares per side up to 100."); //get number of squares from user
    deleteGrid(); //delete existing grid content
    createGrid(newGridNum); //create new grid with updated amount of squares
}


const resetButton = document.getElementById("reset"); //reference reset button element
resetButton.addEventListener("click", (updateGrid)); //run updateGrid each time button is clicked
    

