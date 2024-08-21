<template>
    <div class="command">
        <div class="command__title title">Команда нашего бренда</div>
        <UITheSwiper
                class="command-slider"
                :slider="cards"
                :options="optionsSlider"
        ></UITheSwiper>
    </div>
</template>

<script>
import api from "~/api/api.js";
import Team from "~/dto/Team.js";

export default {
    data() {
        return {
            optionsSlider: {
                loop: true,
                centeredSlides: false,
                spaceBetween: 20,
                pagination: false,
                modules: "modules",
                mousewheel: false,
                breakpoints: {

                    1023: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    }
                },
                navigation: true
            }
        }
    },

    async setup() {
        const cards = [];

        const data = await api("category/team/");
        const team = Team.createFromObj(data);

        team.children.forEach(el => {
            cards.push({
                img: el.img,
                name: el.name,
                title: el.post,
                description: ""
            })
        });

        return {
            cards
        };
    }
}
</script>

<style lang="scss">
.command {
  &__title {
    margin-bottom: -50px;
    @media(max-width: 767px) {
      margin-bottom: 30px;
    }
  }
}

.command-slider {
  padding-top: 110px;
  @media(max-width: 767px) {
    padding-top: 80px;
  }

  .slider {
    &__wrap {
      background-color: #EAEEF5;
      border-radius: 20px;
      height: 100%;
      @media(max-width: 767px) {
        border-radius: 15px;
      }
    }

    &__img {
      border-radius: 20px;
      overflow: hidden;
      @media(max-width: 767px) {
        border-radius: 15px;
      }
    }

    &__info {
      padding: 20px 45px;
      display: flex;
      flex-direction: column;
      @media(max-width: 767px) {
        padding: 15px 20px;
      }
    }

    &__name {
      font-size: 32px;
      font-weight: 500;
      line-height: 110%;
      margin-bottom: 5px;
      @media(max-width: 767px) {
        font-size: 18px;
      }
    }

    &__title {
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 5px;
      @media(max-width: 767px) {
        font-size: 16px;
      }
    }

    &__description {
      font-size: 18px;
      font-weight: 400;
      margin-top: auto;
      @media(max-width: 767px) {
        font-size: 15px;
      }
    }
  }

  .swiper-button-prev, .swiper-button-next {
    top: 30px;
  }

  .swiper-button-prev {
    left: auto;
    right: 90px;
  }

  .swiper-wrapper {
    align-items: stretch;

  }

  .swiper-slide {
    height: auto;
  }
}
</style>