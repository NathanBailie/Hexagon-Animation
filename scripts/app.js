"use strict"

let container = document.querySelector('.container');
let AmountOfHexagonsByWidth, AmountOfHexagonsByHeight;
let amountOfHexagons;

function start() {
    resizeReset();
    createHexagons(AmountOfHexagonsByHeight, AmountOfHexagonsByWidth);
}

function resizeReset() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    AmountOfHexagonsByWidth = Math.floor(width / 100 + 1);
    AmountOfHexagonsByHeight = Math.floor(height / 76 + 1);
    amountOfHexagons = AmountOfHexagonsByWidth * AmountOfHexagonsByHeight;
}

function createHexagons(heightCount, widthCount) {

    for (let i = 0; i < heightCount; i++) {
        let row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < widthCount; j++) {
            let hexagon = document.createElement("div");
            hexagon.className = "hexagon";
            row.appendChild(hexagon);
        };

        container.appendChild(row);
    }
}

window.addEventListener('DOMContentLoaded', start);
