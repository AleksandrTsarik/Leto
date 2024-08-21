<template>
    <div class="designer-block__title title">Вы дизайнер?</div>
    <div class="designer-block__inner">
        <!-- <div class="designer-block__video">
            <div class="designer-block__iframe iframe">
                <img src="/_nuxt/assets/img/designer-block.png">
                <span class="video-icon"></span>
            </div>
        </div> -->
        <div class="designer-block__img">
          <img src="/designer-block.png">
          <span class="video-icon"></span>
        </div>
        <div class="designer-block-block__description designer-block-description">
            <div class="designer-block-description__body">
                <div class="designer-block-description__text t-26 content">
                    <p>Мы очень ценим работу с дизайнерами и стараемся быть полезными. </p>

                    <p>Один менеджер сопровождает проект от первого расчета до успешного завершения монтажа.</p>

                    <p>Готовим и подписываем с заказчиком понятные и подробные чертежи, чтобы избежать неприятных
                        сюрпризов, помогаем в организации съемок, продвигаем проекты и их авторов в соцсетях и на сайте,
                        в том числе в разделе <a href="https://www.letostyle.ru/friends/">Друзья Leto</a>. Конечно,
                        предлагаем специальные условия для дизайнеров</p>
                </div>
                <div class="designer-block-description__link t-24">
                    <NuxtLink to="/designer">
                        Подробнее
                        <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5.5L7.28571 1L12 5.5ZM12 5.5L7.28571 10L12 5.5ZM12 5.5L1 5.5L12 5.5Z"
                                  fill="#232323"/>
                            <path d="M12 5.5L7.28571 1M12 5.5L7.28571 10M12 5.5L1 5.5" stroke="#232323"
                                  stroke-width="1.57139" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
            <!--            <div class="designer-block-description__footer">-->
            <!--                <div class="designer-block-description__question">У вас уже есть проект?</div>-->
            <!--                <div class="designer-block-description__btns">-->
            <!--                    <UITheButton @click.prevent="isModalCallBack = true" :label="'Да'" class="btn-dark"/>-->
            <!--                    <UITheButton @click.prevent="isModalCallBack = true" :label="'Нет'" class="btn-light"/>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>

        <the-call-back v-if="isModalCallBack" @close="isModalCallBack = false"/>
    </div>
</template>

<script>
import TheCallBack from "~/components/modal/TheCallBack.vue";

export default {
    components: {TheCallBack},

    data() {
        return {
            isModalCallBack: false
        }
    }
}
</script>

<style lang="scss">
.designer-block {
  &__inner {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 20px;
    @media(max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 10px 0;
    }
  }

  &__iframe {
    height: 100%;
    background-image: url('@/assets/img/designer.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 50%;
    border-radius: 20px;
    overflow: hidden;
  }
  &__img {
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.designer-block-description {
  padding: 70px 50px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #F5F5F5;
  @media(max-width: 767px) {
    background-color: #fff;
    border-radius: 0;
    padding: 0;
  }

  &__text {
    margin-bottom: 30px;
    @media(max-width: 767px) {
      margin-bottom: 5px;
    }
  }

  a {
    border-bottom: solid 1px;
    font-size: 24px;
    @media(max-width: 767px) {
      font-size: 16px;
    }
  }

  &__link {
    a {
      color: #232323;
      font-size: 18px;
      border-bottom: solid 1px;
      display: inline-block;
      padding-right: 2px;
    }

    svg {
      margin-left: 5px;
    }
  }

  &__body {
    @media(max-width: 767px) {
      background-color: #f5f5f5;
      border-radius: 15px;
      padding: 35px 25px;
    }
  }

  &__footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    @media(max-width: 767px) {
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 25px;
    }
  }

  &__question {
    flex: 0 0 100px;
    max-width: 100px;
    margin-right: 40px;
    @media(max-width: 767px) {
      flex: 0 0 100%;
      max-width: 100%;
      text-align: center;
      margin: 0 0 10px;
    }
  }

  &__btns {
    button {
      margin-bottom: 10px;

      &:first-child {
        margin-right: 15px;
      }
    }

    // button + button {
    //   margin-left: 15px;
    // }
  }
}
</style>