<template>
  <UITheSwiper
    :slider="slider"
    :options="optionsSlider" 
  />
</template>

<script>
export default {
  data() {
    return {
      slider: [],
      optionsSlider: {
        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: false,
        spaceBetween: 10,
        pagination: false,
        navigation: true,
        modules: "modules",
        mousewheel: true,
        breakpoints: {

          1023: {
            slidesPerView: 3,
          },
          575: {
            slidesPerView: 2,
          }
        },
        navigation: true
      }
    }
  },
  async mounted() {
    const sliders = []
    sliders.push(
      {
        img: (await import("@/assets/img/slider2/item1.jpeg")).default,
        name : 'Детские комнаты',
        link: true,
        url: '/'
      },
      {
        img: (await import("@/assets/img/slider2/item2.jpeg")).default,
        name : 'Столы и стулья',
        link: true,
        url: '#'
      },
      {
        img: (await import("@/assets/img/slider2/item3.jpeg")).default,
        name : 'Детские кровати',
        link: true,
        url: '#'
      },
      {
        img: (await import("@/assets/img/slider2/item1.jpeg")).default,
        name : 'Детские комнаты',
        link: true,
        url: '#'
      },
      {
        img: (await import("@/assets/img/slider2/item2.jpeg")).default,
        name : 'Столы и стулья',
        link: true,
        url: '#'
      },
      {
        img: (await import("@/assets/img/slider2/item3.jpeg")).default,
        name : 'Детские кровати',
        link: true,
        url: '#'
      },
    )
    this.slider = sliders
	},
}
</script>

<style lang="scss">

</style>