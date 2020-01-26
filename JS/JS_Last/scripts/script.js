"use strict"

let runButton = document.getElementById("runButton");
if (runButton)
    runButton.addEventListener("click", tableProccessing);

function tableProccessing() {
    let rows = document.getElementsByClassName("inputRows")[0].value;
    let columns = document.getElementsByClassName("inputColumns")[0].value;
    let tableDiv = document.createElement("div");
    tableDiv.className = "tableDiv";
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
            let clickcount = 0;
            td.addEventListener("click", function () {
                clickcount++
                if (clickcount === 1) {
                    td.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
                } else {
                    td.style.backgroundColor = "white";
                    clickcount = 0;
                }
            })
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    }
    tableDiv.appendChild(table);
    document.body.appendChild(tableDiv);
}