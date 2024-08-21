<template>
    <main class="main" v-if="product">
        <div class="container">
            <TheBreadCrumbs :breadCrumbs="breadCrumbs"/>
        </div>
        <div class="container">
            <div class="catalog">
                <section class="section-page">
                    <div class="container">
                        <div class="catalog-top">
                            <div class="catalog-top__item">
                                <div class="catalog-top__title title catalog-top__title--mobile">
                                    {{ product.title }}
                                </div>
                                <TheSliderThumbs
                                        v-if="product.gallery.length > 0"
                                        :slides="product.gallery"
                                />
                                <TheSliderThumbs
                                        v-else
                                        :slides="[product.img]"
                                />
                            </div>
                            <div class="catalog-top__item">
                                <div class="catalog-top__title title catalog-top__title--desktop">
                                    {{ product.title }}
                                </div>
                                <div class="catalog-top__text t-18" v-html="product.content">
                                </div>

                                <div class="catalog-top-descr">
                                    <div class="catalog-top-descr__block">
                                        <div class="catalog-top-descr__row" v-for="param in product.sortedParams"
                                             :key="param.id">
                                            <div class="catalog-top-descr__row-item">{{ param.name }}</div>
                                            <div class="catalog-top-descr__row-strip"></div>
                                            <div class="catalog-top-descr__row-item">{{ param.value }}</div>
                                        </div>

                                        <!--                                        <UITheSelect-->
                                        <!--                                                :options="select"-->
                                        <!--                                                :selected="selected"-->
                                        <!--                                                @select="optionSelect"-->
                                        <!--                                        />-->
                                    </div>
                                    <!--                                    <div class="catalog-top-descr__block">-->
                                    <!--                                        &lt;!&ndash;                                        <NuxtLink to="#">Посмотреть состав решения?</NuxtLink>&ndash;&gt;-->
                                    <!--                                        <div>-->
                                    <!--                                            <p>Изготовим под ваш размер</p>-->
                                    <!--                                            <p>Изменим комплектацию</p>-->
                                    <!--                                            <p>Изменим цвет</p>-->
                                    <!--                                        </div>-->
                                    <!--                                    </div>-->
                                </div>

                                <div class="catalog-top-choice" v-if="product.video">
                                    <div class="catalog-top-choice__item">
                                        <NuxtLink to="#" class="t-24" @click.prevent="isModalVideo = true">
                                            <p>Посмотрите видеообзор</p>
                                            <TheSvg :type="'circle'"/>
                                        </NuxtLink>
                                    </div>
                                    <div class="catalog-top-choice__item">
                                        <NuxtLink to="#" class="t-18">
                                            Запросить 3D-модель
                                            <span>?</span>
                                        </NuxtLink>
                                    </div>
                                </div>

                                <div class="catalog-top-finish">
                                    <div class="catalog-top-finish__title t-24">
                                        Есть дизайн-проект и нужно реализовать?
                                    </div>
                                    <div class="catalog-top-finish__body">
                                        <div class="catalog-top-finish__price" v-if="product.price">
                                            <p class="t-18">Базовая стоимость:</p>
                                            <p class="t-32"><b>{{ product.price }}</b></p>
                                        </div>
                                        <div class="catalog-top-finish__btns">
                                            <UITheButton :label="'Да'"
                                                         @click.prevent="isModalCallBack = true; modalText = ''"
                                                         class="btn-dark"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!--                <section class="section-page">-->
                <!--                    <div class="container">-->
                <!--                        <div class="catalog-card">-->
                <!--                            <div class="catalog-card__top">-->
                <!--                                <div class="catalog-card__title title">Состав решения</div>-->
                <!--                            </div>-->

                <!--                            <div class="catalog-card__list card__list">-->
                <!--                                <div v-for="(card, i) in catalog" :key="i" class="catalog-card card">-->
                <!--                                    <TheCardProduct :item="card"/>-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                            <div class="catalog-card__pagination">-->
                <!--                                <ThePagination/>-->
                <!--                            </div>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </section>-->

                <section class="section-page content-hidden">
                    <div class="container">
                        <TheSliderMaterials/>
                    </div>
                </section>

                <!--                <section class="section-page">-->
                <!--                    <div class="container">-->
                <!--                        <div class="children-furniture">-->
                <!--                            <div class="children-furniture__title title">Нужна помощь в выборе модели для вашей-->
                <!--                                детской?-->
                <!--                            </div>-->
                <!--                            <TheHelpBlock :helpChoice="choice"/>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </section>-->

                <!--                <section class="section-page">-->
                <!--                    <div class="container">-->
                <!--                        <div class="create-block">-->
                <!--                            <div class="create-block__title title">-->
                <!--                                У нас можно заказать мебель по индивидуальному проекту-->
                <!--                            </div>-->
                <!--                            <TheCreateBlock/>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </section>-->

                <TheCustomerService/>

                <section class="section-page">
                    <div class="container">
                        <TheAnswer/>
                    </div>
                </section>

                <section class="section-page">
                    <div class="container">
                        <TheSliderSolveCustomer/>
                    </div>
                </section>

                <section class="section-page">
                    <div class="container">
                        <TheSliderAbout/>
                    </div>
                </section>

                <section class="section-page">
                    <div class="container">
                        <TheSliderGallery/>
                    </div>
                </section>


