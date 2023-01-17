////Football game
const stadium=document.querySelector(".stadium");
const ball=document.querySelector(".ball");
function press(event){
    ball.style.top=`${event.offsetY}px`
    ball.style.left=`${event.offsetX}px`
}



