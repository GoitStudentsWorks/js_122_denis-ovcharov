import { getCategories, getAnimals } from './api.js';

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
export function renderAnimals(animals) {
  const markup = animals
    .map(
      ({
        _id,
        name,
        image,
        species,
        age,
        gender,
        shortDescription,
        categories,
      }) => {
        const categoriesMarkup = categories
          .map(c => `<p class="pet-category">${c.name}</p>`)
          .join('');
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
            <button class="pet-details-btn" data-id="${_id}">
              Дізнатись більше
            </button>
          </div>
        </li>
      `;
      }
    )
    .join('');
  refs.petsList.insertAdjacentHTML('beforeend', markup);
}
//!===============================================================================
export async function loadAnimals() {
  showLoader();
  try {
    const { animals, totalItems } = await getAnimals({
      page: currentPage,
      limit,
      categoryId: currentCategoryId,
    });

    allAnimals.push(...animals);

    if (animals.length === 0) {
      hideLoadMoreButton();
      return;
    }
    renderAnimals(animals);

    totalPages = Math.ceil(totalItems / limit);
    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
    currentPage++;
  } catch (err) {
    console.error('API error:', err);
  } finally {
    hideLoader();
  }
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
export function scroll() {
  const firstCard = document.querySelector('.pet-card');
  if (!firstCard) return;
  const itemHeight = firstCard.getBoundingClientRect().height;
  window.scrollBy({
    top: itemHeight * 2,
    left: 0,
    behavior: 'smooth',
  });
}
//!===============================================================================
refs.petsFilters.addEventListener('click', e => {
  hideLoadMoreButton();
  const btn = e.target.closest('.pets-filters-btn');
  if (!btn) return;

  document
    .querySelectorAll('.pets-filters-btn')
    .forEach(b => b.classList.remove('pets-filters-btn-active'));
  btn.classList.add('pets-filters-btn-active');
  currentCategoryId = btn.dataset.categoryId || '';
  currentPage = 1;
  refs.petsList.innerHTML = '';

  loadAnimals();
});
//!=================================================================================
document.addEventListener('click', e => {
  if (e.target.classList.contains('pet-modal-btn')) {
    openModalOrder();
  }
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
