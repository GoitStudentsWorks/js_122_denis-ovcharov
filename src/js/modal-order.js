import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { petModalLightbox } from './modal-animal-details.js';
import { hideLoader, showLoader } from './pets-list';
export function openModalOrder() {
  const modalOrder = new basicLightbox.create(
    `
  <div class="modal-order">
    <button class="modal-order-close-btn" data-modal-order-close>
      <svg class="modal-order-icon" width="8" height="8">
        <use href="./img/sprite.svg#icon-close-btn"></use>
      </svg>
    </button>
    <h2 class="modal-order-title">
      Залишіть <br />
      заявку на <br />
      знайомство
    </h2>
    <form class="modal-order-form" data-modal-order-form>
      <div class="form-field-wrapper">
        <label class="form-field-label" for="username">Ім’я*</label>
        <div>
          <input
            class="form-field-text-input"
            name="user-name"
            id="user-name"
            type="text"
            placeholder="Андрій"
            required
          />
        </div>
      </div>
      <div class="form-field-wrapper">
        <label class="form-field-label" for="field-number">Телефон*</label>
        <div class="form-field-input-wrapper">
          <input
            class="form-field-text-input"
            name="user-phone"
            id="user-phone"
            type="tel"
            placeholder="+38 (095) 555 99 22"
            required
          />
        </div>
      </div>
        <div class="form-field-comment-wrapper">
          <label class="form-field-label" for="user-comment">Коментар</label>
          <textarea
            class="form-field-textarea"
            name="user-comment"
            id="user-comment"
            placeholder="Напишіть ваш коментар"
          ></textarea>
        </div>
        <button class="form-submit-btn" type="submit">Надіслати</button>
        </form>
  </div>
   `,
    {
      onShow: modalOrder => {
        document.body.style.overflow = 'hidden';
        modalOrder
          .element()
          .querySelector('.modal-order-close-btn')
          .addEventListener('click', () => modalOrder.close());
      },
      onClose: modalOrder => {
        document.body.style.overflow = 'visible';
        hideLoader();
      },
    }
  );
  petModalLightbox?.close();
  showLoader();
  modalOrder.show();
}
