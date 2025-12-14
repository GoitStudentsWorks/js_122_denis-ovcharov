import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export async function initFeedbackSection() {
    const section = document.querySelector('#feedback');
    if (!section) return;

    const swiperEl = section.querySelector('.swiper.feedback-swiper');
    const wrapper = section.querySelector('.swiper-wrapper');
    const paginationEl = section.querySelector('.feedback-swiper-pagination');
    const nextBtn = section.querySelector('.feedback-swiper-button-next');
    const prevBtn = section.querySelector('.feedback-swiper-button-prev');

    // Лоадер (підлаштуй під свій)
    section.classList.add('is-loading');

    try {
        const response = await fetchFeedbacks();
        const feedbacks = response.feedbacks; 

        if (!Array.isArray(feedbacks) || feedbacks.length < 3) {
        throw new Error('Not enough feedbacks (min 3 required)');
        }
        // 1) РЕНДЕР
        wrapper.innerHTML = feedbacks.map(renderFeedbackSlide).join('');

        // 2) SWIPER — тільки після рендеру
        new Swiper(swiperEl, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        spaceBetween: 16,
        loop: false,

        pagination: {
            el: paginationEl,
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
            disabledClass: 'is-disabled', // (опційно) свій клас
        },
        });
    } catch (err) {
        console.error(err);
        
        // показати повідомлення користувачу (підстав свій toast/нотіфікацію)
        section.querySelector('.feedback-text')?.insertAdjacentHTML(
        'afterend',
        `<p class="feedback-error">Не вдалося завантажити відгуки. Спробуй пізніше.</p>`
        );
    } finally {
        section.classList.remove('is-loading');
    }
}

// HTML картка "відгук"
function renderFeedbackSlide(item) {
    const name = item?.author ?? 'User';
    const text = item?.description ?? '';
    const rating = Number(item?.rate ?? 0);

    return `
        <div class="swiper-slide">
        <div class="feedback-card">
            <div class="feedback-stars" data-rating="${rating}"></div>
            <p class="feedback-comment">${text}</p>
            <p class="feedback-author">${name}</p>
        </div>
        </div>
    `;
}


// запит на бекенд
const BASE_URL = 'https://paw-hut.b.goit.study';

export async function fetchFeedbacks() {
    const res = await fetch(`${BASE_URL}/api/feedbacks?limit=5&page=${Math.floor(Math.random() * 9) + 1}`);

    if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
    }

    return res.json();
}


