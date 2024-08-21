<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__left">
                    <div class="header__logo">
                        <TheNetwork :type="'logo'"/>
                    </div>
                </div>
                <div class="header__right"  v-click-outside="hide">
                    <UITheButton @click.prevent="isModalCallBack = true" :label="'Заказать мебель'"
                                 class="btn-light header__delivery header__delivery--desktop"/>
                    <!--          <button class="header__delivery header__delivery&#45;&#45;mobile">-->
                    <!--            <TheSvg :type="'phone-big'" />-->
                    <!--          </button>-->
                    <!--          <button class="header__basket" @click="$router.push('/order/basket')" >-->
                    <!--            <TheSvg :type="'basket'" />-->
                    <!--          </button>-->
                    <!--          <button class="header__user" @click="$router.push('/profile/profile')">-->
                    <!--            <TheSvg :type="'user'" />-->
                    <!--          </button>-->
                    <button class="header__burger" @click="menuOpen" :class="{'is-open': isOpenMenu}">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div class="header-drop-menu" :class="{'is-open': isOpenMenu}">
                        <ul>
                            <li>
                                <NuxtLink to="/">Главная</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/designer">Дизайнерам</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/catalog">Каталог</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog">Наши проекты</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact">Контакты</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div>
    </div>
    <the-call-back v-if="isModalCallBack" @close="closeModal"/>

</template>

<script>
import TheCallBack from "~/components/modal/TheCallBack.vue";

export default {
    components: {TheCallBack},
    data() {
        return {
            isOpenMenu: false,
            isModalCallBack: false,
        }
    },
    methods: {
        closeModal() {
            this.isModalCallBack = false
            this.isModalVideo = false
        },

        menuOpen() {
            if (!this.isOpenMenu) document.body.classList.add('menu-open')
            else document.body.classList.remove('menu-open')
            this.isOpenMenu = !this.isOpenMenu
        },
        hide() {
            this.isOpenMenu = false
            document.body.classList.remove('menu-open');
        }
    },

    watch: {
        $route() {
            this.hide();
        }
    }
}
</script>

<style lang="scss">
.header {
  padding: 40px 0;

  &__logo {
    svg {
      @media(max-width: 767px) {
        max-width: 105px;
      }
    }
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__left {
    @media(max-width: 767px) {
      flex: 0 0 105px;
      max-width: 105px;
    }
  }

  &__right {
    display: grid;
    grid-template-columns: 300px 32px 32px 1fr;
    justify-items: end;
    justify-content: space-between;
    align-items: center;
    @media(max-width: 767px) {
      grid-template-columns: 250px auto auto 1fr;
      button {
        margin-left: 20px;
        @media(max-width: 575px) {
          margin-left: 0;
        }
      }
    }
    @media(max-width: 575px) {
      grid-template-columns: 1fr;
    }

    svg {
      @media(max-width: 767px) {
        width: 25px;
        height: 25px;
      }

    }
  }

  &__delivery {
    margin-right: 90px;
    @media(max-width: 767px) {
      margin-right: 0;
    }

    &--desktop {
      @media(max-width: 767px) {
        display: none !important;
      }
    }

    &--mobile {
      display: none;
      @media(max-width: 767px) {
        display: block;
        svg {
          height: 25px;
          width: 25px;
        }
      }
    }
  }

  &__basket {
    margin-right: 30px;
    @media(max-width: 767px) {
      margin-right: 0;
    }
  }

  &__burger {
    margin-left: 55px;
    height: 30px;
    width: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: 0.3s;
    margin-left: auto;
    position: relative;
    // @media(max-width: 767px) {
    //   margin-left: 0;
    // }

    span {
      display: block;
      background-color: #A0B846;
      height: 6px;
      width: 100%;
      border-radius: 30px;
      transition: 0.3s;
    }

    &.is-open {
      span {
        position: absolute;
        left: 0;
        top: 50%;

        &:nth-child(2) {
          display: none;
        }

        &:nth-child(1) {
          transform: rotate(45deg) translateY(-50%);
          left: -3px;
        }

        &:nth-child(3) {
          transform: rotate(-45deg) translateY(-50%);
        }
      }
    }
  }
}

.header-drop-menu {
  overflow-y: auto;
  background-color: #f5f5f5;
  border-radius: 15px 0 0 15px;
  position: fixed;
  z-index: 999;
  right: 0;
  top: 130px;
  padding: 25px 20px;
  transform: translateX(100%);
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  min-width: 250px;
  height: 100vh;
  border: solid 1px #f5f5ff;

  &.is-open {
    opacity: 1;
    transform: translateX(0);
    visibility: visible;
  }

  li {
    font-size: 18px;
    margin-bottom: 5px;
    transition: 0.3s;
    border-radius: 7px;

    &:hover {
      @media(min-width: 1023px) {
        background-color: #dfe7f6;
      }
    }

    a {
      color: #232323;
      display: block;
      padding: 10px;
    }
  }
}
</style>