import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

import 'swiper/css'

document.addEventListener("DOMContentLoaded", function () {
    const WorkSwiper = new Swiper(".projects .swiper", {
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: "disabled",
        },
        modules: [Navigation, Pagination],
    });
});