<template>
    <div class="block-stiky">
        <div class="block-stiky__item">

            <div class="blog-wrap">
                <div class="post-block">
                    <ThePost :post="blog"/>
                    <!--          <ThePagination class="blog-top__pagination" />-->
                </div>
            </div>
        </div>
        <div class="block-stiky__item">
            <div class="block-stiky__wrap">
                <div class="block-stiky__content block-stiky-content">
                    <div class="block-stiky-content__title t-24">Подписывайтесь на нас</div>
                    <div class="block-stiky-content__network">
                        <TheNetwork :type="'telegram'"/>
                        <TheNetwork :type="'vk'"/>
                        <TheNetwork :type="'pin'"/>
                        <TheNetwork :type="'be'"/>
                        <TheNetwork :type="'dealer'"/>
                    </div>
<!--                    <div class="block-stiky-content__text t-18">-->
<!--                        Работая с 2006 года мы реализовали множество проектов, некоторые из них опубликованы здесь. Вы-->
<!--                        можете с ними ознакомиться и увидеть уровень реализации.-->
<!--                    </div>-->
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        blog: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style lang="scss">
.block-stiky {
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 125px;
  @media(max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  &__item {
    position: relative;

    &:first-child {
      @media(max-width: 1023px) {
        order: 2;
      }
    }

    &:last-child {
      @media(max-width: 1023px) {
        order: 1;
      }
    }
  }

  &__wrap {
    height: 100%;
    position: relative;
  }

  &__content {
    position: sticky;
    top: 20px;
    max-width: 300px;
    @media(max-width: 1023px) {
      max-width: 100%;
      position: relative;
      top: auto;
      order: 1;
    }
  }
}

.block-stiky-content {
  &__title {
    margin-bottom: 25px;
    @media(max-width: 1023px) {
      margin-bottom: 15px;
    }
  }

  &__network {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media(max-width: 1023px) {
      margin-bottom: 10px;
    }
    svg {
      width: 100%;
      height: 100%;
    }
    a {
      width: 30px;
      height: 30px;
      display: block;
      margin-left: 20px;
    }
  }

  &__text {
  }
}
</style>