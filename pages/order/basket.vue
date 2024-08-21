<template>
  <main>
    <div class="container"><TheBreadCrumbs :breadCrumbs="breadCrumbs" /></div>
    <div class="container">
      <div class="basket">
        <div class="basket__block">
          <div class="basket__block-name">Корзина</div>
          <div class="basket-basket">
            <div class="basket-basket__content r-20">
              <div class="basket-basket__img">
                <img src="@/assets/img/footer-video.jpeg" alt="...">
              </div>
              <div class="basket-basket__name t-22">Лесная фея</div>
              <div class="basket-basket__sum t-22">345 000₽</div>
              <div class="basket-basket__numb t-22">1 шт.</div>
              <div class="basket-basket__del">
                <button>
                  <TheSvg :type="'close'" />
                </button>
              </div>
            </div>
            <div class="basket-basket__finish t-24">Итого: 345 000₽</div>
          </div>
        </div>

        <div class="basket__block">
          <div class="basket__block-name">Оформление заказа</div>
          <div class="basket-order r-20">
            <div class="basket-order__name t-32">Покупатель</div>
            <form action="">
              <div class="basket-order__form">
                <div class="basket-order__body">
                  <div class="basket-order__input">
                    <UITheInput :type="'text'" :placeholder="'Имя'" />
                    <UITheInput :type="'text'" :placeholder="'Фамилия'" />
                    <UITheInput :type="'tel'" :placeholder="'Телефон'" />
                    <UITheInput :type="'email'" :placeholder="'E-mail'" />
                  </div>
                  <div class="basket-order__textarea">
                    <UITheInput :type="'textarea'" :placeholder="'Комментарий к заказу'" />
                  </div>
                  <UITheCheckbox :label="`Я соглашаюсь с <a href='#' >олитикой конфиденциальности</a>`" class="basket-order__checkbox" />
                </div>

                <div class="basket-order__footer">
                  <div class="basket-order__finish">Итого: 355 000₽</div>
                  <div class="basket-order__btn">
                    <UITheButton :label="'Выбрать доставку'" class="btn-dark" />
                  </div>
                </div>
              </div>
            </form>
          </div>
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
          name: 'Корзина',
          url: '#',
          current: true
        }
      ],
    }
  },
}
</script>

<style lang="scss">
.basket {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media(max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  &__block-name {
    font-size: 44px;
    font-weight: 400;
    line-height: 105%;
    margin-bottom: 50px;
    @media(max-width: 1023px) {
      font-size: 33px;
      margin-bottom: 35px;
    }
    @media(max-width: 767px) {
      font-size: 22px;
      margin-bottom: 15px;
    }
  }
}
.basket-basket {

  &__content {
    display: grid;
    grid-template-columns: 150px auto auto auto auto;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
    padding: 20px 40px;
    margin-bottom: 20px;
  }
  &__img {
    border-radius: 10px;
    overflow: hidden;
    max-width: 150px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__finish {
    display: flex;
    margin-left: auto;
    justify-content: flex-end;

  }
}

.basket-order {
  background-color: #f5f5f5;
  padding: 60px;
  &__name {
    margin-bottom: 30px;
  }
  &__input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
    .block-input {
      margin-bottom: 0;
    }
  }
  &__textarea {
    textarea {
      width: 100%;
      resize: none;
      width: 100%;
      border: solid 1px #C9C9C9;
      border-radius: 6px;
      font-size: 14px;
      position: relative;
      background-color: transparent;
      padding: 14px 25px;
    }
  }
  &__footer {
    display: flex;
    align-items: flex-end;
    margin-top: 120px;
  }
  &__finish {
    white-space: nowrap;
    margin-right: 45px;
  }
}
</style>