<template>
    <div class="showroom">
        <div class="showroom__title title">Посетите наш шоу-рум</div>
        <div class="showroom__box">
            <div class="showroom__item">
                <div class="showroom-location">
                    <div class="showroom-location__name">Производственная компания Leto</div>
                    <div class="showroom-location__block">
                        <div class="showroom-location__item t-24">
                            <TheSvg :type="'location'"/>
                            г. Москва, Старопетровский проезд, 11к1, БЦ Старопетровский Атриум, офис 201<br>
                            встречи и посещения – только по предварительной договоренности
                        </div>
                        <a href="tel:+74956627818" class="showroom-location__item t-24">
                            <TheSvg :type="'phone'"/>
                            +7 (495) 662-78-18
                        </a>
                        <a href="mailto:info@letostyle.ru" class="showroom-location__item t-24">
                            <TheSvg :type="'email'"/>
                            info@letostyle.ru
                        </a>
                    </div>
                    <div class="showroom-location__btn">
                        <UITheButton @click.prevent="$emit('callback', text)" :label="'Предварительная запись'"
                                     class="btn-dark"/>
                    </div>
                </div>
            </div>
            <div class="showroom__item">
                <div class="showroom__iframe iframe r-20">
<!--                    <iframe src="" frameborder="0"></iframe>-->
                    <iframe src="https://letostyle.vrealspace.pro/" frameborder="0" allowfullscreen allow='vr'></iframe>
<!--                    <span class="video-icon"></span>-->
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            text: `Оставьте контактные данные, наш сотрудник свяжется с Вами и согласует время встречи. Если есть дизайн проект, можете сразу его нам отправить.`
        }
    }
}
</script>

<style lang="scss">
.showroom {
  &__box {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: 20px;
    @media(max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    height: 100%;

    &:first-child {
      background-color: #F5F5F5;
      border-radius: 20px;
      padding: 100px 80px 75px;
      @media(max-width: 1273px) {
        padding: 100px 40px 75px;
      }
      @media(max-width: 767px) {
        order: 2;
        background-color: #fff;
        padding: 0;
      }
    }
  }

  &__iframe {
    //background-image: url('@/assets/img/footer-video.jpeg');
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    //padding-bottom: 40%;
    height: 100%;
    iframe {
      @media(max-width: 1023px) {
        height: 70vh;
      }
    }
  }
}

.showroom-location {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__name {
    font-size: 32px;
    font-weight: 500;
    line-height: 110%;
    margin-bottom: 50px;
    @media(max-width: 767px) {
      margin-bottom: 15px;
      font-size: 22px;
    }
  }

  &__block {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  &__item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;
    margin-right: 15px;
    flex: 1 0 auto;
    svg {
      margin-right: 15px;
      //margin-top: 5px;
      flex: 0 0 0.8em;
      height: 1em;
      @media(max-width: 767px) {
        margin-top: 0;
        margin-right: 10px;
      }

    }

    &:nth-child(1) {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }

  &__btn {
    margin-top: auto;

    button {
      width: 100%;
    }
  }
}
</style>