<template>
  <main>
    <div class="container"><TheBreadCrumbs :breadCrumbs="breadCrumbs" /></div>
      <div class="container">
        <div class="thanks-block r-20">
          <div class="thanks-block__title">Спасибо! Ваш заказ оформлен </div>
          <div class="thanks-block__text t-26">Мы свяжемся с вами в ближайшее время</div>
          <div class="thanks-block__numb t-18">Номер вашего заказа: #2022</div>
          <div class="thanks-block__btn">
            <NuxtLink class="btn btn-dark" to="/">Вернуться на главную</NuxtLink>
          </div>
        </div>
      </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbs: [
        {
          name: 'Спасибо',
          url: '#',
          current: true
        }
      ],
    }
  }
}
</script>

<style lang="scss">
.thanks-block {
  margin: 50px 0;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #f5f5f5;
  text-align: center;
  max-width: 700px;
  width: 100%;
  padding: 65px 70px;
  @media(max-width: 1023px) {
    max-width: 98%;
    padding: 120px 50px;
  }
  @media(max-width: 767px) {
    padding: 80px 20px;
  }
  &__title {
    font-size: 44px;
    font-weight: 400;
    font-family: 'Europe';
    line-height: 105%;
    margin-bottom: 50px;
    @media(max-width: 1023px) {
      margin-bottom: 20px;
    }
    @media(max-width: 767px) {
      font-size: 26px;
      margin-bottom: 15px;
    }
  }
  &__text {
    margin-bottom: 15px;
    font-weight: 500;
  }
  &__numb {
    margin-bottom: 60px;
    @media(max-width: 767px) {
      margin-bottom: 30px;
    }
  }
  &__btn {
    @media(max-width: 767px) {
      button {
        width: 100%;
      }
    }
  }
}
</style>