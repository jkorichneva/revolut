'use strict';

import Swiper from 'swiper/dist/js/swiper.min.js';
import React from "react";

let newSwiper = {
    slideNext: () => newSwiper.slideNext(),
    slidePrev: () => newSwiper.slidePrev(),
};

export const init = options => {
    new Swiper(options.swiperClass, {
        on: {
            slideChange: function () {
                    options.onSlideChange(this.activeIndex);
            }
        },
        pagination: {
            el: options.swiperPaginationClass,
            type: 'bullets',
            clickable: true,
            bulletActiveClass: 'active',
            bulletClass: 'dot',
        },
        noSwipingClass: 'no_swiper',
        noSwipingElement: 'textarea',
    });
}

export default newSwiper;
