<template>
    <main>
        <div class="designer">
            <section class="section-page">
                <div class="container">
                    <TheMainBanner
                            title-prop="Специальные условия для дизайнеров и архитекторов"
                            description-prop="Воплотим в жизнь ваши идеи и расскажем о совместном проекте потенциальным заказчикам"
                            @openModalCallBack="isModalCallBack = true; modalText = ''"
                            @openModalVideo="isModalVideo = true"
                            :show-btn="false"
                    />
                </div>
            </section>

            <TheCatalogMain @callback="isModalCallBack = true; modalText = $event"/>
            <!--            <section class="section-page">-->
            <!--                <div class="container">-->
            <!--                    <div class="designer-create">-->
            <!--                        <div class="designer-create__title title">Производство на заказ и монтаж под ключ</div>-->
            <!--                        <TheSliderSmall/>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </section>-->

            <section class="section-page content-hidden">
                <div class="container">
                    <TheSliderMaterials/>
                </div>
            </section>

            <section class="section-page">
                <div class="container">
                    <div class="mission-brand">
                        <TheMission :mission="missionBrand"/>
                    </div>
                </div>
            </section>

            <TheCustomerService
                    title-prop="Для ваших заказчиков организован клиентский сервис высокого уровня"
            />

            <TheCustomerService
                    title-prop="Помогаем дизайнерам расширить аудиторию"
                    :rows="[
                         {
                            title: 'Съемка проектов',
                            text: 'Организуем съемку за наш счет или компенсируем вам часть затрат',
                            img: import('@/assets/img/service/item6.jpg'),
                        },
                        {
                            title: 'Покажем ваши проекты на большую аудиторию',
                            text: 'Более 20 тыс. посетителей сайта в месяц + социальные сети',
                            img: import('@/assets/img/service/item8.jpg'),
                        },
                        {
                            title: 'Поможем заказчику связаться с вами',
                            text: `Укажем ваши контактные данные в разделе Друзья лето`,
                            img: import('@/assets/img/service/item7.jpg'),
                        },
                        {
                            title: 'Заплатим вам роялти',
                            text:
                            'Включим разработанный вами рельеф в наш каталог и заплатим авторское вознаграждение с каждого заказа',
                            img: import('@/assets/img/service/item5.jpg'),
                        }
                    ]"
            />

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
                    <TheShowroom @callback="isModalCallBack = true; modalText = $event"/>
                </div>
            </section>
        </div>


        <the-call-back :show-address="false" v-if="isModalCallBack" @close="closeModal"
                       :text="finalModalText"/>
        <the-video-modal v-if="isModalVideo" @close="closeModal"/>
    </main>
</template>

<script>
import TheCallBack from '~/components/modal/TheCallBack.vue';
import TheVideoModal from '~/components/modal/TheVideoModal.vue'
import TheCustomerService from "~/components/TheCustomerService.vue";

export default {
    components: {TheCustomerService, TheCallBack, TheVideoModal},
    data() {
        return {
            isModalCallBack: false,
            isModalVideo: false,
            twinBlock: [],
            missionBrand: {},
            modalText: ""
        }
    },
    methods: {
        closeModal() {
            this.isModalCallBack = false
            this.isModalVideo = false
        }
    },
    async mounted() {
        const twinBlocks = []
        const newMissionBrand = {
            img: (await import("@/assets/img/promo.jpg")).default,
            title: 'Укажите наш промокод в дизайн-проекте',
            text: 'Заказчик получит скидку, а мы закрепим проект за вами в нашей партнерской системе',
        };
        twinBlocks.push(
            {
                title: 'Есть 3D модели',
                text: 'LLorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки.',
                img: (await import("@/assets/img/service/item3.jpeg")).default,
            },
            {
                title: 'Кастомизация под проект',
                text: 'LLorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки.',
                img: (await import("@/assets/img/service/item4.jpeg")).default,
            }
        );
        this.missionBrand = newMissionBrand
        this.twinBlock = twinBlocks
    },

    setup() {
        useHead({
            title: "Дизайнерам"
        });
    },

    computed: {
        finalModalText() {
            return this.modalText || "Оставьте Ваши контактные данные, чтобы мы могли с Вами связаться и обсудить варианты сотрудничества";
        }
    }
}
</script>

<style lang="scss">
.designer-create {
  &__title {
    padding-right: 190px;
    margin-bottom: -70px;
    @media(max-width: 767px) {
      margin-bottom: 20px;
      padding-right: 0;
    }
  }
}

.designer-descr-footer {
  background-color: #f5f5f5;
  padding: 75px 45px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  @media(max-width: 1023px) {
    padding: 50px;
  }
  @media(max-width: 767px) {
    border-radius: 0;
    background-color: transparent;
    padding: 0;
  }

  &__btns {
    flex: 0 0 30%;
    max-width: 30%;
    @media(max-width: 1023px) {
      flex: 0 0 100%;
      max-width: 100%;
      display: flex;
      align-items: center
    }
    @media(max-width: 767px) {
      flex-direction: column;
      justify-content: center
    }
  }

  &__btns-name {
    margin-bottom: 10px;
    @media(max-width: 1023px) {
      margin-bottom: 0;
      margin-right: 15px;
    }
    @media(max-width: 767px) {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }

  &__btns-block {
    button + button {
      margin-left: 10px;

    }
  }

  &__mobile {
    flex: 0 0 70%;
    max-width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(max-width: 1023px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
    @media(max-width: 767px) {
      background-color: #f5f5f5;
      border-radius: 15px;
      padding: 35px 20px;
      margin-bottom: 25px;
    }
  }

  &__item {
    flex: 0 0 50%;
    max-width: 50%;
    @media(max-width: 1023px) {
      flex: 0 0 100%;
      max-width: 100%;
    }

    &:first-child {
      padding-right: 125px;
      max-width: 40%;
      @media(max-width: 1273px) {
        padding-right: 50px;
        max-width: 50%;
      }
      @media(max-width: 1023px) {
        padding-right: 0;
        margin-bottom: 15px;
      }
      @media(max-width: 767px) {
        margin-bottom: 5px;
        max-width: 100%;
      }
    }

    &:last-child {
      padding-right: 125px;
      @media(max-width: 1273px) {
        padding-right: 50px;
      }
      @media(max-width: 1023px) {
        padding-right: 0;
        margin-bottom: 25px;
      }
      @media(max-width: 767px) {
        margin-bottom: 0;
      }
    }
  }
}
</style>