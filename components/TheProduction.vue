<template>
    <div class="production">
        <div class="production__title title">У нас собственное производство</div>
        <div class="production__box">
            <div class="production__item">
                <div class="production__text t-26">
                    Работая с нами, вы получаете партнера, который полностью контролирует все этапы создания продукта.
                    На площади 2000 м2 мы производим уникальные изделия, которые станут частью вашего пространства,
                    наполнят его атмосферой комфорта и необходимой вам энергией.
                </div>
                <!--        <div class="production__video t-24">-->
                <!--          Смотреть<br />видео-->
                <!--          <TheLinkMore :type="'link-more'"  />-->
                <!--        </div>-->
            </div>
            <div class="production__item">
                <div class="production__iframe iframe r-20"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.production {
  &__box {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    @media(max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }

  &__text {
    margin-bottom: 20px;
  }

  &__item {
    &:first-child {
      background-color: #F5F5F5;
      border-radius: 20px;
      padding: 70px 50px;
      display: flex;
      flex-direction: column;
      height: 100%;
      @media(max-width: 1400px) {
        padding: 50px;
      }
      @media(max-width: 767px) {
        order: 2;
        padding: 35px 25px;
      }
    }
  }

  &__video {
    margin-top: auto;
    display: flex;
    align-items: center;
    max-width: 180px;

    a {
      margin-left: 10px;
    }
  }

  &__iframe {
    background-image: url('@/assets/img/video-product.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    padding-bottom: 50%;
  }
}
</style>