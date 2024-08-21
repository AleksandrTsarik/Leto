<template>
  <NuxtLink v-if="type === 'link-more'" to="#" class="link-more">
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 7L9 1M15 7L9 13M15 7L1 7" stroke="white" stroke-width="1.97143" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
  
  }
}
</script>

<style lang="scss" scoped>
.link-more {
  display: block;
  background-color: #A0B846;
  width: 45px;
  height: 45px;
  flex: 0 0 45px;
  border-radius: 50%;
  position: relative;
  transition: 0.3s;
  border: solid 1px transparent;
  @media(min-width: 767px) {
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
  }
  &:hover {
    @media(min-width: 1023px) {
      //background-color: lighten(#A0B846, 12%);
      box-shadow: 0 0 5px rgba(#000, 0.5) inset;
    }
  }
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>