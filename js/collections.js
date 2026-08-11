const gall=document.querySelector(".c1");
const gal=document.querySelector(".h");
const scrollup=document.querySelector(".scroll");

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
scrollup.addEventListener("click",()=>{
    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})