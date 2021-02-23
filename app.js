const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANAVS_SIZE = 700;

ctx.fillStyle = "white";
ctx.fillRect(0,0,CANAVS_SIZE,CANAVS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
canvas.height = CANAVS_SIZE;
canvas.width = CANAVS_SIZE;

ctx.lineWidth = 2.5;

let painting = false;
let filling = false;
function stopPainting(){
    painting=false;
}
function startPainting(){
    painting = true;
}
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting=true;
}
function onMouseUp(event){
    stopPainting();
}
function onMouseLeave(event){
    painting=false;
}
function handleColorClicked(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
function handleInputChange(event){
    ctx.lineWidth = event.target.value;
}
function handleModeClicked(event){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "paint";
    }
}
function handleCanvasClicked(){
    if(filling){
        ctx.fillRect(0,0,CANAVS_SIZE,CANAVS_SIZE)
    }else{

    }
    
}
function handleCM(event){
    event.preventDefault();
}
function handleSaveClicked(event){
    const img = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    link.href= img;
    link.download = "PaintJS[😋]";
    link.click();
}
if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvasClicked);
    canvas.addEventListener("contextmenu",handleCM);
}
Array.from(colors).forEach(color=>color.addEventListener("click",handleColorClicked));
if(range){
    range.addEventListener("input",handleInputChange);
}
if(mode){
    mode.addEventListener("click",handleModeClicked);
}
if(saveBtn){
    saveBtn.addEventListener("click",handleSaveClicked);
}