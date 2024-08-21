<template>
    <teleport to="body">
        <div class="modal">
            <div class="modal__overlay"></div>
            <div class="modal__wrap modal__wrap-callback r-20">
                <form action="">
                    <div class="modal__form modal-callback">
                        <div class="modal__close" @click="closeModal"></div>
                        <div class="modal__title">Свяжитесь с нами</div>
                        <div class="modal-callback__head">
                            <div class="modal-callback__phone t-24">+7 (495) 662-78-18</div>
                            <div class="modal-callback__network">
                                <TheNetwork :type="'telegram'"/>
                                <TheNetwork :type="'email'"/>
                            </div>
                        </div>
                        <div class="modal-callback__body">
                            <template v-if="text">
                                {{ text }}
                            </template>
                            <template v-else>
                                Отправьте дизайн-проект, и наш менеджер рассчитает стоимость для каждой позиции, чтобы
                                вы
                                могли оценить расходы и принять взвешенное решение
                            </template>
                            <div class="modal-callback__input">
                                <UITheInput v-model:value="name" type="text" placeholder="Введите ваше имя"/>
                                <UITheInput v-model:value="email" type="text" placeholder="Введите ваш email"/>
                                <UITheInput v-model:value="phone" type="tel" placeholder="Введите ваш телефон"/>
                                <UITheInput v-if="showAddress" v-model:value="address" type="text"
                                            placeholder="Адрес объекта (для объектов за МКАД)"/>
                                <UITheInput v-model:value="message" type="textarea" placeholder="Сообщение"/>
                                <UITheInput @select-file="file = $event" :type="'file'" :name="'Прикрепить файл'"/>
                            </div>
                        </div>
                        <div class="modal-callback__btn">
                            <UITheButton @click.prevent="send" :type="'submit'" :label="'Отправить'" class="btn-dark"/>
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
        showAddress: {
            type: Boolean,
            default: true
        },
        text: {
            type: String,
            default: null
        }
    },

    data() {
        return {
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
            file: []
        }
    },

    methods: {
        closeModal() {
            this.$emit('close', false)
        },

        send() {
            if (!this.name || !this.email || !this.phone || !this.address || !this.message) {
                return;
            }

            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("email", this.email);
            formData.append("phone", this.phone);
            formData.append("address", this.address);
            formData.append("message", this.message);
            formData.append("title", this.text || "");
            this.file.forEach(f => formData.append("file[]", f));

            navigator.sendBeacon("/send.php", formData);
            alert("Заявка отправлена");
            this.closeModal();
        }
    },
}
</script>

<style lang="scss">
.modal {
  &__overlay {
    background-color: rgba(#000, 0.5);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
  }

  &__close {
    display: flex;
    width: 22px;
    height: 22px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #EAEEF5;
    padding: 20px;
    border-radius: 15px;

    cursor: pointer;

    &:after, &:before {
      content: '';
      display: block;
      width: 50%;
      height: 2.5px;
      background-color: #C1C1C1;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      transform: translateX(-50%) rotate(45deg);
    }

    &::before {
      transform: translateX(-50%) rotate(-45deg);
    }
  }

  &__wrap {
    background-color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 9999;
  }

  &__wrap-callback {
    padding: 60px;
    max-width: 50vw;
    @media(max-height: 760px) {
      overflow-y: auto;
      height: 100%;
    }
    @media(max-width: 767px) {
      padding: 60px 15px;
      max-width: 335px;
    }
  }

  &__title {
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 25px;
    @media(max-width: 767px) {
      text-align: center;
    }
  }

  &__input {
    margin-bottom: 20px;
  }

  &__btn {
    button {
      width: 100%;
      padding: 16px 0px;
    }
  }
}

.modal-callback {
  width: 100%;

  &__btn {
    margin-top: 20px;
  }

  button {
    width: 100%;
  }

  .block-textarea {
    textarea {
      resize: none;
      width: 100%;
      border: solid 1px #C1C1C1;
      border-radius: 10px;
      height: 70px;
      padding: 15px 25px;
    }
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    margin-bottom: 15px;
  }

  &__phone {
  }

  &__input {
    margin-top: 25px;
  }

  &__body {
    // @media(max-height: 760px) {
    //   overflow-y: auto;
    //   height: 500px;
    // }
  }

  &__network {
    display: flex;
    align-items: center;
    a {
      display: block;
      width: 30px;
      height: 30px;
      svg {
        width: 100%;
        height: 100%;
      }
    }

    a + a {
      margin-left: 10px;
    }
  }
}
</style>