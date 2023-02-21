//получение значения вертикального скролла
window.addEventListener('scroll', (e) => {
  document.documentElement.style.setProperty(
    '--scrollTop',
    `${this.scrollY}px`
  );
  document.documentElement.style.setProperty('--scrollData', this.scrollY);
});

//подключение плагинов gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
  smooth: 1.5,
  effects: true,
});

//появление текста
let textItems = gsap.utils.toArray('.floor__content');

  textItems.forEach((item) => {
    gsap.fromTo(
      item,
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 0.8,
        scrollTrigger: {
          trigger: item,
          start: '0 70%',
          end: '100px 20%',
          scrub: true,
        },
      }
    );
  });

//плеер на странице
const playBtn = document.getElementById('playBtn');

function playPause() {
  if (playBtn.classList.contains('btn-pause')) {
    audio.pause();
  } else audio.play();
  playBtn.classList.toggle('btn-pause');
}

playBtn.addEventListener('click', playPause);
