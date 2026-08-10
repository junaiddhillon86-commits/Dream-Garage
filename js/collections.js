const gall=document.querySelector(".c1");
const gal=document.querySelector(".h");

window.addEventListener("scroll",()=>{
    const pos=gall.getBoundingClientRect().bottom;
    const po=gal.getBoundingClientRect().bottom;
    if(pos<window.innerHeight/2){
        document.body.style.backgroundColor="grey";
    }
    else{
        document.body.style.backgroundColor="white";
    }
    if(po<window.innerHeight/2){
         document.body.style.backgroundColor="white";
    }
    
})