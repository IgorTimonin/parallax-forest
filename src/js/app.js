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

//Появление сообщений
window.onload = () => {
  const options = {
    root: null,
    rootMatgin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyText = entry.target;
        console.log(lazyText);
        lazyText.classList.add('floor__content_show');
        observer.unobserve(lazyText);
      }
    });
  }, options);

  const arr = document.querySelectorAll('floor__content');
  arr.forEach((i) => {
    observer.observe(i);
  });
};
