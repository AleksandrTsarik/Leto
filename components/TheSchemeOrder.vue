<template>
    <div class="scheme-order">
        <div class="scheme-order__title title">Удобная схема заказа</div>
        <div class="scheme-order__description t-26">
            Вам будет просто и удобно с нами работать: один менеджер будет вести ваш проект от расчета коммерческого
            предложения (КП) до успешного завершения монтажа
        </div>
        <div class="scheme-order__tabs">
            <UITheTabs :tabs="tabs" ref="tab">
                <slot/>
                <template v-slot:content="{ active }">
                    <template v-if="active == 'Согласование КП'">
                        <div class="scheme-order__wrap">
                            <div class="scheme-order-item__info r-20">
                                <form action="">
                                    <div class="scheme-order-item__title">1. Согласование КП</div>
                                    <div class="scheme-order-item__description t-18">
                                        Вы присылаете дизайн-проект или информацию для расчета коммерческого
                                        предложения. Менеджер:<br>
                                        - Оценит возможность «сделать как на картинке»<br>
                                        - Если нужно, задаст уточняющие вопросы<br>
                                        - Посчитает стоимость каждого изделия, предложит варианты<br>
                                        - Вышлет КП и ответит на вопросы<br>

                                    </div>
                                    <div class="scheme-order-item__phone-block">
                                        <div class="scheme-order-item__phone t-24"> +7 (495) 662-78-18</div>
                                        <div class="scheme-order-item__network">
                                            <TheNetwork :type="'telegram'"/>
                                            <TheNetwork :type="'email'"/>
                                        </div>
                                    </div>
                                    <div class="scheme-order-item__contact">
                                        <div class="scheme-order-item__contact-title t-28">Заказ обратного звонка</div>
                                        <div class="scheme-order-item__contact-list">
                                            <UITheInput v-model:value="name" :type="'text'"
                                                        :placeholder="'Введите ваше имя'"
                                                        class="scheme-order-item__contact-item"/>
                                            <UITheInput v-model:value="phone" :type="'tel'"
                                                        :placeholder="'Введите ваш телефон'"
                                                        class="scheme-order-item__contact-item"/>
                                            <UITheButton @click.prevent="send" :label="'Обратный звонок'"
                                                         class="btn-dark scheme-order-item__contact-item"/>
                                            <UITheCheckbox
                                                    :label="`Я соглашаюсь с <a href='#' >обработки персональных данных</a>`"
                                                    class="scheme-order-item__contact-item"/>
                                        </div>
                                    </div>
                                    <div class="scheme-order-item__link">
                                        <NuxtLink @click.prevent="$refs.tab.nextTab()" to="#">Следующий шаг
                                            <TheSvg :type="'arrow'"/>
                                        </NuxtLink>
                                    </div>
                                </form>

                            </div>
                            <div class="scheme-order-item__img">
                                <img class="r-20" src="@/assets/img/catalog/item1.jpg" alt="..." loading="lazy">
                            </div>
                        </div>
                    </template>
                    <template v-if="active == 'Заключение договора'">
                        <div class="scheme-order__wrap">
                            <div class="scheme-order-item__info r-20">
                                <div class="scheme-order-item__title">2. Заключение договора</div>
                                <div class="scheme-order-item__description t-18">
                                    Вы решаете, кто будет плательщиком (юридическое или физическое лицо) и присылаете
                                    реквизиты. Менеджер:<br>
                                    - Внесет информацию в систему<br>
                                    - Подготовит и пришлет договор и спецификацию<br>
                                    - Ответит на вопросы и согласует правки с руководством<br>
                                    - Пришлет подписанный договор и счет на предоплату
                                </div>
                                <div class="scheme-order-item__link">
                                    <NuxtLink @click.prevent="$refs.tab.nextTab()" to="#">Следующий шаг
                                        <TheSvg :type="'arrow'"/>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="scheme-order-item__img">
                                <img class="r-20" src="@/assets/img/catalog/item2.jpg" alt="..." loading="lazy">
                            </div>
                        </div>
                    </template>
                    <template v-if="active == 'Проведение замеров'">
                        <div class="scheme-order__wrap">
                            <div class="scheme-order-item__info r-20">
                                <div class="scheme-order-item__title">3. Проведение замеров</div>
                                <div class="scheme-order-item__description t-18">
                                    Вы подтверждаете готовность объекта к замеру и вносите предоплату. Менеджер:<br>
                                    - Назначит конструктора<br>
                                    - Согласует дату и время замера<br>
                                    - По результатам замера подтвердит КП (пересчитает КП, если размеры значительно
                                    отличаются от проектных)<br>
                                    - запустит подготовку чертежей на согласование

                                </div>
                                <div class="scheme-order-item__link">
                                    <NuxtLink @click.prevent="$refs.tab.nextTab()" to="#">Следующий шаг
                                        <TheSvg :type="'arrow'"/>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="scheme-order-item__img">
                                <img class="r-20" src="@/assets/img/catalog/item3.jpg" alt="..." loading="lazy">
                            </div>
                        </div>
                    </template>
                    <template v-if="active == 'Согласование чертежей'">
                        <div class="scheme-order__wrap">
                            <div class="scheme-order-item__info r-20">
                                <div class="scheme-order-item__title">4. Согласование чертежей</div>
                                <div class="scheme-order-item__description t-18">
                                    Конструктор, сделавший замер, готовит чертежи на согласование. Менеджер:<br>
                                    - Проверит чертежи<br>
                                    - Вышлет их вам<br>
                                    - Ответит на вопросы, при необходимости организует подготовку дополнительных видов,
                                    выносок и разрезов<br>
                                    За размеры, снятые в результате замера, отвечаем мы – проверять их не надо. Вы
                                    проверяете общий вид изделий и правильность отделок (вид шпона, цвет эмали, матовый
                                    или глянцевый лак).<br>
                                    - Когда все правильно – подписываете чертежи; с этого момента начинается срок
                                    изготовления
                                </div>
                                <div class="scheme-order-item__link">
                                    <NuxtLink @click.prevent="$refs.tab.nextTab()" to="#">Следующий шаг
                                        <TheSvg :type="'arrow'"/>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="scheme-order-item__img">
                                <img class="r-20" src="@/assets/img/catalog/item4.jpg" alt="..." loading="lazy">
                            </div>
                        </div>
                    </template>
                    <template v-if="active == 'Производство'">
                        <div class="scheme-order__wrap">
                            <div class="scheme-order-item__info r-20">
                                <div class="scheme-order-item__title">5. Производство</div>
                                <div class="scheme-order-item__description t-18">
                                    Конструктор на основании согласованных чертежей готовит пакет документов в
                                    производство<br>
                                    - Менеджер проверяет, вносит в систему и запускает производство заказа<br>
                                    - Отдел закупок сразу после запуска заказывает выбранные шпон, эмаль и фурнитуру,
                                    чтобы обеспечить наличие и не нести курсовые риски<br>
                                    - Производственный отдел формирует карту движения каждой части заказа по
                                    участкам<br>
                                    - Менеджер видит движение заказа и заранее уточняет готовность объекта к доставке и
                                    монтажу; по готовности изделий выставляет счет на доплату
                                </div>
                                <div class="scheme-order-item__link">
                                    <NuxtLink @click.prevent="$refs.tab.nextTab()" to="#">Следующий шаг
                                        <TheSvg :type="'arrow'"/>
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="scheme-order-item__img">
                                <img class="r-20" src="@/assets/img/catalog/item5.jpg" alt="..." loading="lazy">
                            </div>
                        </div>
                    </template>
                    <template v-if="active == 'Доставка и монтаж'">
                        <div class="scheme-order__wrap">
                            <div class="scheme-order-item__info r-20">
                                <div class="scheme-order-item__title">6. Доставка и монтаж</div>
                                <div class="scheme-order-item__description t-18">
                                    Менеджер согласует с вами даты доставки и начала монтажа<br>
                                    - За день логист согласует примерное время доставки<br>
                                    Если во время монтажа возникнут рекламации (для большого заказа «если» правильнее
                                    заменить на «когда»), менеджер организует взаимодействие конструктора, производства,
                                    доставки и монтажников для максимально оперативного устранения проблем.<br>
                                    Большой заказ состоит из сотен деталей; каждая деталь изготовлена в одном экземпляре
                                    специально для этого заказа, поэтому вероятность ошибки высока. Мы не можем
                                    полностью исключить ошибки, зато мы готовы полностью устранить их последствия.<br>
                                    <br>
                                    Задача менеджера и компании в целом – обеспечить результат, который будет радовать
                                    вас долгие годы

                                </div>
                            </div>
                            <div class="scheme-order-item__img">
                                <img class="r-20" src="@/assets/img/catalog/item6.jpg" alt="..." loading="lazy">
                            </div>
                        </div>
                    </template>
                </template>
            </UITheTabs>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {
                    title: 'Согласование КП',
                    name: 'name1',
                    content: 'content1',
                    value: 'Согласование КП'
                },
                {
                    title: 'Заключение договора',
                    name: 'name1',
                    content: 'content1',
                    value: 'Заключение договора'
                },
                {
                    title: 'Проведение замеров',
                    name: 'name1',
                    content: 'content1',
                    value: 'Проведение замеров'
                },
                {
                    title: 'Согласование чертежей',
                    name: 'name1',
                    content: 'content1',
                    value: 'Согласование чертежей'
                },
                {
                    title: 'Производство',
                    name: 'name1',
                    content: 'content1',
                    value: 'Производство'
                },
                {
                    title: 'Доставка и монтаж',
                    name: 'name1',
                    content: 'content1',
                    value: 'Доставка и монтаж'
                }
            ],
            name: "",
            phone: ""
        }
    },

    methods: {
        send() {
            if (!this.name || !this.phone) {
                return;
            }

            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("phone", this.phone);

            navigator.sendBeacon("/send.php", formData);
            alert("Заявка отправлена");
        }
    }

}
</script>

