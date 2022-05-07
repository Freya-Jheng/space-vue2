<template>
  <ul class="destination__top__navTab">
    <li
      v-for="tab in navTabs"
      :key="tab.id"
      class="destination__top__navTab__item"
    >
      <router-link :to="{ name: 'destination',params: {
        id: tab.id
      }}">
        <span>{{ tab.item }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import {ref} from 'vue'
let id = 0
const navTabs = ref([
  {
    id: id++,
    item: "MOON",
  },
  {
    id: id++,
    item: "MARS",
  },
  {
    id: id++,
    item: "EUROPA",
  },
  {
    id: id++,
    item: "TITAN",
  },
]);
</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";

.destination__top__navTab {
  @include flex(row, center, center);
  gap: 10px;
  margin-bottom: 26px;
  &__item {
    cursor: pointer;

    span {
      font-family: "Barlow Condensed";
      color: var(--sub-font-color);
      letter-spacing: 2.3px;
      font-size: 14px;
      &:hover {
        border-bottom: 3px solid var(--main-font-color);
        color: var(--main-font-color);
        font-size: 16px;
      }
    }
  }
}
</style>