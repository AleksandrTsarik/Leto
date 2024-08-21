<template>
  <main class="main">
    <div class="container"><TheBreadCrumbs :breadCrumbs="breadCrumbs" /></div>
    <div class="container">
      <div class="order">
        <div class="order__title title">Мои заказы</div>
        <div class="order__block">
          <div class="order-item" v-for="(item, i) in orderList" :key="i">
            <div class="order-item__inner r-20">
              <div class="order-item__numb">{{ item.numb }}</div>
              <div class="order-item__name">{{ item.name }}</div>
              <div class="order-item__delivery">{{ item.delivery }}</div>
              <div class="order-item__payment">{{ item.payment }}</div>
              <div class="order-item__date">{{ item.date }}</div>
            </div>
          </div>
          
        </div>
        <ThePagination class="order-pagination-mobile" />
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
          name: 'Мои заказы',
          url: '#',
          current: true
        }
      ],
      orderList: [
        {
          numb: '№10467',
          name: 'Лесная фея',
          delivery: 'Служба доставки',
          payment: 'Наличные',
          date: '5 июля 2023'
        },
        {
          numb: '№10467',
          name: 'Лесная фея',
          delivery: 'Служба доставки',
          payment: 'Наличные',
          date: '5 июля 2023'
        },
        {
          numb: '№10467',
          name: 'Лесная фея',
          delivery: 'Служба доставки',
          payment: 'Наличные',
          date: '5 июля 2023'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.order {
  max-width: 50%;
  margin-bottom: 50px;
  @media(max-width: 1273px) {
    max-width: 100%;
  }
  &__block {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -10px;
  }
}
.order-item {
  display: flex;
  padding: 0 5px;
  flex: 0 0 100%;
  max-width: 100%;
  margin-bottom: 10px;
  @media(max-width: 767px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  &__inner {
    background-color: #f5f5f5;
    padding: 30px 10px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 767px) {
      flex-direction: column;
    }
    div {
      padding: 0 5px;
      font-size: 18px;
      font-weight: 500;
      line-height: 100%;
      @media(max-width: 767px) {
        font-size: 15px;
        margin-bottom: 10px;
      }
    }
  }
  &__numb {}
  &__name {}
  &__delivery {}
  &__payment {}
  &__date {}
}
.order-pagination-mobile {
  display: none;
  @media(max-width: 767px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
  }
}
</style>