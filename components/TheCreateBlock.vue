<template>
    <div class="create">
        <div class="create__inner">
            <div class="create__item bg-grey r-20">
                <div class="create__text t-26">Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала
                    XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
                    используя Lorem Ipsum для распечатки образцов.
                </div>
                <div class="create__btns">
                    <p class="t-24">У вас уже есть дизайн-проект?</p>
                    <div>
                        <UITheButton @click.prevent="isModalCallBack = true" :label="'Да'" class="btn-dark"/>
                        <UITheButton @click.prevent="isModalCallBack = true" :label="'Нет'" class="btn-light"/>
                    </div>

                </div>
            </div>
            <div class="create__item r-20">
                <img src="@/assets/img/create.jpeg" alt="...">
            </div>
        </div>
        <the-call-back v-if="isModalCallBack" @close="isModalCallBack = false"/>
    </div>
</template>

<script>
import TheCallBack from "~/components/modal/TheCallBack.vue";

export default {
    components: {TheCallBack},

    data() {
        return {
            isModalCallBack: false
        }
    }
}
</script>

<style lang="scss">
.create {
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 20px;
    @media(max-width: 1023px) {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    height: 100%;

    &:first-child {
      padding: 70px 50px;
      display: flex;
      flex-direction: column;
      @media(max-width: 1273px) {
        padding: 50px;
        order: 2;
      }
      @media(max-width: 767px) {
        padding: 0;
      }
    }

    &:last-child {
      @media(max-width: 1273px) {
        order: 1;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__text {
    margin-bottom: 20px;
    @media(max-width: 767px) {
      background-color: #f5f5f5;
      border-radius: 15px;
      padding: 35px 25px;
    }
  }

  &__btns {
    margin-top: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media(max-width: 767px) {
      flex-direction: column;
    }

    button + button {
      margin-left: 15px;
    }

    p {
      max-width: 195px;
      margin-right: 30px;
      @media(max-width: 767px) {
        max-width: 100%;
        margin: 0 auto 10px;
      }
    }
  }
}
</style>