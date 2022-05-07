<template>
  <ul class="tech__content__navTab">
    <router-link 
    v-for="tab in navTabs"
    :key="tab.id"
    class="tech__content__navTab__item"
    :to="{name: 'technology',params: {id: tab.id}}" >
      <li class="tech__content__navTab__item-li">
        {{tab.id+1}}
      </li>
    </router-link>
  </ul>
</template>

<script setup>
import { reactive } from 'vue'
let id = 0
const navTabs = reactive([
  {
    id: id ++,
  },
  {
    id: id ++,
  },
  {
    id: id ++,
  }
])
</script>


<style scoped lang='scss'>
@import "@/styles/mixins.scss";
 .tech__content__navTab {
   color: var(--main-font-color);
   width: 50%;
   @include flex (row, space-around, center);
   font-family: 'Bellefair';
   cursor: pointer;
   &__item {
     li {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid var(--sub-font-color);
      color: var(--main-font-color);
      text-align: center;
      line-height: 40px;
      &:hover {
        background-color: var(--main-font-color);
        color: var(--item-background-color);
      }
     }
   }
 }
</style>