<style lang="scss">
.scheme-order {
  .default-checkbox__text {
    font-size: 12px;

    a {
      text-decoration: underline;
      color: #232323;
    }
  }

  &__wrap {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 20px;
    height: 100%;
    @media(max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }

  &__description {
    margin-bottom: 25px;
  }

}

.scheme-order-item {
  &__link {
    margin-top: 30px;

    a {
      display: inline-block;
      border-bottom: solid 1px;
      color: #232323;
    }

    svg {
      margin-left: 15px;
    }
  }

  &__info {
    background-color: #F5F5F5;
    padding: 65px 70px;
    @media(max-width: 1400px) {
      padding: 65px 25px;
    }
    @media(max-width: 1023px) {
      padding: 65px 100px;
    }
    @media(max-width: 767px) {
      padding: 40px 25px;
    }
  }

  &__img {
    height: 100%;
    @media(max-width: 1023px) {
      display: none;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &__title {
    font-size: 32px;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 25px;
  }

  &__description {
    margin-bottom: 25px;
  }

  &__contact {
  }

  &__contact-title {
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 400;
  }

  &__contact-list {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 10px;
    @media(max-width: 575px) {
      grid-template-columns: 1fr;
    }

    .block-input {
      margin-bottom: 0;
    }
  }

  &__network {
    white-space: nowrap;
  }

  &__phone-block {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    flex-wrap: wrap;
  }

  &__phone {
    margin-right: 35px;
    font-weight: 400;
    white-space: nowrap;
  }

  &__network {
    margin-bottom: -3px;

    svg {
      width: 22px;
      height: 22px;
      margin-left: 10px;
    }
  }
}
</style>