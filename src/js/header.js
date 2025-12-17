const menuSection = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('data-burger-close');

// Закриття меню по кнопці
closeBtn.addEventListener('click', () => {
  menuSection.classList.remove('is-open');
  document.body.style.overflow = 'visible';
});

// Відкриття меню по бургер-кнопці
const openBtn = document.getElementById('data-burger-open');
openBtn.addEventListener('click', () => {
  menuSection.classList.add('is-open');
  document.body.style.overflow = 'hidden';
});

// Закриття меню при кліку на пункт меню
const menuLinks = document.querySelectorAll('.nav-link');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuSection.classList.remove('is-open');
    document.body.style.overflow = 'visible';
  });
});
