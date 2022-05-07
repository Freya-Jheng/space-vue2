<template>
  <div class="home">
    <Navbar />
    <div class="wrapper">
      <div class="home__content">
        <div class="home__content__top">
          <span class="slogan">SO, YOU WANT TO TRAVEL TO</span>
          <span class="title">SPACE</span>
        </div>
        <p class="home__content__bottom">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="home__explore">EXPLORE</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/mixins.scss";
.home {
  width: 100%;
  min-height: 667px;
  background-image: url(@/assets/home/background-home-mobile.jpg);
  background-size: cover;
  position: relative;
  color: var(--main-font-color);
  font-family: "Oswald";
  background-repeat: no-repeat;
  @include pad {
    min-height: 800px;
    background-image: url(@/assets/home/background-home-tablet.jpg);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 100% 100%;
  }
  .wrapper {
    @include flex (columns, center, center);
  }
  &__content {
    position: absolute;
    height: 276px;
    top: 112px;
    margin: 0 24px;
    font-weight: 300;
    color: var(--sub-font-color);
    @include flex(column, space-between, center);
    @include pad {
      top: 250px;
    }
    &__top {
      @include flex(column, space-between, center);
      gap: 35px;
      .slogan {
        font-size: 16px;
        letter-spacing: 2.7px;
        @include pad {
          font-size: 20px;
        }
      }
      .title {
        font-family: "Bellefair";
        font-weight: 300;
        font-size: 80px;
        color: var(--main-font-color);
        @include pad {
          font-size: 150px;
        }
      }
    }
    &__bottom {
      margin-top: 30px;
      font-size: 15px;
      text-align: center;
      line-height: 25px;
      font-family: "Barlow";
      color: var(--sub-font-color);
      @include pad {
        margin-top: 40px;
        font-size: 20px;
        line-height: 35px;
        width: 65%;
      }
    }
  }
  &__explore {
    position: absolute;
    top: 469px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: var(--main-font-color);
    color: var(--explore-color);
    font-size: 20px;
    letter-spacing: 1.25px;
    text-align: center;
    line-height: 150px;
    cursor: pointer;
    @include pad {
      width: 242px;
      height: 242px;
      top: 850px;
      font-size: 32px;
      right: 50%;
      transform: translateX(50%);
      line-height: 242px;
    }
  }
}
</style>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>

