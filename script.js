const grid = document.querySelector("#grid");

function makeGrid(dimension) {

    grid.textContent = '';
    for (let i = 0; i < dimension; i++) {
        let divRow = document.createElement("div");
        divRow.setAttribute("class", "divRow");

        for (let j = 0; j < dimension; j++) {
            let divColumn = document.createElement("div");
            divColumn.setAttribute("class", "divColumn");
            divRow.appendChild(divColumn);
        }

        grid.appendChild(divRow);
    }

    const gridSquares = document.querySelectorAll(".divColumn");
    
    gridSquares.forEach((item) => {
    
        item.addEventListener("mouseenter", () => {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            item.style.backgroundColor = "#" + randomColor;
        });
    
    });
}

makeGrid(16);

function makeNewGrid () {
    const dimension = prompt("Enter number of squares per side (max. 100): ");

    if (dimension < 100) {
        makeGrid(dimension);
    } else {
        alert("Dimension must be less than 100!");
    }
    
}