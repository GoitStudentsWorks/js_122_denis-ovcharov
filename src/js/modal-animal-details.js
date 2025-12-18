import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import spriteUrl from '../img/sprite.svg?url';

export let petModalLightbox = null;

export function openPetModal(animal) {
  petModalLightbox = basicLightbox.create(
    `
   <div class="pet-modal">
    <button class="pet-modal-close" type="button">
        <svg class="icon-close-btn" width="18" height="18">
          <use href="${spriteUrl}#icon-close-btn"></use>
        </svg>
      </button>
    <img
      class="pet-modal-image"
      src="${animal.image}"
      alt="${animal.name}"
    />

    <div class="information">
      <div class="pet-type-modal">${animal.species}</div>
      <h3 class="pet-name-modal">${animal.name}</h3>
      <div class="pet-meta-modal">
       <span>${animal.age}</span>
       <span>${animal.gender}</span>
     </div>

      <div class="description">
        <h3 class="pet-section">Опис:</h3>
        <p class="pet-description">${animal.description}</p>
      </div>

      <div class="health">
        <h3 class="pet-section">Здоровʼя:</h3>
        <p class="pet-description">${animal.healthStatus}</p>
      </div>

      <div class="behavior">
        <h3 class="pet-section">Поведінка:</h3>
        <p class="pet-description">${animal.behavior}</p>
      </div>

      <button class="pet-modal-btn" data-animal-id="${animal._id}">Взяти додому</button>
    </div>
  `,
    {
      onShow: instance => {
        document.body.style.overflow = 'hidden';

        instance
          .element()
          .querySelector('.pet-modal-close')
          .addEventListener('click', () => instance.close());

        instance
          .element()
          .querySelector('.pet-modal-btn')
          .addEventListener('click', () => instance.close());

        document.addEventListener('keydown', onEsc);
      },
      onClose: () => {
        document.body.style.overflow = 'visible';
        document.removeEventListener('keydown', onEsc);
      },
    }
  );

  petModalLightbox.show();
}

function onEsc(e) {
  if (e.key === 'Escape') {
    petModalLightbox.close();
  }
}