<!--                <section class="section-page">-->
<!--                    <div class="container">-->
<!--                        <div class="mission-brand">-->
<!--                            <TheMission :mission="missionBrand"/>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </section>-->

                <section class="section-page">
                    <div class="container">
                        <TheProduction/>
                    </div>
                </section>

                <section class="section-page">
                    <div class="container">
                        <TheSliderCommand/>
                    </div>
                </section>


                <section class="section-page">
                    <div class="container">
                        <TheSchemeOrder/>
                    </div>
                </section>

                <section class="section-page">
                    <div class="container">
                        <TheShowroom @callback="isModalCallBack = true; modalText = $event"/>
                    </div>
                </section>
            </div>
        </div>

        <the-call-back v-if="isModalCallBack" :text="modalText" @close="closeModal"/>
        <the-video-modal :video="product.video" v-if="isModalVideo" @close="closeModal"/>
    </main>
</template>

<script>
import api from "~/api/api.js";
import Entity from "~/dto/Entity.js";
import TheCustomerService from "~/components/TheCustomerService.vue";
import TheCallBack from "~/components/modal/TheCallBack.vue";
import TheVideoModal from "~/components/modal/TheVideoModal.vue";

export default {
    components: {TheVideoModal, TheCallBack, TheCustomerService},
    data() {
        return {
            slider: [],
            catalog: [],
            customer: [],
            missionBrand: {},
            choice: {},
            optionsSlider: {
                loop: false,
                slidesPerView: "1",
                slidesPerGroup: "1",
                centeredSlides: false,
                spaceBetween: "10",
                pagination: false,
                navigation: true,
                modules: "modules",
                mousewheel: true,
                breakpoints: {
                    1023: {
                        slidesPerView: "3",
                    },
                    575: {
                        slidesPerView: "2",
                    },
                },
            },
            isModalCallBack: false,
            isModalVideo: false,
            modalText: ""
        };
    },

    methods: {
        closeModal() {
            this.isModalCallBack = false
        },
    },

    async mounted() {
        const catalogs = [];

        catalogs.push(
            {
                id: 0,
                img: (await import("@/assets/img/slider2/item1.jpeg")).default,
                name: "Лесная фея",
                url: "#",
                arrow: true,
            },
            {
                id: 1,
                img: (await import("@/assets/img/slider2/item2.jpeg")).default,
                name: "Шатобриан",
                url: "#",
                arrow: true,
            },
            {
                id: 2,
                img: (await import("@/assets/img/slider2/item3.jpeg")).default,
                name: "Муми-троли",
                url: "#",
                arrow: true,
            },
            {
                id: 3,
                img: (await import("@/assets/img/slider2/item1.jpeg")).default,
                name: "Лесная фея",
                url: "#",
                arrow: true,
            },
            {
                id: 4,
                img: (await import("@/assets/img/slider2/item2.jpeg")).default,
                name: "Шатобриан",
                url: "#",
                arrow: true,
            },
            {
                id: 5,
                img: (await import("@/assets/img/slider2/item3.jpeg")).default,
                name: "Муми-троли",
                url: "#",
                arrow: true,
            },
            {
                id: 6,
                img: (await import("@/assets/img/slider2/item1.jpeg")).default,
                name: "Лесная фея",
                url: "#",
                arrow: true,
            },
            {
                id: 7,
                img: (await import("@/assets/img/slider2/item2.jpeg")).default,
                name: "Шатобриан",
                url: "#",
                arrow: true,
            },
            {
                id: 8,
                img: (await import("@/assets/img/slider2/item3.jpeg")).default,
                name: "Муми-троли",
                url: "#",
                arrow: true,
            }
        );
        const newChoice = {
            id: 0,
            video: (await import("@/assets/img/catalog/item1.jpeg")).default,
            description: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
            btn: 'Да, нужна помощь',

            // linkName: 'Подробнее',
            // linkUrl: '/'
        }
        const newMissionBrand = {
            img: (await import("@/assets/img/mission2.jpeg")).default,
            title: 'Миссия нашего бренда — создавать у детей мотивацию к развитию',
            text: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
        }
        this.catalog = catalogs;
        this.missionBrand = newMissionBrand
        this.choice = newChoice
    },

    async setup() {
        const route = useRoute();
        if (!route.params.pathMatch?.length) {
            await navigateTo("/");
            return;
        }

        const title = ref("LETO");
        useHead({
            title: title
        });

        const data = await api(route.params.pathMatch.join("/"));
        /**
         *
         * @type {Entity}
         */
        const product = Entity.createFromObj(data);

        title.value = product.title;

        return {
            product,
            breadCrumbs: [
                {
                    name: "Каталог",
                    url: "/catalog",
                    current: false
                },
                {
                    name: product.title,
                    url: "#",
                    current: true
                },
            ],
        };
    }
};
</script>

