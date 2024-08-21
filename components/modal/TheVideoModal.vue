<template>
    <teleport to="body">
        <div class="modal modal-video">
            <div class="modal__overlay"></div>
            <div class="modal__wrap modal-video__wrap r-20">
                <div class="modal-video__inner">
                    <div class="modal__close modal-video__close" @click="closeModal"></div>
                    <div class="modal__title modal-video__title">Видео о нас</div>
                    <div class="modal-video__iframe">
                        <iframe width="100%" height="100%"
                                :src="src"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
export default {
    props: {
        video: {
            type: String,
            default: null
        }
    },

    data() {
        return {
            src: ""
        }
    },

    mounted() {
        this.src = this.video || "https://www.youtube.com/embed/V-iKLU9EfRk";
    },

    methods: {
        closeModal() {
            this.$emit('close', false)
        }
    },
}
</script>

<style lang="scss">
.modal-video {
  &__wrap {
    padding: 30px 20px;
    max-width: 100vh;
  }

  &__iframe {
    iframe {
      height: 40vw;
    }
  }
}
</style>