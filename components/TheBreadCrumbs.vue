<template>
  <div class="bread-crumbs">
    <div class="bread-crumbs__links">
      <NuxtLink to="/">Главная /</NuxtLink>
      <div v-for="(item , i) in breadCrumbs" :key="i">
        <NuxtLink v-if="!item.current" :to="item.url"> {{ item.name }} /</NuxtLink>
        <span v-else-if="item.current"> {{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breadCrumbs: {
      type: Array,
      dafault: {}
    }

  }
}
</script>

<style lang="scss" scoped>
  .bread-crumbs {
    font-size: 16px;
    color: #212529;
    margin-bottom: 50px;
    a {
      color: #212529;
    }
    &__links {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      div {
        padding-left: 0.3em;
      }
    }
  }
</style>