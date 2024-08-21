<template>
  <main class="main">
    <div class="container">
      <TheBreadCrumbs :breadCrumbs="breadCrumbs" />
      <div class="profile">
        <div class="profile__title title">Мой профиль</div>
        <div class="profile__inner">
          <div class="profile__block r-20 bg-grey">
            <div class="profile__row">
              <div class="profile__item">Имя</div>
              <div class="profile__strip"></div>
              <div class="profile__item">Василий</div>
            </div>
            <div class="profile__row">
              <div class="profile__item">Фамилия</div>
              <div class="profile__strip"></div>
              <div class="profile__item">Смирнов</div>
            </div>
            <div class="profile__row">
              <div class="profile__item">Телефон</div>
              <div class="profile__strip"></div>
              <div class="profile__item">+7(978) 203-23-04</div>
            </div>
            <div class="profile__row">
              <div class="profile__item">E-mail</div>
              <div class="profile__strip"></div>
              <div class="profile__item">smir@mail.ru</div>
            </div>
            <div class="profile__row">
              <div class="profile__item">Адрес</div>
              <div class="profile__strip"></div>
              <div class="profile__item">г. Рязань, Рязанская область,РФ</div>
            </div>
          </div>
          <div class="profile__btns">
            <UITheButton 
              :label="'РЕДАКТИРОВАТЬ ПРОФИЛЬ'"
              class="btn-dark"
            />
            <UITheButton 
              :label="'СМЕНИТЬ ПАРОЛЬ'"
              class="btn-light"
              @click="modalPassword=true" 
            />
          </div>
        </div>
      </div>
    </div>
    <div>
    </div>
    <the-modal-change-password v-if="modalPassword" @close="closeModal" />
  </main>
</template>

<script>
import TheModalChangePassword from '~/components/modal/TheModalChangePassword.vue'
export default {
  components: {
    TheModalChangePassword
  },  
  data() {
    return {
      modalPassword: false,
      breadCrumbs: [
        {
          name: 'Мой профиль',
          url: '#',
          current: true
        }
      ],
    }
  },
  methods: {
    closeModal() {
      this.modalPassword = false
    }
  }
}
</script>

<style lang="scss">
.profile {
  margin-bottom: 105px;
  @media(max-width: 767px) {
    margin-bottom: 40px;
  }
  &__title {
    margin-bottom: 40px;
    @media(max-width: 1023px) {
      margin-bottom: 20px;
    }
  }
  &__block {
    padding: 40px 50px;
    max-width: 40%;
    @media(max-width: 1279px) {
      max-width: 60%;
    }
    @media(max-width: 1023px) {
      max-width: 100%;
    }
    @media(max-width: 767px) {
      background: none;
      border-radius: 0;
      padding: 0;
    }
  }
  &__row {
    display: flex;
    text-align: left;
    @media(max-width: 767px) {
      align-items: flex-end;
      margin-bottom: 10px;
    }
    @media(max-width: 359px) {
      justify-content: space-between;
    }
  }
  &__item {
    position: relative;
    &:last-child {
      flex: 0 0 65%;
      @media(max-width: 575px) {
        flex: 0 0 70%;
      }
      @media(max-width: 359px) {
        flex: 0 0 auto;
        text-align: right;
      }
    }
  }
  &__strip {
    flex-grow: 1;
    border-bottom: dotted 1px;
    margin-bottom: 5px;
  }
  &__btns {
    margin-top: 30px;
    @media(max-width: 575px) {
      button {
        display: block;
        width: 100%;
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    button + button {
      margin-left: 15px;
      @media(max-width: 575px) {
        margin-left: 0;
      }
    }
  }
}
</style>