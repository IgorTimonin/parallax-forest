//получение значения вертикального скролла
window.addEventListener('scroll', e => {
  document.documentElement.style.setProperty(
    '--scrollTop',
    `${this.scrollY}px`
  );
});

//подключение плагинов gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
});
