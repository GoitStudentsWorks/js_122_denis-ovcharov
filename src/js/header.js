const menuSection = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('data-burger-close');
const openBtn = document.getElementById('data-burger-open');
const menuLinks = document.querySelectorAll('.mobile-nav-list a');


function closeMenu() {
  menuSection.classList.remove('is-open');
  document.body.style.overflow = 'visible';
}

function openMenu() {
  menuSection.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

// Закриття по кнопці
closeBtn.addEventListener('click', closeMenu);

// Відкриття по бургер кнопці
openBtn.addEventListener('click', openMenu);

// Закриття по пунктам меню
menuLinks.forEach(link => link.addEventListener('click', closeMenu));

// Escape закриває меню
document.addEventListener('keydown', closeMenu);