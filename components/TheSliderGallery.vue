<template>
    <div class="gallery">
        <div class="gallery__title title">Галерея работ</div>
        <div class="gallery__subtitle t-26">
            Посмотрите, как выглядят воплощенные LETO проекты наших заказчиков
        </div>
        <div class="gallery__slider">
            <swiper
                    :slidesPerView="1"
                    :navigation="true"
                    :grid="{
        rows: 4,
      }"
                    :spaceBetween="20"
                    :modules="modules"
                    :breakpoints="{
        1024: {
          slidesPerView: 2,
          grid: {
            rows: 2
          }
        }
      }"
                    class="gallery-slider"
            >
                <swiper-slide v-for="(item, i) in slides" :key="i">
                    <Fancybox :options="optionsFancyBox">
                        <a data-fancybox="FancyBoxGallery" class="slide-offer" :href="item">
                            <div class="gallery-slide r-20">
                                <div class="gallery-slide__overlay">
                                    <span><TheSvg :type="'lens'"/></span>
                                </div>
                                <div class="gallery-slide__img">
                                    <img :src="item.img" alt="...">
                                </div>
                            </div>
                        </a>
                    </Fancybox>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/grid';
// import required modules
import {Grid, FreeMode, Navigation, Mousewheel} from 'swiper/modules';

import Fancybox from '@/components/UI/FancyBoxGallery.vue'
import api from "~/api/api.js";
import Entity from "~/dto/Entity.js";

export default {
    components: {
        Swiper,
        SwiperSlide,
        Fancybox
    },

    async setup() {
        const data = await api("2024/05/03/галерея/");
        const gallery = Entity.createFromObj(data);
        const slides = [];
        gallery.gallery.forEach(img => slides.push({
            img
        }));

        return {
            slides,
            modules: [Grid, FreeMode, Navigation, Mousewheel],
            optionsFancyBox: {
                Carousel: {
                    infinite: true,
                }
            },
        };
    }
};
</script>

<style lang="scss">
.gallery {
  &__slider {
    .swiper-button-prev, .swiper-button-next {
      top: 30px;
      right: 0;
      left: auto;
    }

    .swiper-button-prev {
      right: 80px;
      @media(max-width: 767px) {
        right: 70px;
      }
    }

    .swiper {
      height: 100vh;
      padding-top: 100px;
      @media(max-width: 1023px) {
        height: 200vh;
      }
      @media(max-width: 767px) {
        padding-top: 80px;

      }
    }

    .swiper-slide {
      transition: 0.3s;
    }
  }

  &__subtitle {
    max-width: 40%;
    margin-bottom: -70px;
    @media(max-width: 1023px) {
      max-width: 60%;
    }
    @media(max-width: 767px) {
      margin-bottom: 30px;
      max-width: 100%;
    }
  }
}

.gallery-slide {
  width: 100%;
  transition: 0.3s;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;

  &:hover .gallery-slide__overlay {
    opacity: 1;
    z-index: 10;
  }

  cursor: pointer;
  height: 100%;

  .swiper {
    height: 1300px;
  }

  &__overlay {
    opacity: 0;
    height: 0;
    position: absolute;
    background-color: rgba(#605B5C, 0.5);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transition: 0.3s;

    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  &__img {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }
}
</style>