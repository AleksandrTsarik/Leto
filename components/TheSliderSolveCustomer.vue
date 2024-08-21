<template>
    <div class="solve-customer">
        <div class="solve-customer__title title">За 15 лет мы сделали 1000+ разных проектов</div>
        <div class="solve-customer__subtitle t-26">
            С некоторыми из них вы можете познакомиться ниже и найти тот, что ближе вам
        </div>
        <div class="solve-customer__slider">
            <swiper
                    :grabCursor="true"
                    :spaceBetween="10"
                    :slidesPerView="1"
                    :navigation="true"
                    :modules="modules"
                    class="solve-customer-slider"
            >
                <swiper-slide v-for="(item, i) in slides" :key="i">
                    <div class="solve-customer-slide">
                        <div class="solve-customer-slide__img">
                            <img :src="item.img" alt="...">
                            <span class="video-icon" v-if="item.video"
                                  @click.prevent="video = item.video; isModalVideo = true"></span>
                        </div>
                        <div class="solve-customer-slide__info bg-grey">
                            <div class="solve-customer-slide__body">
                                <div class="solve-customer-slide__title">
                                    <a :href="item.url" style="white-space: normal;">{{ item.title }}</a>
                                </div>
                                <div class="solve-customer-slide__description t-18">{{ item.description }}</div>
                                <div class="solve-customer-slide__collaboration t-24" v-if="item.name">
                                    Совместные работы с {{ item.name }}
                                </div>
                                <div class="solve-customer-slide__more">
                                    <NuxtLink :to="item.url" class="t-18">Подробнее
                                        <TheSvg :type="'arrow'"/>
                                    </NuxtLink>
                                </div>
                                <div class="solve-customer-slide__link solve-customer-slide__link--mobile">
                                    <NuxtLink to="/blog" class="t-18">Смотреть все кейсы
                                        <TheSvg :type="'arrow'"/>
                                    </NuxtLink>
                                </div>
                            </div>

                            <div class="solve-customer-slide__footer">
                                <div class="solve-customer-slide__btn t-24">
                                    <p>У вас такая же задача?</p>
                                    <UITheButton @click.prevent="isModalCallBack = true" :label="'Да'"
                                                 class="btn-dark"/>
                                </div>
                                <div class="solve-customer-slide__link solve-customer-slide__link--desktop">
                                    <NuxtLink to="/blog" class="t-18">Смотреть все кейсы
                                        <TheSvg :type="'arrow'"/>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <the-call-back v-if="isModalCallBack" @close="isModalCallBack = false"/>
        <the-video-modal :video="video" v-if="isModalVideo" @close="isModalVideo = false"/>
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
import TheCallBack from "~/components/modal/TheCallBack.vue";
import TheVideoModal from "~/components/modal/TheVideoModal.vue";

export default {
    components: {
        TheVideoModal,
        TheCallBack,
        Swiper,
        SwiperSlide,
    },

    data() {
        return {
            isModalCallBack: false,
            isModalVideo: false,
            video: ""
        }
    },

    async setup() {
        const data = await api("category/cases/");
        const cases = Entity.createFromObj(data);
        const slides = [];
        cases.children.forEach(child => slides.push({
            id: child.id,
            img: child.img,
            title: child.title,
            description: child.description,
            url: child.blogUrl,
            name: '',
            video: child.video
        }));

        return {
            slides,
            modules: [FreeMode, Navigation, Mousewheel],
        };
    }
};
</script>

<style lang="scss">
.solve-customer {
  &__subtitle {
    margin-bottom: 30px;
    max-width: 40%;
    margin-bottom: -70px;
    @media(max-width: 1023px) {
      max-width: 60%;
    }
    @media(max-width: 767px) {
      margin-bottom: 20px;
      max-width: 100%;
    }
  }

  .swiper-button-prev, .swiper-button-next {
    top: 30px;
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    right: 80px;
  }

  .swiper-wrapper {
    padding-top: 100px;
    @media(max-width: 767px) {
      padding-top: 80px;
    }
  }
}

.solve-customer-slide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  @media(max-width: 1023px) {
    grid-template-columns: 1fr;
  }

  a {
    color: #232323;
    display: flex;
    align-items: center;
    border-bottom: solid 1px;
    display: inline-block;

    white-space: nowrap;

    svg {
      margin-left: 10px;
    }
  }

  &__img {
    position: relative;
    border-radius: 20px;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__info {
    border-radius: 20px;
    padding: 70px;
    display: flex;
    flex-direction: column;
    @media(max-width: 1023px) {
      padding: 50px;
    }
    @media(max-width: 767px) {
      padding: 0;
    }
  }

  &__title {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 25px;
    @media(max-width: 767px) {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  &__description {
    margin-bottom: 20px;
  }

  &__link {
    &--desktop {
      @media(max-width: 767px) {
        display: none;
      }
    }

    &--mobile {
      display: none;
      @media(max-width: 767px) {
        display: block;
      }
    }
  }

  &__body {
    @media(max-width: 767px) {
      background-color: #f5f5f5;
      border-radius: 15px;
      padding: 25px;
    }
  }

  &__footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__btn {
    display: grid;
    grid-template-columns: 140px 97px;
    gap: 40px;
    margin-top: 20px;
    margin-right: 10px;
    @media(max-width: 767px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 10px;
      width: 100%;
    }

    button {
      text-align: center;
      @media(max-width: 767px) {
        display: inline-block;
        max-width: 100px;
        text-align: center;
        margin: 0 auto;
      }
      @media(max-width: 575px) {
        max-width: 100%;
        width: 100%;
      }
    }

  }

  &__collaboration {
    margin-bottom: 10px;
  }
}
</style>