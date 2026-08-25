/* ============================================
   NAVBAR — comportamiento
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-panel a');
  const hamburger = document.querySelector('.hamburger');
  const mobilePanel = document.querySelector('.mobile-panel');
  const backdrop = document.querySelector('.backdrop');

  /* --------------------------------------------
     1. Efecto glassmorphism al hacer scroll
     -------------------------------------------- */
  const SCROLL_THRESHOLD = 40;

  function handleScroll(){
    if (window.scrollY > SCROLL_THRESHOLD){
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

});


const tl = gsap.timeline();

tl.from(".title", {
    opacity:0,
    y:100,
    duration:1
})
.from(".subtitle", {
    opacity:0,
    y:50,
    duration:.8
}, "-=0.5")
.from(".description", {
    opacity:0,
    y:40,
    duration:.8
}, "-=0.4")
.from(".buttons a", {
    opacity:0,
    y:20,
    stagger:.15
}, "-=0.3");

/* --------------------------------------------
    button
     -------------------------------------------- */


document.addEventListener('DOMContentLoaded', () => {
  const btnCV = document.querySelector('.btn-cv');
  console.log(btnCV);

  btnCV.addEventListener('click', () => {
    gsap.fromTo(
      btnCV,
      { boxShadow: '0 0 0px rgba(215, 255, 47, 0)' },
      {
        boxShadow: '0 0 35px rgba(215, 255, 47, 0.9)',
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'power1.out'
      }
    );
  });
});


