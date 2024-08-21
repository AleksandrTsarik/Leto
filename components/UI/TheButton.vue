<template>
  <button
    :type="type"
    class="btn"
  >
    <span v-if="svg" v-html="svg"></span>
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      label: String,
      default: '',
      require: true
    },
    type: {
      type: String,
      dafault: ''
    },
    svg: {
      type: String,
      dafault: ''
    }
  }
}
</script>

<style lang="scss">
  .btn {
    font-size: 16px;
    font-weight: 400;
    border: solid 1px transparent;
    padding: 16px 38px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s;
    display: inline-block;
    &:active {
      @media(max-width: 1023px) {
        background-color: tomato;
      }
    } 
  }
  .btn-dark {
    background-color: #A0B846;
    color: #fff;
    border: solid 1px transparent;
    @media(min-width: 1024px) {
      &:hover {
        background-color: lighten(#A0B846, 10%);
      }
    }
  }
  .btn-light {
    border: solid 1px #A0B846;
    color: #3C3A3A;
    background-color: #fff;
    @media(min-width: 1024px) {
      &:hover {
        background-color: lighten(#A0B846, 40%);
      }
    }
    
  }
</style>