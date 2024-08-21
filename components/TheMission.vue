<template>
  <div class="mission">
    <div class="mission__title title">{{ mission.title }}</div>
    <div class="mission__text t-26" v-html="mission.text"></div>
    <div class="mission__img r-20">
      <img :src="mission.img" alt="..." loading="lazy">
    </div>
  </div>
</template>

<script>
export default {
  props: {
		mission: {
			type: Object,
			default: {}
		},
	}
}
</script>

<style lang="scss">
.mission {
  &__title {
    max-width: 45%;
    @media(max-width: 1023px) {
      max-width: 80%;
    } 
    @media(max-width: 767px) {
      max-width: 100%;
    } 
  }
  &__text {
    max-width: 60%;
    margin-bottom: 25px;
    @media(max-width: 1023px) {
      max-width: 100%;
    } 
  }
  &__img {
    text-align: center;
  }
}
</style>