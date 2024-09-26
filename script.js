const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
    let divRow = document.createElement("div");
    divRow.setAttribute("class", "divRow");
    for (let j = 0; j < 16; j++) {
        let divColumn = document.createElement("div");
        divColumn.setAttribute("class", "divColumn");
        divRow.appendChild(divColumn);
    }
    gridContainer.appendChild(divRow);
}

// gridContainer.appendChild(divRow);