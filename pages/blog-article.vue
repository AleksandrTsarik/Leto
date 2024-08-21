<template>
    <main>
        <div class="container">
            <TheBreadCrumbs :breadCrumbs="breadCrumbs"/>
        </div>
        <div class="blog blog-article" v-if="post">
            <section class="section-page">
                <div class="container">
                    <div class="blog-top__title title"><!--<span>01.03.2023</span>-->{{ post.title }}</div>
                    <div class="block-stiky">
                        <div class="block-stiky__item">
                            <div class="blog-article__block">
                                <div class="blog-article__img r-20" v-if="post.img">
                                    <img :src="post.img" alt="...">
                                </div>
                                <div class="blog-article__text t-18" v-html="post.content">
                                </div>
                                <div class="blog-article__iframe iframe r-20" v-if="post.video">
                                    <iframe src="" frameborder="0"></iframe>
                                    <span class="video-icon" @click.prevent="isModalVideo = true"></span>
                                </div>
                            </div>

                        </div>
                        <div class="block-stiky__item">
                            <div class="block-stiky__wrap">
                                <div class="block-stiky__content block-stiky-content">
                                    <div class="block-stiky-content__title t-24">Подписывайтесь на нас</div>
                                    <div class="block-stiky-content__network">
                                        <TheNetwork :type="'telegram'"/>
                                        <TheNetwork :type="'vk'"/>
                                        <TheNetwork :type="'pin'"/>
                                        <TheNetwork :type="'be'"/>
                                        <TheNetwork :type="'dealer'"/>
                                    </div>
                                    <div class="block-stiky-content__text t-18">
                                        Работая с 2006 года мы реализовали множество проектов, некоторые из них
                                        опубликованы здесь. Вы можете с ними ознакомиться и увидеть уровень реализации.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

        <section class="section-page">
            <div class="container">
                <div class="children-furniture">
                    <div class="children-furniture__title title">У вас есть дизайн-проект?</div>
                    <TheHelpBlock @callback="isModalCallBack = true" :helpChoice="choice"/>
                </div>
            </div>
        </section>

        <section class="section-page">
            <div class="container">
                <div class="mission-brand">
                    <TheMission :mission="missionBrand"/>
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

        <the-video-modal :video="post.video" v-if="post && isModalVideo" @close="isModalVideo = false"/>
        <the-call-back v-if="isModalCallBack" @close="isModalCallBack = false"/>
    </main>
</template>

<script>
import api from "~/api/api.js";
import Entity from "~/dto/Entity.js";
import TheVideoModal from "~/components/modal/TheVideoModal.vue";
import TheCallBack from "~/components/modal/TheCallBack.vue";

export default {
    components: {TheCallBack, TheVideoModal},
    data() {
        return {
            choice: {},
            missionBrand: {},
            isModalVideo: false,
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
        const newChoice = {
            id: 0,
            img: (await import("@/assets/img/designer-main.png")).default,
            description: `Все, что ваш дизайнер хотел сделать в дереве и эмали: мебель, двери, стеновые панели, рейки`,
            btn: 'Рассчитать проект',

            // linkName: 'Подробнее',
            // linkUrl: '/'
        }
        const newMissionBrand = {
            title: 'О компании',
            text: `Вы влюбились в проект, который нарисовал дизайнер? Прекрасно - мы поможем вам воплотить его в жизнь и создать интерьер, в который всегда хочется возвращаться.<br>
С 2006 года создаем пространства для наших заказчиков, будем счастливы сделать это для вас.`,
            img: (await import("@/assets/img/mission.jpg")).default,
        };
        this.choice = newChoice
        this.missionBrand = newMissionBrand
    },

    async setup() {
        const route = useRoute();
        const path = route.params.pathMatch;
        if (!path || path.length === 0) {
            await navigateTo("/");
            return;
        }

        const title = ref("Наши проекты");

        useHead({
            title
        });

        const data = await api(path.join("/"));
        const post = Entity.createFromObj(data);

        return {
            post,
            breadCrumbs: [
                {
                    name: 'Наши проекты',
                    url: '/blog',
                    current: false
                },
                {
                    name: post.title,
                    url: '#',
                    current: true
                }
            ],
        };
    }
}
</script>

<style lang="scss">
.blog-article {
  .title {
    position: relative;
    display: flex;
    flex-direction: column;

    span {
      color: #737373;
      font-size: 18px;
      line-height: 100%;
      margin-bottom: 5px;
    }
  }

  &__text {
    margin-bottom: 20px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 20px;
  }

  &__iframe {
    background-image: url('@/assets/img/catalog/item1.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding-bottom: 55%;
  }
}

.mission-brand {
  .mission__title {
    max-width: 50%;
    @media(max-width: 1023px) {
      max-width: 80%;
    }
    @media(max-width: 767px) {
      max-width: 100%;
    }
  }
}
</style>