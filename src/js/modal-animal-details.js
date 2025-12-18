import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { hideLoader, showLoader } from './pets-list';

import spriteUrl from '../img/sprite.svg?url';

export let petModalLightbox = null;
export function openPetModal(animal) {
  petModalLightbox = basicLightbox.create(
    `
      <div class="pet-modal">
        <button class="modal-close-btn">
          <svg class="icon-close-btn" width="18" height="18">
            <use href="${spriteUrl}#icon-close-btn"></use>
          </svg>
        </button>
        <img class="pet-modal-img"src="${animal.image}" alt="${animal.name}">
        <div class="pet-modal-decor">
          <p class="pet-modal-species">${animal.species}</p>
          <h3 class="pet-modal-title">${animal.name}</h3>
          <div class="pet-info-wrap">
            <p class="pet-modal-age">${animal.age}</p>
            <p class="pet-modal-gender">${animal.gender}</p>
          </div>
          <ul class="pet-info-list">
            <li>
              <h3 class="pet-info-title">Опис:</h3>
              <p class="pet-modal-info">${animal.description}</p>
            </li>
            <li><h3 class="pet-info-title">Здоров'я:</h3>
              <p class="pet-modal-info">${animal.healthStatus}</p>
            </li>
            <li>
              <h3 class="pet-info-title">Поведінка:</h3>
              <p class="pet-modal-info">${animal.behavior}</p>
            </li>
          </ul>
          <button class="pet-modal-btn" data-animal-id="${animal._id}">Взяти додому</button>
        </div>
      </div>
    `,
    {
      onShow: petModalLightbox => {
        document.body.style.overflow = 'hidden';
        petModalLightbox
          .element()
          .querySelector('.modal-close-btn')
          .addEventListener('click', () => petModalLightbox.close());
      },
      onClose: petModalLightbox => {
        document.body.style.overflow = 'visible';
        hideLoader();
      },
    }
  );
  showLoader();
  petModalLightbox.show();
}
