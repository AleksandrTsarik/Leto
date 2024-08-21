<template>
    <div class="answer">
        <div class="accordion">
            <div
                    class="accordion__item"
                    v-for="(item, i) in content" :key="i"
                    :class="(isOpenAccordionItem !== null && isOpenAccordionItem === i) ? 'open' : ''"
                    @click="openAccordionItem(i)"
            >
                <div class="accordion__head t-24">{{ item.title }}
                    <span @click.stop="closeAccordionItem"></span>
                </div>
                <div
                        v-if="isOpenAccordionItem !== null && isOpenAccordionItem === i"
                        class="accordion__body t-18">{{ item.text }}
                </div>
            </div>
        </div>
        <div class="answer-form">
            <div class="answer-form__wrap">
                <form action="">
                    <div class="answer-form__inner">
                        <div class="answer-form__title t-24">Не нашли ответ? Задайте свой вопрос.</div>
                        <div class="answer-form__box">
                            <UITheInput v-model:value="name" :type="'text'" :placeholder="'Введите ваше имя'"/>
                            <UITheInput v-model:value="phone" :type="'tel'" :placeholder="'Введите ваш телефон'"/>
                            <UITheInput v-model:value="email" :type="'text'" :placeholder="'Введите ваше email'"/>

                            <UITheInput v-model:value="message" type="textarea" placeholder="Сообщение"/>
                            <UITheInput @select-file="file = $event" :type="'file'" :name="'Прикрепить файл'"/>
                        </div>
                        <UITheButton @click.prevent="send" :label="'Отправить вопрос'" class="btn-dark"/>
                        <UITheCheckbox :label="`Я соглашаюсь с <a href='#' >обработки персональных данных</a>`"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'test1',
            isOpenAccordionItem: null,
            content: [
                {
                    title: '1. Как сделать заказ?',
                    text: 'Пришлите дизайн-проект, адрес объекта (если внутри МКАД – адрес не нужен) и ваши контакты. Мы пришлем вам коммерческое предложение или объясним, почему не можем его сделать. Но ответим обязательно'
                },
                {
                    title: '2. У меня нет дизайн-проекта – что делать?',
                    text: 'Проект нужен обязательно. Мы предлагаем десятки видов рельефов, сотни видов шпона, тысячи цветов эмали, бесконечное количество конфигураций – без дизайнера никак. Посмотрите проекты в нашем большом Портфолио , выберите тот, который больше всего понравится, а мы поможем связаться с его автором'
                },
                {
                    title: '3. Как выбрать шпон?',
                    text: 'Приезжайте к нам в шоу-рум или в шоу-румы поставщиков шпона (самые популярные – Alpi и Вудсток; напишите нам, и мы поможем организовать поездку максимально эффективно). Мы работаем с любым шпоном, который можно купить в России. '
                },
                {
                    title: '4. Когда заказать, чтобы было готово вовремя?',
                    text: `Стандартный срок производства – 45 рабочих дней от даты согласования чертежей. Подготовка чертежей занимает от 3 дней до 2 недель. Согласование чертежей зависит от заказчика и дизайнера и занимает от 1 дня до плюс бесконечности.
Для подготовки чертежей объект должен быть готов к замеру: чтобы мы замерили стену или проем, их сперва кто-то должен возвести.
В общем, мы рекомендуем начинать активную работу по проекту минимум за 3-6 месяцев до плановой даты готовности объекта к монтажу наших изделий
`
                },
                {
                    title: '5. А с юридическими лицами вы работаете?',
                    text: 'Конечно. И с НДС работаем. И сертификаты на огнестойкие панели (Г1 КМ2) и на противопожарные двери (EI30) у нас есть'
                },
            ],

            name: "",
            phone: "",
            email: "",
            message: "",
            file: []
        }
    },
    methods: {
        openAccordionItem(openItem) {
            this.isOpenAccordionItem = openItem
        },
        closeAccordionItem() {
            this.isOpenAccordionItem = null
        },

        send() {
            if (!this.name || !this.email || !this.phone) {
                return;
            }

            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("email", this.email);
            formData.append("phone", this.phone);
            formData.append("message", this.message);
            this.file.forEach(f => formData.append("file[]", f));

            navigator.sendBeacon("/send.php", formData);
            alert("Заявка отправлена");
        }
    }
}
</script>

<style lang="scss">
.answer {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  @media(max-width: 1023px) {
    grid-template-columns: 1fr;
  }
}

.answer-form {
  &__wrap {
    background-color: #EAEEF5;
    border-radius: 20px;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__inner {
    margin: 0 auto;
    padding: 20px 40px;
    max-width: 370px;
    border-radius: 20px;
    @media(max-width: 1023px) {
      height: 100%;
      max-width: 100%;
      padding: 60px 100px;
    }
    @media(max-width: 767px) {
      padding: 40px 20px;
    }
  }

  &__title {
    margin-bottom: 25px;
  }

  button {
    width: 100%;
    display: block;
    margin-bottom: 10px;
    margin-top: 25px;
  }

  .default-checkbox {
    font-size: 12px;

    a {
      text-decoration: underline;
      color: #3C3A3A;
    }
  }
}

.accordion {
  &__item {
    border-radius: 20px;
    background-color: #EAEEF5;
    margin-bottom: 10px;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    span {
      cursor: default;
    }

    &.open {
      color: #fff;
      background-color: #A0B846;
      cursor: default;

      .accordion__head {
        span {
          transform: rotate(45deg);
          cursor: pointer;
          pointer-events: all;
        }
      }

      .accordion__body {
        opacity: 1;
      }
    }
  }

  &__head {
    padding: 30px 100px 30px 40px;
    position: relative;

    span {
      transition: 0.3s;
      // cursor: pointer;
      position: absolute;
      right: 35px;
      top: 20px;
      display: block;
      height: 45px;
      width: 45px;
      background-color: #A0B846;
      border-radius: 50%;
      pointer-events: none;

      &:after, &::before {
        content: '';
        display: block;
        width: 50%;
        height: 2px;
        background-color: #FFE6C0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }

  &__body {
    background-color: #A0B846;
    margin-bottom: 5px;
    border-radius: 0 0 20px 20px;
    padding: 0 40px 40px;
    color: #fff;
    transition: 0.3s;
    opacity: 0;
  }
}
</style>