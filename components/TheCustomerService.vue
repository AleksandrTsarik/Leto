<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "TheCustomerService",
    props: {
        titleProp: {
            type: String,
            default: null
        },
        rows: {
            type: Array,
            default: () => []
        }
    },

    async setup(props) {
        const customers = props.rows.slice();
        if (customers.length === 0) {
            customers.push(
                {
                    title: "Разработка чертежей",
                    text:
                        'Чтобы изделие соответствовало вашим ожиданиям, мы готовим подробные и понятные чертежи.',
                    img: import("@/assets/img/service/item1.jpg"),
                },
                {
                    title: "Собственное производство площадью 2000 кв.м.",
                    text: 'Каждое изделие уникально, и мы полностью контролируем процесс его производства.',
                    img: import("@/assets/img/service/item2.jpg"),
                },
                {
                    title: "Доставка и монтаж",
                    text: 'Возьмем заботы на себя. Под ключ — значит, под ключ',
                    img: import("@/assets/img/service/item3.jpg"),
                },
                {
                    title: "Работа с рекламациями",
                    text:
                        'Если случилась ошибка — исправим быстро',
                    img: import("@/assets/img/service/item4.jpg"),
                }
            );
        }
        for (let row of customers) {
            if (!(row.img instanceof Promise)) continue;
            row.img = (await row.img).default;
        }

        return {
            customers,
            title: props.titleProp || "От проработки проекта до установки под ключ",
        };
    },
});
</script>

<template>
    <section class="section-page">
        <div class="container">
            <div class="customer-service">
                <div class="customer-service__title title">
                    {{ title }}
                </div>
                <!--                <div class="customer-service__text t-26">Lorem Ipsum является стандартной "рыбой" для текстов на-->
                <!--                    латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию-->
                <!--                    размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.-->
                <!--                </div>-->
                <TheTwinBlock :twinblock="customers"/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">

</style>