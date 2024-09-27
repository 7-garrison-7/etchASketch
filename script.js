const grid = document.querySelector("#grid");

function makeGrid(height, width) {

    for (let i = 0; i < width; i++) {
        let divRow = document.createElement("div");
        divRow.setAttribute("class", "divRow");

        for (let j = 0; j < height; j++) {
            let divColumn = document.createElement("div");
            divColumn.setAttribute("class", "divColumn");
            divRow.appendChild(divColumn);
        }

        grid.appendChild(divRow);
    }

}

makeGrid(16, 16);

const gridSquares = document.querySelectorAll(".divColumn");

gridSquares.forEach((item) => {

    item.addEventListener("mouseenter", () => {
        item.style.backgroundColor = "red";
    });
    
});