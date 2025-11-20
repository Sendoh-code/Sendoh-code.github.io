// Simple IntersectionObserver to reveal sections on scroll.
// Each element with the 'fade-in' class will gain the 'appear' class
// once at least 10 % of it enters the viewport. This triggers a smooth
// fade-in and upward slide defined in style.css.

document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, options);
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});