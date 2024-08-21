<template>
    <div class="main-banner">
        <div class="main-banner__inner">
            <h1 class="main-banner__block main-banner__block--green r-20">
                {{ title }}
            </h1>
            <div class="main-banner__block main-banner__block--grey r-20">
                <div class="main-banner__text t-26">
                    {{ description }}
                </div>
                <div class="main-banner__row" v-if="showBtn">
                    <p>Есть дизайн-проект?</p>
                    <div class="main-banner__block-btn">
                        <UITheButton :label="'Да'" class="btn-dark" @click="openModalCallBack"/>
                    </div>
                </div>
            </div>
            <div class="main-banner__video">
              <div class="main-banner__iframe iframe r-20">
                <img :src="img">
                <span class="video-icon" @click="openModalVideo"></span>
              </div>
            </div>
        </div>

    </div>
</template>

<script>
import TheVideoModal from '~/components/modal/TheVideoModal.vue'

export default {
    components: {TheVideoModal},
    props: {
        titleProp: {
            type: String,
            default: null
        },
        descriptionProp: {
            type: String,
            default: null
        },
        showBtn: {
            type: Boolean,
            default: true
        },
        img: {
            type: String,
            default: "/main.png"
        }
    },

    async setup(props) {

        return {
            title: props.titleProp || "СТЕНОВЫЕ ПАНЕЛИ ПО ИНДИВИДУАЛЬНЫМ ПРОЕКТАМ",
            description: props.descriptionProp || `Все, что ваш дизайнер хотел сделать в дереве и эмали: мебель, двери, стеновые панели, рейки`
        }
    },

    methods: {
        openModalCallBack() {
            this.$emit('openModalCallBack')
        },
        openModalVideo() {
            this.$emit('openModalVideo')
        }
    },
}
</script>

<style lang="scss">
.main-banner {
  &__inner {
    display: grid;
    gap: 20px;
    grid-template-columns: 1.5fr 2fr;
    @media(max-width: 1023px) {
      grid-template-columns: 100%;
    }
  }

  &__block {
    &--green {
      background-color: #A0B846;
      color: #fff;
      font-size: 44px;
      line-height: 105%;
      font-family: 'Europe';
      padding: 70px 55px;
      @media(max-width: 767px) {
        font-size: 23px;
        padding: 25px;
      }
    }

    &--grey {
      background-color: #EAEEF5;
      padding: 65px 55px;
      @media(max-width: 767px) {
        padding: 25px;
      }
    }
  }

  &__text {
    margin-bottom: 85px;
    @media(max-width: 767px) {
      margin-bottom: 10px;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    @media(max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
    }

    p {
      font-size: 32px;
      font-weight: 400;
      line-height: 110%;
      margin-right: 40px;
      @media(max-width: 767px) {
        margin-right: 0;
        margin-bottom: 10px;
        text-align: left;
      }
    }
  }

  &__block-btn {
    @media(max-width: 575px) {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }

  &__video {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
    @media(max-width: 1023px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      height: 50vw;
    }
  }
  

  &__iframe {
    height: 100%;
    // background-image: url('@/assets/img/main-banner.jpeg');
    // background-position: center;
    // background-size: cover;
    // background-repeat: no-repeat;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>