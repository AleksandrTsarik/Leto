<template>
  <div class="tabs">
    <ol class="tabs__header">
      <li
        v-for="(tab, i) in tabs" 
        :key="i"
        class="tab" 
        :class="{ active: tab.value == activeTab }"
        @click="activeTab = tab.value" 
      >
        {{ tab.title }}
        <span class="tab-arrow"><TheSvg :type="'arrow'" /></span>
      </li>
    </ol>
    <div class="tabs__content">
      <slot name="content" :active="activeTab" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  tabs: {type: Array, default: [], require: true}
})
const activeTab = ref(props.tabs[0].value)

function nextTab() {
    let i = props.tabs.findIndex(el => el.value === activeTab.value);
    i++;
    if(i === props.tabs.length) i = 0;
    activeTab.value = props.tabs[i].value;
}
defineExpose({
    nextTab
});
</script>

<style lang="scss">
.tab {
  cursor: pointer;
  &.active {
    background-color: #A0B846;
    color: #fff;
    @media(max-width: 1023px) {
      background-color: #F5F5F5;
      color: #3C3A3A;
    } 
    @media(max-width: 767px) {
      background-color: #F5F5F5;
      color: #3C3A3A;
    }
    .tab-arrow {
      svg {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }

}
.tabs {
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  gap: 20px;
  @media(max-width: 1023px) {
    grid-template-columns: 1fr;
  }
  &__header {
    flex-wrap: wrap;
    list-style-type: none; 
    counter-reset: num;
    li {
      flex: 0 0 100%;
      max-width: 100%;
      position: relative;	
      background-color: #EAEEF5;
      border-radius: 10px;
      font-weight: 400;
      padding: 0 25px;
      margin-left: 95px;
      height: 85px;
      line-height: 85px;
      font-size: 24px;
      margin-bottom: 10px;
      @media(max-width: 767px) {
        font-size: 14px;
        line-height: 44px;
        height: 44px;
        margin-left: 0;
        padding: 0 15px;
      }                                                                                                                                                                              
      span {
        position: absolute;
        right: 25px;
        top: 50%;
        transform: translateY(-50%);
        align-content: center;
        line-height: 45px;
        display: block;
        width: 45px;
        height: 45px;
        background-color: #A0B846;
        border-radius: 50%;
        @media(max-width: 767px) {
          width: 40px;
          height: 40px;
        }
        svg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        svg path {
          stroke: #fff;
        }
      }
      &:before {
        content: "0." counter(num);
        counter-increment: num;
        display: inline-block;
        position: absolute;
        top: 0;
        left: -95px; 
        width: 85px;
        text-align: center;
        line-height: 85px;
        height: 100%;
        //font-family: 'Inter';
        background-color: #A0B846;
        font-size: 32px;
        font-weight: 600;
        border-radius: 10px;
        @media(max-width: 1023px) {
          background-color: #F5F5F5;
        }
        @media(max-width: 767px) {
          font-size: 14px;
          line-height: 24px;
          left: 0;
          background-color: #EAEEF5;
          background-color: transparent;
          color: #3C3A3A;
          position: relative;
          left: auto;
          top: auto;
          width: 24px;
          margin-right: 10px;
          border-radius: 10px 0 0 10px;
        }
      }

    }
  }
  &__content {}
}
</style>