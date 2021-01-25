const cavas = document.getElementById("jsCanvas");
let painting = false;

function stopPainting(){
    painting=false;
}
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(event);
}

function onMouseDown(event){
    painting=true;

}
function onMouseUp(event){
    stopPainting()
}
function onMouseLeave(event){
    painting=false;
}
if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedonw",onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave",stopPainting);
}