<template>
    <main>
        <div class="contact">
            <div class="container">
                <TheBreadCrumbs :breadCrumbs="breadCrumbs"/>
            </div>
            <div class="container">
                <div class="contact__title title"></div>
                <div class="contact-box">
                    <div class="contact-box__top">
                        <TheShowroom @callback="isModalCallBack = true; modalText = $event"/>
                    </div>
                    <div class="contact-box__bottom">
                        <div class="contact-box__map r-20">
                            <iframe src="https://yandex.ru/map-widget/v1/org/leto/118056108048/?indoorLevel=1&ll=37.503603%2C55.824172&z=17"
                                    width="100%" height="468" frameborder="1" allowfullscreen="true"
                                    style="position:relative;"></iframe>
                        </div>
<!--                        <div class="contact-box__description r-20">-->
<!--                            <div class="contact-box__description-title t-24">Как добраться</div>-->
<!--                            <div class="contact-box__description-item">-->
<!--                                <div class="t-18">На машине:</div>-->
<!--                                <div class="t-18">-->
<!--                                    В картах набрать - «Белкадизайн» или Кутузовский проспект 36с4. Парковка 30 мин-->
<!--                                    бесплатно, далее 200 руб. в час.-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="contact-box__description-item">-->
<!--                                <div class="t-18">На метро:</div>-->
<!--                                <div class="t-18">-->
<!--                                    От метро Кутузовская, 4 выход, идти в сторону Института Психоанализа. После-->
<!--                                    памятника Гризодубову поворачиваем направо. 4 строение вход №1-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </div>

        <the-call-back v-if="isModalCallBack" :text="modalText" @close="closeModal"/>
    </main>
</template>

<script>
import TheCallBack from "~/components/modal/TheCallBack.vue";

export default {
    components: {TheCallBack},
    data() {
        return {
            breadCrumbs: [
                {
                    name: 'Контакты',
                    url: '#',
                    current: true
                }
            ],
            isModalCallBack: false,
            modalText: ""
        }
    },

    methods: {
        closeModal() {
            this.isModalCallBack = false
        },
    },
}
</script>

<style lang="scss">
.contact-box {
  margin-bottom: 100px;
  @media(max-width: 767px) {
    margin-bottom: 40px;
  }

  .showroom__item {
    @media(max-width: 767px) {
      &:first-child {
        order: 1;
      }
      &:last-child {
        order: 2;
      }
    }
  }

  &__bottom {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 20px;
    @media(max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }

  &__description {
    background-color: #f5f5f5;
    padding: 70px 50px;
    @media(max-width: 1023px) {
      order: 1;
    }
    @media(max-width: 767px) {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
    }
  }

  &__map {
    @media(max-width: 1023px) {
      order: 2;
    }
  }

  &__description-title {
    margin-bottom: 20px;
  }

  &__description-item {
    margin-bottom: 20px;

    div {
      &:first-child {
        margin-bottom: 10px;
      }
    }
  }
}
</style>