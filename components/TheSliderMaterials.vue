<template>
    <div class="materials">
        <div class="materials__title title">Качественные и безопасные материалы</div>
        <div class="materials__box">
            <div class="bg-white materials-block-white">
                <div class="materials-block__description r-20 bg-grey">
                    <p class="t-24">
                        Лучшие эмоции создает интерьер, наполненный безопасными, стильными и эргономичными изделиями.
                        Именно поэтому мы сочетаем экологичные натуральные материалы с качественной итальянской и
                        австрийской фурнитурой.
                    </p>
                    <div class="materials-block__controls">
                        <button class="materials-slider-prev swiper-button-prev"></button>
                        <button class="materials-slider-next swiper-button-next"></button>
                    </div>
                </div>
            </div>

            <div class="materials-block__slider">
                <swiper
                        ref="swiperMaterials"
                        :grabCursor="true"
                        :spaceBetween="10"
                        :breakpoints="{ 320:{ slidesPerView: 1 }, 768:{ slidesPerView: 2 }, 1023: { slidesPerView: 2.5 } }"
                        :navigation="navigation"
                        :modules="modules"
                        class="materials-slider"
                >
                    <swiper-slide v-for="(item, i) in slides" :key="i">
                        <div class="materials-slide">
                            <div class="materials-slide__img">
                                <img :src="item.img" alt="...">
                            </div>
                            <div class="materials-slide__info">
                                <div class="materials-slide__title t-26">{{ item.title }}</div>
                                <div class="materials-slide__description t-18">{{ item.description }}</div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
// Import Swiper Vue.js components
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import {FreeMode, Navigation, Mousewheel} from 'swiper/modules';
import api from "~/api/api.js";
import Entity from "~/dto/Entity.js";

export default {
    components: {
        Swiper,
        SwiperSlide,
        useSwiper
    },
    data() {
        return {
            navigation: {
                nextEl: '.materials-slider-next',
                prevEl: '.materials-slider-prev'
            }
        }
    },
    async setup() {
        const swiper = useSwiper();

        const slides = [];
        const data = await api("category/materials/");
        const entity = Entity.createFromObj(data);
        entity.children.forEach(el => {
            slides.push({
                img: el.img,
                title: el.title,
                description: ""
            });
        });

        return {
            swiper,
            modules: [FreeMode, Navigation, Mousewheel],
            slides
        };
    },
    methods: {
        swiperNavigation() {
            console.log(this.$refs.swiperMaterials.$swiper)
        }
    },
};
</script>

<style lang="scss">
.materials-block-white {
  border-radius: 0 20px 20px 0;
  position: relative;
  z-index: 70;
  height: 100%;
}

.materials {
  &__box {
    display: grid;
    grid-template-columns: 40% 60%;
    gap: 20px;
    position: relative;
    background-color: #fff;
    position: relative;
    z-index: 10;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 700px;
      height: 100%;
      right: 100%;
      top: 0;
      bottom: 0;
      background-color: #fff;
      z-index: 60;
      @media(max-width: 1023px) {
        display: none;
      }
    }

    @media(max-width: 1023px) {
      grid-template-columns: 100%;
    }
  }
}

.materials-block {

  &__slider {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: -40px;
      top: 0;
      bottom: 0;
      display: block;
      background-color: #fff;
      width: 40px;
      z-index: 10;
      @media(max-width: 1023px) {
        display: none;
      }

      .swiper-slide {
        position: relative;
        z-index: 0;
      }
    }
  }

  &__description {
    padding: 85px 80px;
    position: relative;
    z-index: 50;
    display: flex;
    height: 100%;
    flex-direction: column;
    &.r-20 {
      @media(max-width: 767px) {
        border-radius: 0;
      }
    }
    @media(max-width: 1032px) {
      padding: 50px 50px 50px;
    }
    @media(max-width: 767px) {
      padding: 0;
    }

  }

  &__controls {
    display: flex;
    align-items: center;
    margin-top: auto;
    padding-top: 40px;
    @media(max-width: 767px) {
      padding-top: 25px;
    }

    .swiper-button-prev, .swiper-button-next {
      @media(max-width: 767px) {
        flex: 0 0 60px;
      }
    }

    .swiper-button-prev {
      position: relative;
      left: auto;
      top: auto;
      margin-right: 20px;
      @media(max-width: 767px) {
        margin-left: auto;
      }
    }

    .swiper-button-next {
      position: relative;
      left: auto;
      top: auto;
    }
  }
}

.materials-slide {
  background-color: #EAEEF5;
  border-radius: 20px;
  height: 100%;

  &__img {
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media(max-width: 767px) {
        height: 50vw;
      }
    }
  }

  &__info {
    background-color: #EAEEF5;
    border-radius: 0 0 20px 20px;
    padding: 20px 30px;
    @media(max-width: 767px) {
      padding: 15px 20px;
    }
  }

  &__title {
    margin-bottom: 10px;
  }
}

.materials-slider {
  .swiper-button-next, .swiper-button-prev {
    display: none;
  }

  .swiper-button-prev {
    @media(max-width: 767px) {
      left: auto;
      right: 80px;
    }
  }

  .swiper-slide {
    height: auto;
  }

  .swiper-wrapper {
    height: 100%;
    align-items: stretch;
  }

  &.swiper {
    overflow: visible;
    height: 100%;
  }
}
</style>