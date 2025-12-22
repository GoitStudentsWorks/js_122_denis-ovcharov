// Swiper
import Swiper from 'swiper';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import spriteUrl from '../img/sprite.svg?url';

// Star-rating.css
import 'css-star-rating/css/star-rating.css';

// iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Import API function
import { getFeedbacks } from './api.js';

export async function initFeedbackSection() {
    const section = document.querySelector('#feedback');
    if (!section) return;

    const swiperEl = section.querySelector('.swiper.feedback-swiper');
    const wrapper = section.querySelector('.swiper-wrapper');
    const paginationEl = section.querySelector('.feedback-swiper-pagination');
    const nextBtn = section.querySelector('.feedback-swiper-button-next');
    const prevBtn = section.querySelector('.feedback-swiper-button-prev');
    const loader = section.querySelector('.loader');
    
    try {
        // Backend request
        const page = Math.floor(Math.random() * 9) + 1;
        const response = await getFeedbacks(5, page);
        const feedbacks = response.feedbacks;


        //Validate returns: no array or < 3 feedback = error => catch block.
        if (!Array.isArray(feedbacks) || feedbacks.length < 3) {
        throw new Error('Not enough feedbacks (min 3 required)');
        }

        // Render
        wrapper.innerHTML = feedbacks.map(renderFeedbackSlide).join('');

        // Swiper init
        new Swiper(swiperEl, {
        modules: [Navigation, Pagination],
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 16,
        loop: false,
        resistanceRatio: 0.85,
        touchRatio: 1.2,
        
        breakpoints: {
            768: {              
            slidesPerView: 2,
            spaceBetween: 32, 
            },

            1440: {             
            slidesPerView: 2,
            spaceBetween: 32,
            },
        },


        pagination: {
            el: paginationEl,
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
            disabledClass: 'is-disabled',
            },
        });
    } catch (err) {
        console.error(err);
        iziToast.error({
            title: 'Error',
            message: err.message,
            position: 'topRight',
        });
    }
}

// HTML render function
function renderFeedbackSlide(item) {
    const name = item?.author ?? 'User';
    const text = item?.description ?? '';
    const rating = clampRating(item?.rate ?? 0);

    
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const ratingClass = `rating value-${full}${hasHalf ? ' half' : ''} star-icon`;

    const stars = Array.from({ length: 5 })
        .map(
            () => `
        <div class="star">
            <svg class="star-empty" aria-hidden="true">
                <use href="./img/stars/star-empty.svg"></use>
            </svg>
            <svg class="star-half" aria-hidden="true">
                <use href="./img/stars/star-half.svg"></use>
            </svg>
            <svg class="star-filled" aria-hidden="true">
                <use href="./img/stars/star-full.svg"></use>
            </svg>
        </div>`
            ).join('');
        
    return `
        <div class="swiper-slide">
            <div class="feedback-card">
                <div class="${ratingClass}">
                    <div class="star-container">
                        ${stars}
                    </div>
                </div>
                <p class="feedback-comment">${text}</p>
                <p class="feedback-author">${name}</p>
            </div>
        </div>
    `;
}

// Validation rating between 0 and 5
function clampRating(val) {
    const n = Number(val);
    if (!Number.isFinite(n)) return 0;
    return Math.max(0, Math.min(5, n));
}

// scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');
const SHOW_AFTER = 300;

window.addEventListener('scroll', () => {
    if (window.scrollY > SHOW_AFTER) {
        scrollTopBtn.classList.add('is-on');
    } else {
        scrollTopBtn.classList.remove('is-on');
    }
    });

    scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

