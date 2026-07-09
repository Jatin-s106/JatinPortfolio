// mobile tab menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const tabs = document.querySelector('.tabs');
  if (menuBtn && tabs) {
    menuBtn.addEventListener('click', () => {
      tabs.classList.toggle('open');
    });
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // hero typing effect (home page only)
  const typeTarget = document.getElementById('type-target');
  if (typeTarget) {
    const full = typeTarget.getAttribute('data-text') || '';
    let i = 0;
    typeTarget.textContent = '';
    function type() {
      if (i <= full.length) {
        typeTarget.textContent = full.slice(0, i);
        i++;
        setTimeout(type, 45);
      }
    }
    type();
  }

  // fake contact form submit
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Message sent — I\'ll reply soon';
      btn.disabled = true;
    });
  }
});
