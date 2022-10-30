let body = document.querySelector("body");
let grid = document.createElement("div");
let flexContainer = document.createElement("div");
let header = document.querySelector("h1");
let sidebar = document.createElement("div");

flexContainer.setAttribute("style", "display:flex");
body.appendChild(flexContainer);
flexContainer.setAttribute("style", "display:flex;"
    + "align-items:flex-start; margin-top:64px"
);

sidebar.setAttribute("style", "border:1px solid red; display:flex; flex-shrink:0; flex-basis:0;"
+ "min-width:425px; margin-left:128px")
flexContainer.appendChild(sidebar);

header.setAttribute("style", "font-size:64px")
sidebar.appendChild(header);

grid.setAttribute("class", "grid");
flexContainer.appendChild(grid);
grid.setAttribute("style", "display:flex; flex-shrink:0; flex-wrap:wrap; height:768px;"
    + "width:768px; display:flex; border:4px solid black; background:white"
);

let gridSize = 4;
let squareSize = 768 / gridSize - 2;

for (i = gridSize**2; i > 0; --i) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("style", `border:1px solid black; opacity:8%; backgound-color:red`
        + `height:${squareSize}px; width:${squareSize}px`);
        grid.appendChild(square);
};

let square = document.querySelectorAll(".square");
let mouseDown = false;

for (i = square.length; i > 0; --i) {
    square.forEach((pixel) => {
        pixel.addEventListener("mousedown", function (e) {
            mouseDown = true;
            e.target.style.background = "black"
        })
        pixel.addEventListener("mouseup", function (d) {
            mouseDown = false;
            console.log(mouseDown);
        })
        pixel.addEventListener("mouseenter", function (e) {
            if (mouseDown == true) e.target.style.background = "black";
        });
    });
};

console.log(mouseDown);