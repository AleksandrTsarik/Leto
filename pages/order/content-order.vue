<template>
  <main class="main">
    <div class="container"><TheBreadCrumbs :breadCrumbs="breadCrumbs" /></div>
    <div class="container">
      <div class="content-order">
        <div class="content-order__title title">Заказ №10234</div>
      <div class="content-order-info">
        <div class="content-order-info__item">
          <div class="content-order-info__delivery t-32">
          <span>Сегодня 17:35</span>
            Доставка: Служба доставки
          </div>
          <div class="content-order-info__user">
            <div class="content-order-info__user-name t-18">Василий Смирнов</div>
            <div class="content-order-info__user-location t-18">г. Рязань, Рязанская область,РФ</div>
          </div>
          <div class="content-order-info__payment t-32">
            Оплата: Наличные
            <span>Василий Смирнов</span>
          </div>
        </div>
        <div class="content-order-info__item">
          <UITheInput :type="'textarea'" :placeholder="'Комментарий к заказу'" />
        </div>
        
      </div>
      <div class="content-order-table content-order-table--desktop">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Количество</th>
              <th>Итого</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Лесная фея</td>
              <td>335 000 ₽ х 1 шт. </td>
              <td>345 000 ₽</td>
            </tr>
            <tr>
              <td>Муми-троли</td>
              <td>335 000 ₽ х 1 шт. </td>
              <td>345 000 ₽</td>
            </tr>
            <tr>
              <td><b>Итоговая стоимость</b></td>
              <td></td>
              <td><b>695 000 ₽</b></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="content-order-table content-order-table--mobile">
        <table>
          <tbody>
            <tr>
              <td>Лесная фея</td>
              <td>335 000 ₽ х 1 шт. </td>
            </tr>
            <tr>
              <td>Муми-троли</td>
              <td>335 000 ₽ х 1 шт. </td>
            </tr>
            <tr>
              <td><b>Итоговая стоимость</b></td>
              <td><b>695 000 ₽</b></td>
            </tr>
          </tbody>
        </table>
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
        name: 'Содержание заказа',
        url: '#',
        current: true
      }
    ],
  }
}
}
</script>

<style lang="scss">
.content-order {
  margin-bottom: 40px;
}
.content-order-info {
  margin-bottom: 80px;
  display: flex;
  align-items: flex-end;
  @media(max-width: 1023px) {
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  &__item {
    @media(max-width: 1023px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
    &:last-child {
      flex: 0 0 auto;
      max-width: 50%;
      width: 100%;
      @media(max-width: 1023px) {
        max-width: 100%;
        margin-top: 20px;
      }
    }
  }
  &__delivery {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    span {
      color: #8F8F8F;
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
    }
  }
  &__user {
    margin-bottom: 40px;
  }
  &__payment {
    display: flex;
    flex-direction: column;
    line-height: 100%;
    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 100%;
      margin-top: 20px;
    }
  }
  .block-textarea {
    width: 100%;
    textarea{
      width: 100%;
      min-height: 100px;
      position: relative;
      border: solid 1px #C1C1C1;
      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      @media(max-width: 1023px) {
        resize: none;
      }
      &::-webkit-resizer {

        // width: 0; 
        // height: 0;
        // border-bottom: 100px solid #CDE5E1;
        // border-left: 100px solid transparent;
        // padding: 10px;
      }
    }
  }
 
}
.content-order-table {
  display: inline-block;
  &--desktop {
    @media(max-width: 767px) {
      display: none;
    }
  }
  &--mobile {
    display: none;
    @media(max-width: 767px) {
      display: block;
    }
  }
  table {
    border-collapse: collapse;
    background-color: #f5f5f5;
    border-radius: 15px;
    padding: 50px;
    display: inline-block;
    @media(max-width: 767px) {
      background-color: transparent;
      border-radius: 0;
      padding: 0;
      width: 100%;
      display: inline-table;
    }
    tr {
      font-size: 18px;
      padding: 5px;
      @media(max-width: 767px) {
        font-size: 15px;
      }
    }
    td {
      padding: 5px 10px;
    }
    thead {
      th {
        color: #7D7D7D;
        border-bottom: solid 1px #D9D9D9;
      }
    }
    tbody {
      @media(max-width: 767px) {
        width: 100%;
      }
      tr {
        border-bottom: solid 1px #D9D9D9;
        &:last-child {
          td {
            &:first-child {
              border-right: transparent;
            }
            &:last-child {
              border-left: solid 1px #D9D9D9;
            }
          }
        }
        &:first-child {
          @media(max-width: 767px) {
            border-top: solid 1px #D9D9D9;
          }
        }
        td {
          border-right: solid 1px #D9D9D9;
          &:last-child {
            border-right: transparent;
          }
        }
      }
    }
  }
}
</style>