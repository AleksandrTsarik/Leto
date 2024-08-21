<script>
import api from "~/api/api.js";
import Entity from "~/dto/Entity.js";

export default {
    props: {
        title: {
            type: String,
            default: "Производство на заказ и установка под ключ"
        },
        showHeader: {
            type: Boolean,
            default: true
        }
    },

    data() {
        return {
            text: `Ответим на Ваши вопросы. Оправьте дизайн-проект, чтобы наша беседа была предметной, а ответы более точными`
        }
    },

    async setup() {
        const promises = [
            api("category/relefnye-paneli/"),
            api("category/gladkie-paneli-v-shpone-i-emali/"),
            api("category/mezhkomnatnye-dveri/"),
            api("category/mebel-na-zakaz/")
        ];
        const data = await Promise.all(promises);

        const images = (await Promise.all([
            import("assets/img/catalog/relefnye-paneli.jpg"),
            import("assets/img/catalog/gladkie-paneli.jpg"),
            import("@/assets/img/catalog/mezh-dveri.jpg"),
            import("@/assets/img/catalog/mebel-na-zakaz.jpg")
        ])).map(el => el.default);

        /**
         *
         * @type {Entity[]}
         */
        const catalog = data.map((cat, i) => {
            cat.picture = images[i];
            return Entity.createFromObj(cat)
        });

        return {
            catalog
        };
    }
}
</script>

<template>
    <section class="section-page">
        <div class="container">
            <div class="catalog-block">
                <div class="catalog-block__title title" v-if="showHeader">
                    {{ title }}
                    <TheSvg :type="'catalog'"/>
                </div>
                <div class="catalog-block-card__list card__list">
                    <div
                            v-for="cat in catalog"
                            :key="cat.id"
                            class="catalog-block-card card">
                        <TheCardProduct :item="cat"/>
                    </div>
                    <div class="catalog-block-card card">
                        <div class="card__inner catalog-block-card__inner">
                            <p>Нужна консультация?</p>
                            <div>
                                <UITheButton @click.prevent="$emit('callback', text)" :label="'Да, нужна'" class="btn-dark"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

</style>