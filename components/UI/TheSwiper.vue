<template>
  <Swiper
    class="slider-swiper"
    :modules="modules"
    :loop="options.loop"
    :navigation="options.navigation"
    :slidesPerView="options.slidesPerView"
    :slidesPerGroup="options.slidesPerGroup"
    :centeredSlides="options.centeredSlides"
    :spaceBetween="options.spaceBetween"
    :pagination="options.pagination"
    :breakpoints="options.breakpoints"
    :effect="options.effect"
    :mousewheel="options.mousewheel"
  >
    <SwiperSlide
      v-for="(slide, i) in slider"
      :key="i"
    >

      <!-- linkBlock - кликабельный блок !!! -->
      <NuxtLink v-if="slide.linkBlock" :to="slide.linkBlock" >
        <div class="slider__wrap">
          <div v-if="slide.head" class="slider__head">{{ slide.head }}</div>
          <div v-else-if="slide.img" class="slider__img">
            <img :src="slide.img" alt="">
            <span v-if="slide.video" class="video-icon"></span>
          </div>
            <div class="slider__info">
              <div v-if="slide.name" class="slider__name t-26">{{ slide.name }}</div>
              <div v-if="slide.title" class="slider__title">{{ slide.title }}</div>
              <div v-if="slide.description" class="slider__description">{{ slide.description }}</div>
          </div>
        </div>
      </NuxtLink>

      <!-- клик по стрелочке !!! -->
      <div v-else class="slider__wrap">
        <div v-if="slide.head" class="slider__head">{{ slide.head }}</div>
        <div v-else-if="slide.img" class="slider__img">
          <img :src="slide.img" alt="">
          <span v-if="slide.video" class="video-icon"></span>
        </div>
          <div class="slider__info">
            <div v-if="slide.name" class="slider__name t-26">{{ slide.name }}</div>
            <div v-if="slide.title" class="slider__title">{{ slide.title }}</div>
            <div v-if="slide.description" class="slider__description">{{ slide.description }}</div>
            <div v-if="slide.link" class="slider__more">
              <NuxtLink :to="slide.url">
                <TheSvg :type="'circle'" />
              </NuxtLink>
            </div>
        </div>
      </div>

    </SwiperSlide>
    <SwiperControls />
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Mousewheel, EffectCoverflow, EffectFade } from 'swiper/modules';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slider: {type: Array, default: [], require: false},
    options: {type: Object, default: {}, require: false}
  },
  mounted() {
    console.log(this.options)
  },
  setup() {
      return {
        modules: [ Pagination, Navigation, Mousewheel, EffectCoverflow, EffectFade]
      };
    },
}

</script>

<style lang="scss">
.slider {
  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 40px;
    @media(max-width: 767px) {
      padding: 15px 20px;
    }
  }
  &__img {
    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      text-align: center;
    }
  }
}

.slider-swiper {
  .swiper-slide {
    background-color: #EAEEF5;
    border-radius: 20px;
    @media(max-width: 767px) {
      border-radius: 15px;
    }
  }
  padding-top: 100px;
  @media(max-width: 767px) {
    padding-top: 80px;
  }
  .swiper-button-next, .swiper-button-prev {
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
}
</style>