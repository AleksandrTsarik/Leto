<template>
    <main class="main">
        <div class="container">
            <TheBreadCrumbs :breadCrumbs="breadCrumbs"/>
        </div>

        <div class="about-project">
            <section class="section-page">
                <div class="container">
                    <div class="about-project-top">
                        <div class="about-project-top__title title">Совместные проекты с дизайнером Анной Волковой</div>
                        <div class="about-project-top__description">
                            <div class="about-project-top__text t-26">Lorem Ipsum является стандартной "рыбой" для
                                текстов на латинице с начала XVI века. В то время некий безымянный печатник создал
                                большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                                образцов.
                            </div>
                            <div class="about-project-top__network">
                                <TheNetwork :type="'telegram'"/>
                                <TheNetwork :type="'vk'"/>
                                <TheNetwork :type="'pin'"/>
                                <TheNetwork :type="'be'"/>
                                <TheNetwork :type="'dealer'"/>
                            </div>
                        </div>
                    </div>
                    <TheAboutProject/>
                </div>
            </section>

            <section class="section-page">
                <div class="container">
                    <div class="about-project-offer">
                        <TheHelpBlock v-for="(item, i) in choice" :key="i" :helpChoice="item"/>
                    </div>
                    <div class="about-project-offer__pagination">
                        <ThePagination/>
                    </div>
                </div>
            </section>

            <section class="section-page content-hidden">
                <div class="container">
                    <TheSliderMaterials/>
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
                    name: "Наши работы ",
                    url: "#",
                    current: false,
                },
                {
                    name: "Совместные проекты с Анной Волковой",
                    url: "#",
                    current: true,
                },
            ],
            choice: [],
            isModalCallBack: false,
            modalText: ""
        }
    },

    methods: {
        closeModal() {
            this.isModalCallBack = false
        },
    },

    async mounted() {
        const newChoice = [];
        newChoice.push(
            {
                id: 0,
                video: (await import("@/assets/img/catalog/item1.jpeg")).default,
                description: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
                //btn: 'Да, нужна помощь',

                linkName: 'Подробнее',
                linkUrl: '/'
            },
            {
                id: 1,
                video: (await import("@/assets/img/catalog/item1.jpeg")).default,
                description: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
                //btn: 'Да, нужна помощь',

                linkName: 'Подробнее',
                linkUrl: '/'
            },
            {
                id: 2,
                video: (await import("@/assets/img/catalog/item1.jpeg")).default,
                description: 'Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
                //btn: 'Да, нужна помощь',

                linkName: 'Подробнее',
                linkUrl: '/'
            },
        );

        this.choice = newChoice
    },
}
</script>

<style lang="scss">
.about-project-top {
  &__title {
    max-width: 40%;
    @media(max-width: 1273px) {
      max-width: 100%;
    }
  }

  &__description {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  &__text {
    flex: 0 0 60%;
    max-width: 60%;
    @media(max-width: 1023px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }

  &__network {
    display: flex;
    align-items: center;
    @media(max-width: 1023px) {
      justify-content: flex-end;
      margin-left: auto;
      margin-top: 25px;
    }

    a + a {
      margin-left: 15px;
    }

    a {
      svg {
        width: 30px;
        height: 30px;
      }

      display: block;
    }
  }
}

.about-project-offer {
  &__pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
  }

  .help-block {
    margin-bottom: 20px;
    grid-template-columns: 1fr 1.5fr;
    @media(max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }

  .help-block {
    @media(max-width: 1023px) {
      gap: 0;
      background-color: #f5f5f5;
      border-radius: 20px;
    }

    &__item {
      &:first-child {
        @media(max-width: 1023px) {
          order: 1;
        }
      }

      &:last-child {
        grid-column-start: 1;
        grid-row-start: 1;
        @media(max-width: 1023px) {
          order: 2;
          grid-row-start: 2;
        }
        @media(max-width: 767px) {
          background-color: #f5f5f5;
          border-radius: 15px;
          padding: 20px;
        }
      }
    }

    &__description {
      @media(max-width: 767px) {
        padding: 0;
      }
    }

  }
}
</style>