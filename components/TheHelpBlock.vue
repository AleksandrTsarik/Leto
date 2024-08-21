<template>
    <div class="help-block">
        <div class="help-block__item">
            <div v-if="helpChoice.img" class="help-block__img r-20">
                <img :src="helpChoice.img" alt="">
            </div>
            <div v-else-if="helpChoice.video" class="help-block__iframe iframe r-20">
                <iframe src="" frameborder="0"></iframe>
                <span class="video-icon"></span>
            </div>
        </div>
        <div class="help-block__item bg-grey r-20">
            <div v-if="helpChoice.title" class="help-block__title">{{ helpChoice.title }}</div>
            <div class="help-block__description t-26">{{ helpChoice.description }}</div>
            <div class="help-block__btn">
                <UITheButton v-if="helpChoice.btn" :label="helpChoice.btn" class="btn-dark"
                             @click.prevent="$emit('callback')">{{
                        helpChoice.btn
                    }}
                </UITheButton>
            </div>
            <div v-if="helpChoice.linkName" class="help-block__link">
                <NuxtLink :to="helpChoice.linkUrl">{{ helpChoice.linkName }}
                    <TheSvg :type="'arrow'"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        helpChoice: {
            type: Object,
            defaul: {}
        }
    }
}
</script>

<style lang="scss">
.help-block {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  @media(max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;

  &__iframe {
    height: 100%;
    background-image: url('@/assets/img/catalog/item2.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 50%;
  }

  &__img {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__item {
    height: 100%;

    &:last-child {
      padding: 70px 50px;
      display: flex;
      flex-direction: column;
      @media(max-width: 1023px) {
        padding: 50px;
      }
      @media(max-width: 767px) {
        padding: 0;
        border-radius: 0;
      }
    }
  }

  &__description {
    margin-bottom: 20px;
    @media(max-width: 767px) {
      background-color: #F5F5F5;
      padding: 35px 25px;
      border-radius: 15px;
    }
  }

  &__btn {
    margin-top: auto;
    @media(max-width: 767px) {
      button {
        width: 100%;
      }
    }
  }
}
</style>