<template>
    <main class="main">
        <div class="container">
            <TheBreadCrumbs :breadCrumbs="breadCrumbs"/>
        </div>

        <section class="section-page" v-if="!category">
            <div class="container">
                <div class="catalog-top">
                    <div class="catalog-top__title title">Каталог</div>
                    <div class="catalog-top__subtitle t-26">
                        <p>Мы производим только на заказ, в идеальной для заказчика отделке и точно в размер; никакой
                            серийной продукции. </p>

                        <p>В этом разделе вы можете познакомится с примерами наших работ: с самыми популярными рельефами
                            и отделками; а еще с основными типами межкомнатных дверей и корпусной мебели, которые мы
                            производим.</p>
                    </div>
                    <!--                            <UITheSwiper-->
                    <!--                                    :slider="category.slider"-->
                    <!--                                    :options="optionsSlider"-->
                    <!--                            />-->
                    <!--                            <div class="catalog-top__btns">-->
                    <!--                                <p class="t-24">Предложить вам <br/> дизайн-проект?</p>-->
                    <!--                                <UITheButton :label="'Да'" class="btn-dark"/>-->
                    <!--                            </div>-->
                </div>
            </div>
        </section>
        <TheCatalogMain v-if="!category" @callback="isModalCallBack = true; modalText = $event" :show-header="false"/>

        <div class="container">
            <div class="catalog">


                <section class="section-page" v-if="category">
                    <div class="container">
                        <div class="catalog-card">
                            <div class="catalog-card__top">
                                <div class="catalog-card__title title">{{ category.title }}</div>
                                <div class="catalog-card__more" v-if="show3D">
                                    <NuxtLink to="#" class="t-24"
                                              @click.prevent="isModalCallBack = true; modalText = 'У нас есть небольшой архив 3д моделей. Напишите, какие рельефы вас интересуют, и мы пришлем вам модели. Не забудьте отправить нам свой дизайн-проект.'">
                                        Есть 3D
                                        модели
                                    </NuxtLink>
                                </div>
                            </div>

                            <div class="catalog-card__list card__list">
                                <div
                                        v-for="card in category.children"
                                        :key="card.id"
                                        class="catalog-card card">
                                    <TheCardProduct :item="card"/>
                                </div>

                            </div>
                            <!--                            <div class="catalog-card__pagination">-->
                            <!--                                <ThePagination/>-->
                            <!--                            </div>-->
                        </div>
                    </div>
                </section>

                <!--                <section class="section-page">-->
                <!--                    <div class="container">-->
                <!--                        <div class="create-block">-->
                <!--                            <div class="create-block__title title">У нас можно заказать мебель по индивидуальному-->
                <!--                                проекту-->
                <!--                            </div>-->
                <!--                            <TheCreateBlock/>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </section>-->

                <TheCustomerService/>

                <section class="section-page">
                    <div class="container">
                        <TheSchemeOrder/>
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
                        <TheAnswer/>
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
    </main>
</template>

<script>
import api from "~/api/api.js";
import Entity from "~/dto/Entity.js";
import TheCustomerService from "~/components/TheCustomerService.vue";
import TheCallBack from "~/components/modal/TheCallBack.vue";

export default {
    components: {TheCallBack, TheCustomerService},
    data() {
        return {
            isModalCallBack: false,
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
                    }
                }
            },
            modalText: ""
        }
    },

    methods: {
        closeModal() {
            this.isModalCallBack = false
            this.isModalVideo = false
        },
    },

    async setup() {
        const route = useRoute();
        const isCategory = Boolean(route.params.path);

        let title = ref("Каталог");

        useHead({
            title
        });

        let category = null;
        if (isCategory) {
            const data = await api("category/" + route.params.path + "/");
            /**
             * @type {Entity}
             */
            category = Entity.createFromObj(data);
            title.value = category.title;
        }

        let breadCrumbs = [
            {
                name: "Каталог",
                url: '/catalog',
                current: !isCategory
            }
        ];
        if (category) {
            breadCrumbs.push({
                name: category.title,
                url: '#',
                current: true
            });
        }

        return {
            category,
            show3D: category && category.localUrl.includes("relefnye-paneli"),
            breadCrumbs
        };
    }
}
</script>

<style lang="scss">
.catalog-top {
  &__title {
  }

  &__subtitle {
    max-width: 61%;
    margin-bottom: -70px;
    @media(max-width: 1023px) {
      margin-bottom: 20px;
      max-width: 100%;
    }
    @media(max-width: 767px) {
      margin-bottom: 20px;
      max-width: 100%;
    }
  }

  &__btns {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    @media(max-width: 767px) {
      display: none;
    }

    p {
      margin-right: 10px;
    }
  }
}

.catalog-card {
    a {
        display: block;
        height: 100%;
    }
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
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    // gap: 20px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -20px;
    // @media(max-width: 1023px) {
    //   grid-template-columns: 1fr 1fr;
    // }

  }
  .card {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 10px;
    @media(max-width: 1023px) {
        flex: 0 0 50%;
        max-width: 50%;
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
    @media(max-width: 1023px) {
      max-width: 70%;
    }
    @media(max-width: 767px) {
      max-width: 100%;
    }
  }
}
</style>