<template>
    <main>
        <section class="section-page">
            <div class="container">
                <TheMainBanner
                        @openModalCallBack="isModalCallBack = true; modalText = ''"
                        @openModalVideo="isModalVideo = true"
                />
            </div>
        </section>

        <TheCatalogMain @callback="isModalCallBack = true; modalText = $event"/>

        <section class="section-page content-hidden">
            <div class="container">
                <TheSliderMaterials/>
            </div>
        </section>

        <TheCustomerService/>

        <section class="section-page">
            <div class="container">
                <TheSliderSolveCustomer/>
            </div>
        </section>

        <section class="section-page">
            <div class="container">
                <TheSliderGallery/>
            </div>
        </section>

        <section class="section-page">
            <div class="container">
                <TheSliderAbout/>
            </div>
        </section>

        <section class="section-page">
            <div class="container">
                <TheSliderCommand/>
            </div>
        </section>

        <section class="section-page">
            <div class="container">
                <TheAnswer/>
            </div>
        </section>

        <section class="section-page">
            <div class="container">
                <TheSchemeOrder/>
            </div>
        </section>

        <section class="section-page">
            <div class="container">
                <TheMission v-for="(item, i) in mission" :key="i" :mission="item"/>
            </div>
        </section>

        <section class="section-page">
            <div class="container">
                <div class="designer-b">
                    <TheDesigner/>
                </div>
            </div>
        </section>

        <section class="section-page">
            <div class="container">
                <TheProduction/>
            </div>
        </section>

        <section class="section-page">
            <div class="container">
                <TheShowroom @callback="isModalCallBack = true; modalText = $event;"/>
            </div>
        </section>
        <the-call-back v-if="isModalCallBack" :text="modalText" @close="closeModal"/>
        <the-video-modal v-if="isModalVideo" @close="closeModal"/>

    </main>
</template>

<script>
import TheCardProduct from '~/components/TheCardProduct.vue';
import TheCallBack from '~/components/modal/TheCallBack.vue';
import TheVideoModal from '~/components/modal/TheVideoModal.vue'
import TheCustomerService from "~/components/TheCustomerService.vue";
import TheCatalogMain from "~/components/TheCatalogMain.vue";

export default {
    components: {TheCatalogMain, TheCustomerService, TheCardProduct, TheCallBack, TheVideoModal},
    data() {
        return {
            mission: [],
            isModalCallBack: false,
            isModalVideo: false,
            modalText: ""
        }
    },
    methods: {
        closeModal() {
            this.isModalCallBack = false
            this.isModalVideo = false
        },
    },
    async mounted() {
        const missions = []
        missions.push(
            {
                title: 'О компании',
                text: `Вы влюбились в проект, который нарисовал дизайнер? Прекрасно - мы поможем вам воплотить его в жизнь и создать интерьер, в который всегда хочется возвращаться.<br>
С 2006 года создаем пространства для наших заказчиков, будем счастливы сделать это для вас.`,
                img: (await import("@/assets/img/mission.jpg")).default,
            }
        )
        this.mission = missions
    },

    setup() {
        useHead({
            title: "Стеновые панели по индивидуальным проектам",
            meta: [
                {name: "keywords", content: "Стеновые панели по индивидуальным проектам"},
                {
                    name: "description",
                    content: "Все, что ваш дизайнер хотел сделать в дереве и эмали: мебель, двери, стеновые панели, рейки"
                }
            ]
        })
    }
}
</script>

<style lang="scss">
.catalog-block {
  &__title {
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    svg {
      margin-left: 10px;
      margin-bottom: -4px;
    }
  }
}

.catalog-block-card {
  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media(max-width: 991px) {
      grid-template-columns: 1fr;
    }
  }

  &__inner {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30% 0;
    @media(max-width: 991px) {
      background-color: transparent;
      padding: 0;
    }

    p {
      color: #302D2D;
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 20px;
      @media(max-width: 767px) {
        font-size: 18px;
      }
    }

    button {
      @media(max-width: 575px) {
        display: block;
        width: 100%;
      }
    }
  }
}

