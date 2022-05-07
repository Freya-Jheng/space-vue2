<template>
  <ul class="crew__content__navTab">
    <router-link 
    v-for="tab in navTabs" 
    :key="tab.id" 
    :to="{name: 'crew', params: {id: tab.id}}" 
    class="crew__content__navTab__item">
      <li class="crew__content__navTab__item"></li>
    </router-link>
  </ul>
</template>

<script setup>
import {reactive} from 'vue'
let id = 0
const navTabs = reactive([
  {
    id: id++
  },
  {
    id: id++
  },
  {
    id: id++
  },
  {
    id: id++
  },
])
</script>


<style scoped lang="scss">
@import "@/styles/mixins.scss";
.crew__content__navTab {
  width: 32.5%;
  @include flex (row, space-around, center);
  cursor: pointer;
  &__item {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--border-grey);
    &:hover {
      background-color: var(--main-font-color);
    }
  }
}
</style>