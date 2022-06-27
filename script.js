//declarations of constants and variables

const container = document.getElementById("container");
const clearButton = document.getElementById("clearbutton");
const griditem = document.getElementsByClassName("grid-item")

//functions
//TODO: dynamic size allocation, 
function makeRows(rows, cols){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    for(c=0; c<rows*cols; c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c+1);
        container.appendChild(cell).className = "grid-item";
        container.appendChild(cell).addEventListener('mousedown',colorGrid);
    };
    
};

//TODO: add whatever color the user chooses, 
function colorGrid(e, color='black') {
    e.target.style.backgroundColor = color;
}



function clear() {
    container.innerHTML = '';
    makeRows(4, 4);
}

//HERE THE WEBSITE STARTS WORKING
makeRows(4, 4);
clearButton.addEventListener('click', colorGrid(e,'black'))