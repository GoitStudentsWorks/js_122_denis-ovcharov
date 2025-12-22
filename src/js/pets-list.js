import { Pagination } from 'swiper/modules';
import { getCategories, getAnimals } from './api.js';
import { openPetModal } from './modal-animal-details.js';
import { openModalOrder } from './modal-order.js';
import spriteUrl from '../img/sprite.svg?url';
//!=============================================================
let currentPage = 1;
let totalPages = 1;
let limit = 8;
let currentCategoryId = '';
let allAnimals = [];
//!=============================================================
export async function initPetsList() {
  const categories = await getCategories();

  const CATEGORY_ORDER = [
    'Собаки',
    'Коти',
    'Кролики',
    'Гризуни',
    'Птахи',
    'Тварини з особливими потребами',
    'Терміново шукають дім',
  ];
  const sortedCategories = [...categories].sort((a, b) => {
    const aIndex = CATEGORY_ORDER.indexOf(a.name);
    const bIndex = CATEGORY_ORDER.indexOf(b.name);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });
  renderCategories(sortedCategories);
  await loadAnimals();
}
//!=============================================================
const refs = {
  petsFilters: document.querySelector('.pets-filters'),
  petsList: document.querySelector('.pets-list'),
  loadMoreBtn: document.querySelector('.load-more'),
  loaderPetsList: document.querySelector('.loader'),
  pagination: document.querySelector('.pagination')
};
//!=============================================================
export function renderCategories(categories) {
  const allCategories = [{ name: 'Всі', _id: '' }, ...categories];
  const markup = allCategories
    .map(
      c =>
        `<li class="pets-filters-item"><button class="pets-filters-btn" data-category-id="${c._id}">${c.name}</button></li>`
    )
    .join('');
  refs.petsFilters.innerHTML = markup;
  const firstCategoryButton = document.querySelector('.pets-filters-btn');
  if (firstCategoryButton) {
    firstCategoryButton.classList.add('pets-filters-btn-active');
  }
}
//!=============================================================
export function renderAnimals(animals, { append = true } = {}) {
  const markup = animals
    .map(({ _id, name, image, species, age, gender, shortDescription, categories }) => {
      const categoriesMarkup = categories.map(c => `<p class="pet-category">${c.name}</p>`).join('');
      return `
        <li class="pet-card">
          <img class="pet-img" src="${image}" alt="${name}" />
          <div class="pet-info">
            <p class="pet-type">${species}</p>
            <h3 class="pet-name">${name}</h3>
            <div class="pet-categories">${categoriesMarkup}</div>
            <ul class="pet-meta">
              <li>${age}</li>
              <li>${gender}</li>
            </ul>
            <p class="pet-descr">${shortDescription}</p>
            <button class="pet-details-btn" data-id="${_id}">Дізнатись більше</button>
          </div>
        </li>
      `;
    }).join('');

  if (!append) refs.petsList.innerHTML = '';
  refs.petsList.insertAdjacentHTML('beforeend', markup);

  if (!append) allAnimals = animals;
  else allAnimals.push(...animals);
}
//!===============================================================================
export async function loadAnimals({ reset = false } = {}) {
  showLoader();
  try {
    const { animals, totalItems } = await getAnimals({
      page: currentPage,
      limit,
      categoryId: currentCategoryId
    });
    const append = !reset && window.innerWidth < 768;
    renderAnimals(animals, { append });

    totalPages = Math.ceil(totalItems / limit);

    if (window.innerWidth < 768) {
      if (currentPage < totalPages) showLoadMoreButton();
      else hideLoadMoreButton();
      if (!reset) currentPage++;
      refs.pagination.innerHTML = '';
    } else {
      iziToast.error({
        message:'Список тварин закінчився =(',
        position:'topRight'
      })
      hideLoadMoreButton();
      renderPagination();
    }
  } catch (err) {
    console.error('API error:', err);
  } finally {
    hideLoader();
  }
}
//!===============================================================================
function renderPagination() {
  if (totalPages <= 1 || window.innerWidth < 768) {
    refs.pagination.innerHTML = '';
    return;
  }

  refs.pagination.innerHTML = '';

  const prev = document.createElement('button');
  prev.classList.add('pagination-arrow');
  prev.innerHTML = `
    <svg class="pagination-arrow-img" width="16" height="16">
      <use href="${spriteUrl}#icon-left"></use>
    </svg>
  `;
  prev.disabled = currentPage === 1;
  prev.addEventListener('click', () => {
    currentPage--;
    loadAnimals({ reset: true });
    scrollToTop();
  });
  refs.pagination.appendChild(prev);

  const pages = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    }

    else if (currentPage >= totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    }

    else {
      pages.push(
        1, '...',
        currentPage - 1, currentPage, currentPage + 1,
        '...', totalPages
      );
    }
  }

  pages.forEach(num => {
    const btn = document.createElement('button');
    btn.classList.add('pagination-btn');

    btn.textContent = num;

    if (num === currentPage) btn.classList.add('pagination-btn-active');

    if (num !== '...') {
      btn.addEventListener('click', () => {
        if (currentPage === num) return;
        currentPage = num;
        loadAnimals({ reset: true });
        scrollToTop();
      });
    } else {
      btn.disabled = true;
      btn.classList.add('pagination-dots');
    }

    refs.pagination.appendChild(btn);
  });

  const next = document.createElement('button');
  next.classList.add('pagination-arrow');
  next.innerHTML = `
    <svg class="pagination-arrow-img" width="16" height="16">
      <use href="${spriteUrl}#icon-right"></use>
    </svg>
  `;
  next.disabled = currentPage === totalPages;
  next.addEventListener('click', () => {
    currentPage++;
    loadAnimals({ reset: true });
    scrollToTop();
  });

  refs.pagination.appendChild(next);
}
//!===============================================================================
function scrollToTop() {
  const section = document.querySelector('#pets-list');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
//!===============================================================================
export function scroll() {
  const firstCard = document.querySelector('.pet-card');
  if (!firstCard) return;
  const itemHeight = firstCard.getBoundingClientRect().height;
  window.scrollBy({
    top: itemHeight,
    left: 0,
    behavior: 'smooth',
  });
}
//!===============================================================================
export function showLoader() {
  document.body.style.overflowX = 'hidden';
  refs.loaderPetsList.classList.remove('visually-hidden');
}
//!===============================================================================
export function hideLoader() {
  refs.loaderPetsList.classList.add('visually-hidden');
}
//!===============================================================================
export function showLoadMoreButton() {
  refs.loadMoreBtn.classList.remove('visually-hidden');
}
//!===============================================================================
export function hideLoadMoreButton() {
  refs.loadMoreBtn.classList.add('visually-hidden');
}
//!===============================================================================
refs.loadMoreBtn.addEventListener('click', async () => {
  hideLoadMoreButton();
  await loadAnimals();
  scroll();
});
//!===============================================================================
refs.petsFilters.addEventListener('click', e => {
  const btn = e.target.closest('.pets-filters-btn');
  if (!btn) return;

  document
    .querySelectorAll('.pets-filters-btn')
    .forEach(b => b.classList.remove('pets-filters-btn-active'));
  btn.classList.add('pets-filters-btn-active');
  currentCategoryId = btn.dataset.categoryId || '';
  currentPage = 1;
  refs.petsList.innerHTML = '';

  loadAnimals({ reset: true });
});
//!=================================================================================
document.addEventListener('click', e => {
  const btn = e.target.closest('.pet-modal-btn');
  if (!btn) return;
  openModalOrder(btn.dataset.animalId);
});

//!======================================================================================
document.addEventListener('click', e => {
  if (e.target.classList.contains('pet-details-btn')) {
    const id = e.target.dataset.id;
    const animal = allAnimals.find(a => a._id === id);
    if (!animal) return;
    openPetModal(animal);
  }
});
//!=======================================================================================
let lastMode = window.innerWidth < 768 ? 'mobile' :
               window.innerWidth < 1440 ? 'tablet' : 'desktop';

window.addEventListener('resize', () => {

  const newMode = window.innerWidth < 768 ? 'mobile' :
                  window.innerWidth < 1440 ? 'tablet' : 'desktop';

  if (newMode === lastMode) return;

  lastMode = newMode;

  if (newMode === 'mobile') {
    limit = 8;
    refs.pagination.innerHTML = '';
    
    currentPage=1;
    loadAnimals({ reset: true });
    currentPage++;
    if (currentPage <= totalPages) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
    return;
  }

  if (newMode === 'tablet') {
    limit = 8;
    currentPage = 1;
    allAnimals = [];
    refs.petsList.innerHTML = '';
    loadAnimals({ reset: true });
    return;
  }

  if (newMode === 'desktop') {
    limit = 9;
    currentPage = 1;
    allAnimals = [];
    refs.petsList.innerHTML = '';
    loadAnimals({ reset: true });
  }
});