<template>
  <teleport to="body">
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__wrap r-20">
        <form action="">
          <div class="modal__form">
            <div class="modal__close" @click="closeModal"></div>
            <div class="modal__title">Смена пароля</div>
            <div class="modal__input">
              <u-i-the-input
                :type="'text'"
                :placeholder="'Текущий пароль'"
                :modelValue="''"
              />
              <u-i-the-input
                :type="'text'"
                :placeholder="'Новый пароль'"
                :modelValue="''"
              />
              <u-i-the-input
                :type="'text'"
                :placeholder="'Повторить новый пароль'"
                :modelValue="''"
              />
            </div>
            <div class="modal__btn">
              <u-i-the-button 
                :label="'ПОДТВЕРДИТЬ СМЕНУ ПАРОЛЯ'"
                class="btn-dark"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    type: String,
    default: ''
  },
  methods: {
    closeModal() {
      this.$emit('close', false)
    }
  },
}
</script>

<style lang="scss">
// .modal {
//   &__overlay {
//     background-color: rgba(#000, 0.5);
//     position: fixed;
//     left: 0;
//     right: 0;
//     top: 0;
//     bottom: 0;
//   }
//   &__close {
//     display: block;
//     width: 22px;
//     height: 22px;
//     position: absolute;
//     right: 15px;
//     top: 15px;
//     cursor: pointer;
//     &:after, &:before {
//       content: '';
//       display: block;
//       width: 110%;
//       height: 2.5px;
//       background-color: #C1C1C1;
//       position: absolute;
//       left: 0;
//       top: 9px;
//     }
//     &::after {
//       transform: rotate(45deg);
//     }
//     &::before {
//       transform: rotate(-45deg);
//     }
//   }
//   &__wrap {
//     background-color: #fff;
//     padding: 60px;
//     position: fixed;
//     left: 50%;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     max-width: 435px;
//     width: 100%;
//     @media(max-width: 767px) {
//       padding: 60px 15px;
//       max-width: 335px;
//     }
//   }
//   &__title {
//     font-size: 30px;
//     font-weight: 300;
//     margin-bottom: 25px;
//     @media(max-width: 767px){
//       text-align: center;
//     }
//   }
//   &__input {
//     margin-bottom: 20px;
//   }
//   &__btn {
//     button {
//       width: 100%;
//       padding: 16px 0px;
//     }
//   }
// }
</style>