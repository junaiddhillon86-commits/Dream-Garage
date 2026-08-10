const menubtn=document.querySelector(".menu");
const sidebar=document.getElementById("sidebar");
  const video = document.getElementById('myvideo');
const play=document.querySelector(".play");
const hdr = document.getElementById('hdr');
const mid=document.querySelector(".mid");
const h4t=document.querySelector(".h4");
const scroll=document.querySelector(".scroll");


menubtn.addEventListener("click", () => {
    sidebar.classList.toggle('open');       // opens/closes the sidebar
    menubtn.classList.toggle('on-top');     // raises the BUTTON above it
});

play.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    play.textContent = "Pause ⏸️";
  } else {
    video.pause();
    play.textContent = "Play ▶️";
  }
});
window.addEventListener('scroll', () => {
  const position = hdr.getBoundingClientRect().top;
 const midBottom = mid.getBoundingClientRect().bottom;
  if (position < window.innerHeight / 2) {
    document.body.classList.add('mode');
    hdr.classList.add('mode');
  } else {
    document.body.classList.remove('mode');
    hdr.classList.remove('mode');
  }

  if(midBottom<window.innerHeight/2){
    document.body.classList.add('mode2');
    hdr.classList.add('mod2');
}
else{
    document.body.classList.remove('mode2');
    hdr.classList.remove('mod2');
}
});
window.addEventListener("scroll", () => {
  const pos = h4t.getBoundingClientRect().top-190;
  if (pos < window.innerHeight / 2) {
    document.querySelector("#p").classList.add("show");
    document.querySelector("#l").classList.add("show");
  } else {
    document.querySelector("#p").classList.remove("show");
    document.querySelector("#l").classList.remove("show");
  }
})
scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
