import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import spriteUrl from '../img/sprite.svg?url';

import { createOrder } from './api.js';
import { petModalLightbox } from './modal-animal-details.js';
import { hideLoader, showLoader } from './pets-list';

function normalizePhone(value) {
  let digits = value.replace(/\D/g, ''); // only digits

  // If user typed 095xxxxxxx (10 digits), convert to 38095xxxxxxx (12 digits)
  if (digits.length === 10 && digits.startsWith('0')) {
    digits = '38' + digits;
  }

  return digits;
}

export function openModalOrder(animalId) {
  const modalOrder = basicLightbox.create(
    `
    <div class="modal-order">
      <button class="modal-order-close-btn" type="button" aria-label="Close">
        <svg class="modal-order-icon" width="8" height="8">
          <use href="${spriteUrl}#icon-close-btn"></use>
        </svg>
      </button>

      <h2 class="modal-order-title">Залишіть заявку на знайомство</h2>

      <form class="modal-order-form" data-modal-order-form novalidate>
        <div class="form-field-wrapper">
          <label class="form-field-label" for="user-name">Ім’я*</label>
          <input
            class="form-field-text-input"
            id="user-name"
            type="text"
            placeholder="Андрій"
            required
          />
        </div>

        <div class="form-field-wrapper">
          <label class="form-field-label" for="user-phone">Телефон*</label>
          <input
            class="form-field-text-input"
            id="user-phone"
            type="tel"
            inputmode="numeric"
            autocomplete="tel"
            placeholder="+38 (095) 555 99 22"
            required
          />
        </div>

        <div class="form-field-wrapper">
          <label class="form-field-label" for="user-comment">Коментар</label>
          <textarea
            class="form-field-textarea"
            id="user-comment"
            placeholder="Напишіть ваш коментар"
          ></textarea>
        </div>

        <button class="form-submit-btn" type="submit">Надіслати</button>
      </form>
    </div>
    `,
    {
      onShow: instance => {
        document.body.style.overflow = 'hidden';

        const root = instance.element();
        const closeBtn = root.querySelector('.modal-order-close-btn');
        const form = root.querySelector('[data-modal-order-form]');
        const nameInput = root.querySelector('#user-name');
        const phoneInput = root.querySelector('#user-phone');
        const commentInput = root.querySelector('#user-comment');
        const submitBtn = root.querySelector('.form-submit-btn');

        // Close on X
        closeBtn.addEventListener('click', () => instance.close());

        // Close on ESC
        const onEscClose = e => {
          if (e.key === 'Escape') instance.close();
        };
        document.addEventListener('keydown', onEscClose);
        instance._onEscClose = onEscClose;

        // Optional: keep only digits + symbols while typing (not required)
        // phoneInput.addEventListener('input', () => {
        //   // you can keep it as-is; normalize on submit is enough
        // });

        form.addEventListener('submit', async e => {
          e.preventDefault();

          const name = nameInput.value.trim();
          const phone = normalizePhone(phoneInput.value);
          const comment = commentInput.value.trim();

          if (!animalId) {
            iziToast.error({
              message: 'Не обрано тварину',
              position: 'topRight',
            });
            return;
          }

          if (!name || name.length > 32) {
            iziToast.error({
              message: 'Імʼя обовʼязкове (до 32 символів)',
              position: 'topRight',
            });
            nameInput.focus();
            return;
          }

          if (!/^[0-9]{12}$/.test(phone)) {
            iziToast.error({
              message: 'Телефон має містити 12 цифр (приклад: 380955559922)',
              position: 'topRight',
            });
            phoneInput.focus();
            return;
          }

          if (comment && comment.length > 500) {
            iziToast.error({
              message: 'Коментар не може перевищувати 500 символів',
              position: 'topRight',
            });
            commentInput.focus();
            return;
          }

          const payload = {
            name,
            phone,
            animalId,
            comment: comment || undefined,
          };

          try {
            submitBtn.disabled = true;
            showLoader();

            await createOrder(payload);

            iziToast.success({
              title: 'Успішно',
              message: 'Заявку відправлено',
              position: 'topRight',
            });

            instance.close();
          } catch (err) {
            console.error(err?.response?.data || err.message);
            iziToast.error({
              title: 'Помилка',
              message:
                err?.response?.data?.message || 'Не вдалося відправити заявку',
              position: 'topRight',
            });
          } finally {
            hideLoader();
            submitBtn.disabled = false;
          }
        });
      },

      onClose: instance => {
        document.body.style.overflow = 'visible';
        hideLoader();

        if (instance?._onEscClose) {
          document.removeEventListener('keydown', instance._onEscClose);
        }
      },
    }
  );

  // close pet details modal if open
  petModalLightbox?.close();

  showLoader();
  modalOrder.show();
}
