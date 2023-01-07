////home work 
const calc=(n)=>{
    for(let i=0;i<100;i++){
        if(Number(wrapper.children[i].textContent)%+n==0){
            wrapper.children[i].textContent="*"
            wrapper.children[i].style.fontSize="20px"
        }
    }
}
let body=document.querySelector('body');
body.style.width="100%";
body.style.height="100vh";
let title=document.createElement("h1");
title.classList.add("title");
title.style.textAlign="center"
title.textContent="Dynamic changing buttons"
body.append(title)
let wrapper=document.createElement("div");
wrapper.classList.add("wrapper")
body.append(wrapper)
wrapper.style.width="100vw";
wrapper.style.height="95vh";
wrapper.style.backgroundColor="red";
wrapper.style.cssText=`
        display:flex;
        align-items:center;
        justify-content:space-around;
        flex-wrap:wrap;
        cursor:pointer;
    `;

for(let i=1;i<=100;i++){
    let buttonElement=document.createElement("button");
    buttonElement.style.listStyle="none";
    buttonElement.style.cssText=`
        display:flex;
        align-items:center;
        justify-content:center
    `;
    buttonElement.style.width="9.5vw";
    buttonElement.style.height="10vh";
    buttonElement.style.border="1px solid black";
    buttonElement.style.marginBottom="5px";
    let text=document.createTextNode(`${i}`)
    let piElement=document.createElement("p");
    piElement.append(text)
    piElement.style.fontSize="20px"
    buttonElement.append(piElement);
    buttonElement.setAttribute("onclick","calc(`${this.textContent}`)")
    wrapper.append(buttonElement)
    if(i%10===1){
        buttonElement.style.backgroundColor="red"
    }else if(i%10===2){
        buttonElement.style.backgroundColor="bronze"
    }else if(i%10===3){
        buttonElement.style.backgroundColor="silver"
    }else if(i%10===4){
        buttonElement.style.backgroundColor="gold"
    }else if(i%10===5){
        buttonElement.style.backgroundColor="#0b74ad"
    }else if(i%10===6){
        buttonElement.style.backgroundColor="#154c79"
    }else if(i%10===7){
        buttonElement.style.backgroundColor="#e28743"
    }else if(i%10===8){
        buttonElement.style.backgroundColor="yellow"
    }else if(i%10===9){
        buttonElement.style.backgroundColor="grey"
    }else if(i%10===0){
        buttonElement.style.backgroundColor="pink"
    }
}





