let grid = document.querySelector(".grid");
let resolution = document.querySelector(".resolution");
let gridResolution = 64;
let squareSize = 512 / gridResolution;
let mouseDown = false;

resolution.addEventListener("click", (e) => {
    gridResolution = prompt("Input an integer between 1 and 64: ");
});

function createGrid(res) {
    console.log("create")
    for (i = res**2; i > 0; --i) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `height:${squareSize}px; width:${squareSize}px`);
        grid.appendChild(square);
        square.addEventListener("pointerdown", valueChange);    
        square.addEventListener("pointerover", valueChange);
        square.addEventListener("dragstart", function (e){
            e.preventDefault();
        });
    };
};

document.body.onpointerup = function() {
    mouseDown = false;
};

function valueChange(mouseEvent) {
    if (mouseEvent.type == "pointerdown") mouseDown = true;
    if (mouseDown == false) return;
    console.log(mouseDown);
    console.log(mouseEvent.type);
    if (mouseDown == true) {
        mouseEvent.target.style.background = "black";
    };
};

function toggleGrid() {

};

window.onload = () => {
    console.log("load");
    console.log(gridResolution);
    createGrid(gridResolution);
}

// for (i = square.length; i > 0; --i) {
//     square.forEach((pixel) => {
//         pixel.addEventListener("pointerdown", valueChange);    
//         pixel.addEventListener("pointerup", valueChange);
//         pixel.addEventListener("pointerover", valueChange);
//         pixel.addEventListener("dragstart", function (e){
//             e.preventDefault();
//         });
//     });
// };

// let body = document.querySelector("body");
// let flexContainer = document.createElement("div");
// let grid = document.createElement("div");
// let sidebar = document.createElement("div");
// let header = document.querySelector("h1");
// let resetBtn = document.querySelector(".reset");
// let clearBtn = document.querySelector(".clear");
// let rainbowBtn = document.querySelector(".rainbow");

// flexContainer.appendChild(sidebar);
// flexContainer.appendChild(grid);

// // header.setAttribute("style", "font-size:48px");

// // resetBtn.setAttribute("style", "border-radius:4px; color:white; height:32px; width:64px; border:0; background-color:blue");

// // sidebar.appendChild(header);
// // sidebar.appendChild(resetBtn);

// grid.setAttribute("class", "grid");
// grid.setAttribute("style", "display:flex; flex-shrink:0; flex-wrap:wrap; height:512px;"
//     + "width:512px; display:flex; border:4px solid black"
// );

// let resolution = 16;
// let squareSize = 512 / gridResolution - 2;

// function createGrid() {
//     for (i = gridResolution**2; i > 0; --i) {
//         let square = document.createElement("div");
//         square.setAttribute("class", "square");
//         square.setAttribute("style", `border:1px solid rgb(255, 255, 255);`
//             + `height:${squareSize}px; width:${squareSize}px`);
//             grid.appendChild(square);
//     };
// };

// createGrid();

// let square = document.querySelectorAll(".square");
// let mouseDown = false;

// for (i = square.length; i > 0; --i) {
//     square.forEach((pixel) => {
//         pixel.addEventListener("pointerdown", valueChange);    
//         pixel.addEventListener("pointerup", valueChange);
//         pixel.addEventListener("pointerover", valueChange);
//         pixel.addEventListener("dragstart", function (e){
//             e.preventDefault();
//         });
//     });
// };

// function valueChange(mouseEvent) {
//     if (mouseEvent.type == "pointerup") mouseDown = false;
//     if (mouseEvent.type == "pointerdown") mouseDown = true;
//     if (mouseDown == false) return;
//     console.log(mouseDown);
//     console.log(mouseEvent.type);
//     if (mouseDown == true) {
//         mouseEvent.target.style.background = "black";
//         mouseEvent.target.style.border = "1px solid black";
//     };
// };

// resetBtn.addEventListener("click", (e) => {
//     createGrid();
// });