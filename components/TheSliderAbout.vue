<template>
    <div class="about">
        <div class="about__title title">Отзывы о нас</div>
        <div class="about__subtitle t-26">
            Заказчикам нравится, как мы ведем проекты; но больше всего им нравится конечный результат
        </div>
        <div class="about__slider">
            <swiper
                    :grabCursor="true"
                    :spaceBetween="10"
                    :slidesPerView="1"
                    :navigation="true"
                    :modules="modules"
                    class="about-slider"
            >
                <swiper-slide v-for="(item, i) in slides" :key="i">
                    <div class="about-slide">
                        <div class="about-slide__info bg-grey r-20">
                            <div class="about-slide__name">{{ item.name }}</div>
                            <div class="about-slide__quote t-24">
                                <span><TheSvg :type="'quote'"/></span>
                                <div v-html="item.description"></div>
                            </div>
                            <div class="about-slide__footer">
                                <div class="about-slide__manager" v-if="item.manager">
                                    <img :src="item.manager" alt="..." loading="lazy">
                                </div>
<!--                                <div class="about-slide__link">-->
<!--                                    <span>Смотреть<br/>видео</span>-->
<!--                                    <TheLinkMore :type="'link-more'"/>-->
<!--                                </div>-->
                            </div>
                        </div>
                        <div class="about-slide__img r-20">
                            <img :src="item.img" alt="..." loading="lazy">
                        </div>
                    </div>
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
import 'swiper/css/thumbs';

// import required modules
import {FreeMode, Navigation, Mousewheel} from 'swiper/modules';
import api from "~/api/api.js";
import Entity from "~/dto/Entity.js";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    async setup() {
        const data = await api("category/reviews/");
        const entity = Entity.createFromObj(data);
        const slides = [];
        entity.children.forEach(el => {
            slides.push({
                id: el.id,
                img: el.img,
                manager: null,
                name: el.title,
                title: el.title,
                description: el.content,
                url: "#"
            });
        })

        return {
            modules: [FreeMode, Navigation, Mousewheel],
            slides
        };
    },

};
</script>

<style lang="scss">
.about {
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

.about-slider {
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
}

.about-slide {
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  @media(max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  @media(max-width: 767px) {
    padding-top: 80px;
  }

  &__info {
    padding: 70px 50px;
    display: flex;
    flex-direction: column;
    @media(max-width: 1023px) {
      order: 2;
    }
    @media(max-width: 767px) {
      background-color: #f5f5f5;
      padding: 40px 25px;
    }
  }

  &__img {
    @media(max-width: 1023px) {
      order: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    font-size: 32px;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 80px;
    @media(max-width: 767px) {
      margin-bottom: 40px;
      font-size: 20px;
    }
  }

  &__description {

  }

  &__quote {
    position: relative;
    margin-bottom: 20px;

    span {
      position: absolute;
      top: -45px;
      @media(max-width: 767px) {
        top: -25px;
      }

      svg {
        height: 45px;
        width: 40px;
        @media(max-width: 767px) {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: auto 0 0;
    align-items: flex-end;
    @media(max-width: 1023px) {
      justify-content: flex-start
    }
  }

  &__link {
    margin-left: auto;
    display: flex;
    align-items: center;
    @media(max-width: 1023px) {
      margin-left: 100px;
    }
    @media(max-width: 575px) {
      margin-left: auto;
    }

    span {
      margin-right: 10px;
    }
  }

  &__manager {
    border-radius: 20px;
    overflow: hidden;
    @media(max-width: 767px) {
      width: 100px;
      height: 100px;
    }
  }

}
</style>