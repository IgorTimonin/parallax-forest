//получение значения вертикального скролла
window.addEventListener('scroll', (e) => {
  document.documentElement.style.setProperty(
    '--scrollTop',
    `${this.scrollY}px`
  );
});

//подключение плагинов gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
});

//управление плеером
// const audio = new Audio(
//   './src/audio/alexander-nakarada-fairy-of-the-forest.mp3'
// );

// audio.addEventListener('canplaythrough', () => {
//   audio.play();
// });

// const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');

function playPause() {
  if (playBtn.classList.contains('btn-pause')) {
    audio.pause();
  } else audio.play();
  playBtn.classList.toggle('btn-pause');
}

playBtn.addEventListener('click', playPause);
