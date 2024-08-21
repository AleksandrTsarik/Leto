<template>
  <div class="about-project-block">
    <div class="about-project-block__item r-20">
      <img src="@/assets/img/about-project/item1.jpeg" alt="">
    </div>
    <div class="about-project-block__item r-20">
      <img src="@/assets/img/about-project/item2.jpeg" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.about-project-block {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  @media(max-width: 767px) {
    grid-template-columns: 1fr;
  }
  &__item {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:first-child {
      @media(max-width: 767px) {
        display: none
      }
    }
  }
}
</style>