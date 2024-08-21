<template>
  <div class="twin">
    <div class="twin__wrap">
      <div class="twin__item r-20" v-for="(twinblock , i) in twinblock" :key="i">
        <div class="twin__img r-20">
          <img :src="twinblock.img" alt="..." loading="lazy">
        </div>
        <div class="twin__info">
          <div class="twin__title t-24">{{ twinblock.title }}</div>
          <div class="twin__text t-18">{{ twinblock.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    twinblock: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss">
.twin {
  &__wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media(max-width: 1023px) {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }
  &__item {
    background-color: #EAEEF5;
    height: 100%;
  }
  &__img {
    height: 450px;
    @media(max-width: 1023px) {
      height: auto;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__info {
    padding: 20px 45px;
    border-radius: 0 0 20px 20px;
    @media(max-width: 767px) {
      padding: 15px 25px;
    }
  }
  &__title {}
  &__text {}
}

</style>