<style lang="scss" scoped>
.catalog {
  .card__description {
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
}

.catalog-top {
  &__title {
    &--desktop {
      @media (max-width: 1023px) {
        display: none;
      }
    }

    &--mobile {
      display: none;
      @media (max-width: 1023px) {
        display: block;
      }
    }
  }

  display: flex;
  flex-wrap: wrap;

  &__text {
    margin-bottom: 45px;
    @media (max-width: 1023px) {
      margin-bottom: 10px;
    }
  }

  &__item {
    flex: 0 0 50%;
    max-width: 50%;
    @media (max-width: 1023px) {
      flex: 0 0 100%;
      max-width: 100%;
    }

    &:first-child {
      padding-right: 80px;
      @media (max-width: 1550px) {
        padding-right: 20px;
      }
      @media (max-width: 1023px) {
        padding-right: 0;
        margin-bottom: 25px;
      }
    }
  }
}

.catalog-top-descr {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  @media (max-width: 1550px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  @media (max-width: 1023px) {
    grid-template-columns: 1.5fr 1fr;
    justify-content: space-between;
    gap: 40px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  &__block {
    margin-bottom: 5px;

    &:last-child {
      a {
        font-weight: 600;
        border-bottom: solid 1px;
        margin-bottom: 10px;
        display: inline;
      }

      div {
        font-size: 16px;
      }
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    line-height: 100%;
    margin-bottom: 5px;
  }

  &__row-strip {
    flex-grow: 1;
    border-bottom: dotted 1px;
    margin-bottom: 5px;
  }
}

.catalog-top-choice {
  margin-top: 40px;
  // display: flex;
  // align-items: center;
  // flex-wrap: wrap;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 50px;

  &__item {
    position: relative;
    display: inline-block;

    &:first-child {

      a {
        display: flex;
        align-items: center
      }

      p {
        display: inline;
      }
    }

    &:last-child {

      a {
        border-bottom: solid 1px;
      }
    }

    a {
      align-items: center;
      position: relative;
      justify-content: flex-start;

      svg {
        margin-left: 10px;
      }
    }

    span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #a0b846;
      color: #fff;
      text-align: center;
      line-height: 20px;
      font-size: 0.5em;
      position: absolute;
      top: -10px;
      right: -20px;
    }
  }
}

.catalog-top-finish {
  margin-top: 70px;

  &__body {
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__price {
    margin-right: 40px;
    @media (max-width: 575px) {
      margin-right: 10px;
      display: flex;
      align-items: center;
    }

    p {
      white-space: nowrap;
      @media (max-width: 575px) {
        white-space: normal;
      }

      &:first-child {
        @media (max-width: 575px) {
          margin-right: 10px;
        }
      }
    }
  }

  &__btns {
    display: flex;
    @media (max-width: 575px) {
      flex-direction: column;
      width: 100%;
      margin-top: 20px;
    }

    button {
      @media (max-width: 575px) {
        width: 100%;
        margin-bottom: 15px;
      }
    }

    button + button {
      margin-left: 30px;
      @media (max-width: 575px) {
        margin-left: 0;
      }
    }
  }
}

.catalog-card {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__more {
    margin-bottom: 40px;

    a {
      border-bottom: solid 1px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    @media (max-width: 1023px) {
      grid-template-columns: 1fr 1fr;
    }
    @media(max-width: 575px) {
      grid-template-columns: 1fr;
    }
  }

  &__pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}

.create-block {
  &__title {
    max-width: 43%;
    @media (max-width: 1023px) {
      max-width: 70%;
    }
    @media (max-width: 767px) {
      max-width: 100%;
    }
  }
}
</style>
