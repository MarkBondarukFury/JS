"use strict"

let runButton = document.getElementById("runButton");
if (runButton)
    runButton.addEventListener("click", tableProccessing);

function tableProccessing() {
    let rows = document.getElementsByClassName("inputRows")[0].value;
    let columns = document.getElementsByClassName("inputColumns")[0].value;
    let tableDiv = document.createElement("div");
    tableDiv.className = "tableDiv";

    let clickcount = 0;
    tableDiv.addEventListener("click", function(event) {
        if(event.target.tagName === "TD") {
            if (event.target.style.backgroundColor === "" || event.target.style.backgroundColor === "white") {
                event.target.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
            } else {
                event.target.style.backgroundColor = "white";
                clickcount = 0;
            }
        }
    })
    let tables = document.getElementsByTagName("table");
    if (tables[0] != undefined)
        tables[0].remove();
    let table = document.createElement("table");
    table.className = "table";
    let tbody = table.appendChild(document.createElement("tbody"));
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let td = document.createElement("td");
            td.innerText = (i + 1) + " " + (j + 1);
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }
    tableDiv.appendChild(table);
    document.body.appendChild(tableDiv);
}