.customer-service {
  &__title {
    margin-bottom: 50px;
    max-width: 50%;
    @media(max-width: 1023px) {
      max-width: 100%;
    }
    @media(max-width: 767px) {
      margin-bottom: 35px;
    }
  }

  &__text {
    margin-bottom: 30px;
    max-width: 60%;
    @media(max-width: 1023px) {
      max-width: 100%;
      margin-bottom: 25px;
    }
    @media(max-width: 767px) {
      margin-bottom: 20px;
    }
  }
}

.designer {
  &__title {
    margin-bottom: 40px;
  }
}


.link-path {
  border: solid 1px;
  display: block;
  max-width: 250px;
  margin: 0 auto 20px;
  font-size: 18px;
  font-weight: 500;

  a {
    color: #767676;
    display: block;
  }

  p {
    margin-bottom: 10px;
    font-weight: 700;
  }
}

.menu-catalog {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #f5f5f5;
  padding: 50px 0 40px 0;
  transform: translateX(-100%);
  transition: 0.3s;

  &.is-open {
    transform: translateX(0)
  }

  &__close {
    display: block;
    cursor: pointer;
    border-radius: 15px;
    width: 45px;
    height: 45px;
    background-color: #EAEEF5;
    position: absolute;
    right: 10px;
    top: 10px;
    transition: 0.3s;
    z-index: 50;

    &:hover {
      @media(min-width: 1024px) {
        box-shadow: 0 0 5px rgba(#000, 0.2);
      }
    }

    span {
      width: 100%;
      height: 1px;
      display: block;

      &:after, &:before {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 50%;
        height: 1px;
        background-color: #3C3A3A;
      }

      &:before {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

  &__item {
    padding: 0 10px;
    display: flex;

    &:hover {
      .menu-catalog-submenu {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  &__item-item {
    flex: 0 0 300px;
    width: 300px;
    font-size: 26px;
    font-weight: 500;
    padding: 5px;
    border-radius: 7px;

    &:hover {
      @media(min-width: 1024px) {
        background-color: #EAEEF5;
      }
    }

  }
}

.menu-catalog-desktop {
  @media(max-width: 1023px) {
    display: none;
  }
}

.menu-catalog-mobile {
  display: none;
  @media(max-width: 1023px) {
    display: block;
  }
}

.menu-catalog-submenu {
  flex: 0 0 300px;
  width: 300px;
  //height: 100vh;
  position: absolute;
  left: 100%;
  top: 0;
  background-color: #f5f5f5;
  height: 100vh;
  border-left: solid 1px #BDBDBA;
  opacity: 0;
  visibility: hidden;
  padding: 0 10px;

  li {
    padding: 5px;
    transition: 0.3s;
    margin-bottom: 2px;

    &:hover {
      @media(min-width: 1024px) {
        background-color: #EAEEF5;
      }
    }

  }

  &__title {
    padding-top: 60px;
    padding-bottom: 15px;
  }
}

.menu-catalog-mobile {
  width: 50%;
  padding: 20px;
  overflow-y: auto;
  @media (max-width: 575px) {
    width: 100%;
    height: 100%;
  }

  &__item {
    border-bottom: solid 1px #BDBDBA;
    position: relative;

    span {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.3s;
    }

    a {
      font-size: 15px;
      padding: 5px;
      margin-bottom: 5px;
      display: block;
      position: relative;
    }
  }

  &__list {
    li {
      &.is-open {
        .menu-catalog-mobile__item {
          border-bottom: transparent;

          span {
            transform: rotate(180deg);
          }
        }

        .menu-catalog-mobile__subitem {
          opacity: 1;
          visibility: visible;
          height: auto;
          padding: 10px 5px 15px;
          transition: 0.3s;
        }
      }
    }
  }

  &__subitem {
    opacity: 0;
    visibility: hidden;
    height: 0;
    font-size: 15px;

    li {
      margin-bottom: 5px;
    }

    &.is-open {
      opacity: 1;
      visibility: visible;
      height: auto;
      padding: 10px 5px 15px;
      transition: 0.3s;
    }
  }
}
</style>