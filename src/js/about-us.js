import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function initAboutUsSection() {
  const section = document.querySelector("#about-us");
  if (!section) return;

  const swiperEl = section.querySelector(".swiper.mySwiper");
  const nextBtn = section.querySelector(".swiper-button-next");
  const prevBtn = section.querySelector(".swiper-button-prev");
  const paginationEl = section.querySelector(".swiper-pagination");

  var swiper = new Swiper(swiperEl, {
    modules: [Navigation, Pagination],
    cssMode: true,
    navigation: { nextEl: nextBtn, prevEl: prevBtn },
    pagination: { el: paginationEl, clickable: true },
    mousewheel: true,
    keyboard: true,
  });
}