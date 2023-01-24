const text=document.querySelector(".text");
const input=document.querySelector(".input");
input.oncopy=()=>false;
input.onpaste=()=>false;
input.oncontextmenu=()=>false;
input.onselectstart=()=>false;
let allText="Essentially, nature is everything we are surrounded by like the water we drink, the air we breathe, the sun we soak in, the birds we hear chirping, the moon we gaze at and more. Above all, it is rich and vibrant and consists of both living and non-living things."
function addText(){
  text.innerHTML=allText;
}
addText();
let range=new Range();
let span=document.createElement("span");
span.style.color="green";
let txt=text.innerText;
console.log(txt);
let temp=0;
input.oninput=(event)=>{
  if(event.target.value!=="") ++temp;
  console.log(event.data);
  console.log(temp);
  console.log(event.keyCode);
  if(event.data===" " && event.data===text[temp]) event.target.value="";
  text.innerText=txt;
  range.setStart(text.firstChild,0);
  range.setEnd(text.firstChild,temp)
  range.surroundContents(span)
}
