const p=document.querySelector(".play");
  const video = document.getElementById('myvideo');



p.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    play.textContent = "Pause ⏸️";
  } else {
    video.pause();
    play.textContent = "Play ▶️";
  }
});

   const track = document.getElementById('track');

    // Duplicate the images once so the strip can loop seamlessly
    track.innerHTML += track.innerHTML;

    let pos = 0;          // current scroll position in px
    let half = 0;         // width of one full set of images (for the loop point)
    const speed = 70;     // px per second — raise/lower to change speed
    let lastTime = null;

    function measure() {
      half = track.scrollWidth / 2;
    }
    measure();
    window.addEventListener('resize', measure);

    function animate(time) {
      if (lastTime === null) lastTime = time;
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      pos += speed * dt;
      if (pos >= half) pos -= half; // snap back invisibly once one full set has scrolled by

      track.style.transform = `translateX(${-pos}px)`;
      requestAnimationFrame(animate);
    }
     requestAnimationFrame(animate);

  