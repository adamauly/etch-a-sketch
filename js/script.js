let body = document.querySelector("body");
let grid = document.createElement("div");
let flexContainer = document.createElement("div");
let header = document.querySelector("h1");
let sidebar = document.createElement("div");

flexContainer.setAttribute("style", "display:flex");
body.appendChild(flexContainer);
flexContainer.setAttribute("style", "display:flex; text-align:top;"
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
    + "width:768px; display:flex; border:4px solid black; background:white;"
);

let gridSize = 16;
let squareSize = 768 / gridSize - 2;

for (i = gridSize**2; i > 0; --i) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("style", `border:1px solid black; opacity:8%;`
        + `height:${squareSize}px; width:${squareSize}px`);
    grid.appendChild(square);
};

