const DEF_COLOUR = "rgb(0, 0, 0)";
const DEF_RESOLUTION = 32; 

let grid = document.querySelector(".grid");
let resolutionBtn = document.querySelector(".resolution");
let clearBtn = document.querySelector(".clear");
let rainbowBtn = document.querySelector(".rainbow");
let body = document.querySelector("body");
let mouseDown = false;
let rainbowMode = false;

let colour = DEF_COLOUR;
let gridResolution = DEF_RESOLUTION;


resolutionBtn.addEventListener("click", (e) => {
    let res = prompt("Input an integer between 1 and 64: ");
    console.log(parseInt(res)) ;
    if (res == null || parseInt(res) == 'NaN') return;
    if (res > 64) res = 64;
    createGrid(res, squareSize(res));
});

clearBtn.addEventListener("click", (e) => {
    createGrid(gridResolution, squareSize(gridResolution));
});


rainbowBtn.addEventListener("click", (e) => {
    if (rainbowMode == true){
      rainbowMode = false;
      colour = DEF_COLOUR;
      console.log(colour)
    } else {
        rainbowMode = true;
        body.setAttribute("style", "background-color:");
    }
});

function squareSize(res) {
    console.log("square size is: " + 512 / res)
    return 512 / res
};

function createGrid(res, squareSize) {
    let square = document.querySelectorAll(".square");
    square.forEach(sqr => {
        sqr.remove();
    });
    console.log("createGrid at " +res+ "px resolution")
    for (let i = res**2; i > 0; --i) {
        square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("style", `height:${squareSize}px; width:${squareSize}px`);
        grid.appendChild(square);
        square.addEventListener("pointerdown", paint);    
        square.addEventListener("pointerover", paint);
        square.addEventListener("dragstart", function (e){
            e.preventDefault();
        });
    };

};

document.body.onpointerup = function() {
    mouseDown = false;
};

function paint(mouseEvent) {
    if (mouseEvent.type == "pointerdown") mouseDown = true;
    if (mouseDown == false) return;
    console.log(mouseDown);
    console.log(mouseEvent.type);
    if (mouseDown == true) {
        if (rainbowMode == true) {
            console.log("colour change")
            changeColour();
        }
        mouseEvent.target.style.background = colour;
    };
};

function changeColour() {
    if (rainbowMode == true) {
        console.log("HERE");
        colour = `rgb(${randInt()}, ${randInt()}, ${randInt()})`;
    };
}

function randInt() {
    return Math.floor(Math.random () * 255)
};

window.onload = () => {
    createGrid(gridResolution, squareSize(gridResolution));
}

// function toggleGrid() {

// };
 
// ==============================================

// for (i = square.length; i > 0; --i) {
//     square.forEach((pixel) => {
//         pixel.addEventListener("pointerdown", paint);    
//         pixel.addEventListener("pointerup", paint);
//         pixel.addEventListener("pointerover", paint);
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
//         pixel.addEventListener("pointerdown", paint);    
//         pixel.addEventListener("pointerup", paint);
//         pixel.addEventListener("pointerover", paint);
//         pixel.addEventListener("dragstart", function (e){
//             e.preventDefault();
//         });
//     });
// };

// function paint(mouseEvent) {
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