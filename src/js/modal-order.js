import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const backdrop = document.querySelector('[data-modal-order]');
const orderCloseBtn = document.querySelector('[data-modal-order-close]');
const form = document.querySelector('[data-modal-order-form]');

let currentPetId = null;
