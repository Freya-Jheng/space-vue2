<script setup>
import { RouterView, useRoute } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang='scss'>
@import '@/styles/main.scss';
@import '@/styles/mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100&family=Be+Vietnam+Pro:wght@200;700;800;900&family=Bellefair&family=Merriweather:wght@300;400&family=Neonderthaw&family=Noto+Sans&family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Oswald:wght@200;300;400;500;600&family=Playfair+Display:wght@400;500&display=swap');


#app {
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: 1240px;
  @include pad {
    height: 1240px;
  }
  font-weight: normal;
}


</style>
