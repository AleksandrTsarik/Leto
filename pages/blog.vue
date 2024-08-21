<template>
    <main>
        <div class="blog">
            <section class="section-page">
                <div class="container">
                    <div class="blog-top">
                        <div class="blog-top__title title">Наши работы</div>
                        <div class="blog-top__subtitle t-26">
                            Ознакомьтесь с реализованными проектами. Мы работаем с 2006 года и решили множество задач
                            наших заказчиков. Посмотрите, как мы это сделали. И вы всегда можете обратиться к нам за
                            консультацией, расчетом своего проекта, приехать в шоурум и увидеть всё своими глазами.
                        </div>
                        <ThePostStiky :blog="blog"/>
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
import api from "~/api/api.js";
import Entity from "~/dto/Entity.js";
import {FreeMode, Mousewheel, Navigation} from "swiper/modules";
import TheCallBack from "~/components/modal/TheCallBack.vue";

export default {
    components: {TheCallBack},

    data() {
        return {
            isModalCallBack: false,
            modalText: ""
        }
    },

    async setup() {
        useHead({
            title: "Наши проекты",
            meta: [
                {name: "keywords", content: "Наши проекты"},
                {name: "description", content: "Наши проекты"},
            ]
        });

        const data = await api("category/cases/");
        const cases = Entity.createFromObj(data);
        const blog = [];
        cases.children.forEach(child => blog.push({
            id: child.id,
            img: child.img,
            title: child.title,
            text: child.description,
            url: child.blogUrl
        }));

        return {
            blog,
            modules: [FreeMode, Navigation, Mousewheel],
        };
    },

    methods: {
        closeModal() {
            this.isModalCallBack = false
        },
    },
}
</script>

<style lang="scss">
.blog-top {
  .blog-wrap {
    margin-right: auto;
    max-width: 100%;
  }

  &__title {
  }

  &__subtitle {
    max-width: 60%;
    margin-bottom: 30px;
    @media(max-width: 1023px) {
      max-width: 100%;
    }
  }

  &__pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
  }
}
</style>