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

//плеер на страницу
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

// function onEntry(entry) {
//   entry.forEach((change) => {
//     if (change.isIntersecting) {
//       change.target.classList.add('floor__content_show');
//     }
//   });
// }
// let options = { threshold: [0.5] };
// let observer = new IntersectionObserver(onEntry, options);
// let elements = document.querySelectorAll('.floor__content_animation');
// for (let elm of elements) {
//   observer.observe(elm);
// };
