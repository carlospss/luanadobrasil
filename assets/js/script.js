// ========== Header — JavaScript ==========

const header = document.getElementById('site-header');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

AOS.init();

// Header compacto com sombra ao rolar a página
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
menuToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Fecha o menu mobile ao clicar em um link
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuToggle.classList.remove('open');
  });
});


  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.animationDelay = (e.target.dataset.delay || 0) + 'ms';
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  },{threshold:.15});
  document.querySelectorAll('.card').forEach(c=>io.observe(c));