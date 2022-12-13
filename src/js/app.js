//получение значения вертикального скролла
window.addEventListener('scroll', (e) => {
  document.documentElement.style.setProperty(
    '--scrollTop',
    `${this.scrollY}px`
  );
  document.documentElement.style.setProperty(
    '--scrollData',
    this.scrollY
  );
});

//подключение плагинов gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
});

//плеер на страницу
const playBtn = document.getElementById('playBtn');

function playPause() {
  if (playBtn.classList.contains('btn-pause')) {
    audio.pause();
  } else audio.play();
  playBtn.classList.toggle('btn-pause');
}

playBtn.addEventListener('click', playPause);
