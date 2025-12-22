const menuSection = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('data-burger-close');
const openBtn = document.getElementById('data-burger-open');
const menu = document.querySelector('.mobile-menu');



function closeMenuOnEsc(e) {
  if (e.key === 'Escape' && menuSection.classList.contains('is-open')) {
    closeMenu();
  }
}

function menuLinkClick(e) {
  if (e.target.closest('a')) {
    closeMenu();
  }
}

function closeMenu() {
  menuSection.classList.remove('is-open');
  document.body.style.overflow = 'visible';
  document.removeEventListener('keydown', closeMenuOnEsc);
  menu.removeEventListener('click', menuLinkClick);
}

function openMenu() {
  menuSection.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', closeMenuOnEsc);
  menu.addEventListener('click', menuLinkClick);
}


closeBtn.addEventListener('click', closeMenu);
openBtn.addEventListener('click', openMenu);
