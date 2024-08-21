<template>
  <div class="post">
    <NuxtLink :to="post.url" class="post__item" v-for="(post, i) in post" :key="i">
      <div class="post__info">
        <div class="post__title t-32">{{ post.title }}</div>
        <div class="post__text t-18">{{ post.text }}</div>
      </div>
      <div class="post__img r-20">
        <img :src="post.img" alt="..." />
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss">
.post {
  &__item {
    margin-bottom: 60px;
    display: block;
    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 1023px) {
      margin-bottom: 30px;
    }
  }

  &__title {
    margin-bottom: 25px;
    @media (max-width: 767px) {
      margin-bottom: 10px;
    }
  }

  &__text {
    margin-bottom: 20px;
    @media (max-width: 767px) {
      margin-bottom: 10px;
    }
  }

  &__img {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
