//declarations of constants and variables

const container = document.getElementById("container");
const clearButton = document.getElementById("clearbutton");
const griditem = document.getElementsByClassName("grid-item");
const erasebutton = document.getElementById("eraserbutton");
const slider= document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
let erasestate = false;
var gridheight = 575/((slider.value)*(slider.value));
var color = document.getElementById("color");
color.innerHTML = color.value;


//functions
//TODO: dynamic size allocation, 
function makeRows(rows, cols){
    container.style.setProperty('--grid-rows',rows);
    container.style.setProperty('--grid-cols',cols);
    for(c=0; c<rows*cols; c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c+1);
        container.appendChild(cell).className = "grid-item";
        
    };
};

//TODO: add whatever color the user chooses, 
function colorGrid(e) {
    if(erasestate == false) {
        e.target.style.backgroundColor = color.value ;
    } else if(erasestate == true){ 
        e.target.style.backgroundColor = 'white' ;
    }
}

function addListener() {
    for(i = 0; i < container.childElementCount;i ++){
        griditem[i].addEventListener('mousedown', colorGrid);
    }
}

function clear() {
    container.innerHTML = '';
    makeRows(slider.value, slider.value);
    addListener();
}

function griditemheight() {
    gridheight = Number(575/(slider.value)); 
    container.style.setProperty('--grid-height',gridheight);
    console.log(gridheight)
}


//HERE THE WEBSITE STARTS WORKING

makeRows(slider.value, slider.value);
griditemheight()
addListener();
clearButton.addEventListener('click', clear);
erasebutton.onclick = function() { erasestate = !erasestate; };

slider.oninput = function () {
    output.innerHTML = this.value ;
}
slider.onchange = function () {
    clear()
    griditemheight()

}




