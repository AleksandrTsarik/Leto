<template>
    <div class="swiper-thumbs">
        <swiper
                :loop="true"
                :spaceBetween="10"
                :navigation="true"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                class="swiper-big"
        >
            <swiper-slide v-for="(slide, i) in slides" :key="i">
                <img :src="slide"/>
            </swiper-slide>
        </swiper>
        <swiper
                @swiper="setThumbsSwiper"
                :loop="true"
                :spaceBetween="10"
                :slidesPerView="4"
                :freeMode="true"
                :watchSlidesProgress="true"
                :mousewheel="true"
                :modules="modules"
                :resizeObserver="false"
                :breakpoints="{ 600:{ spaceBetween:10 }, 900:{ spaceBetween:2, } }"
                class="swiper-small"
        >
            <swiper-slide v-for="(slide, i) in slides" :key="i">
                <img :src="slide"/>
            </swiper-slide>
        </swiper>

    </div>
</template>
<script>
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {FreeMode, Navigation, Thumbs, Mousewheel} from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    props: {
        slides: {
            type: Array,
            default: () => []
        }
    },

    setup() {
        const thumbsSwiper = ref(null);

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };

        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [FreeMode, Navigation, Thumbs, Mousewheel],
        };
    },
};
</script>

<style lang="scss">
.swiper-thumbs {
  .swiper-button-prev, .swiper-button-next {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background-color: rgba(#EAEEF5, 0.5);

    &::after {
      background-image: url('@/assets/img/arrow-black.svg') !important;
    }
  }

  .swiper-slide {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }

  .swiper-small {
    .swiper-slide {
      min-width: 150px !important;
    }
  }

  .swiper-big {
    margin-bottom: 10px;
  }
}
</style>
