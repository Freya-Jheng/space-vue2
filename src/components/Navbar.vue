<template>
  <header class="header">
    <div class="header__top">
      <div class="header__top__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          class="header__top__logo--image"
        >
          <g fill="none" fill-rule="evenodd">
            <circle cx="20" cy="20" r="20" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M20 -3.5c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <input
        type="checkbox"
        class="header__top__input"
        name="header__top__input"
        id="header__top__input"
      />
      <label for="header__top__input" class="header__top__label">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="21"
          class="hamburger"
        >
          <g fill="#D0D6F9" fill-rule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          class="close"
        >
          <g fill="#D0D6F9" fill-rule="evenodd">
            <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
            <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
          </g>
        </svg>
      </label>
      <ul class="header__nav-list">
        <li v-for="item in items" :key="item.id" class="header__nav-list--item">
          <router-link :to="item.path">
            <span class="item-num">0{{ item.id }}</span
            >{{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
let id = 0;
const items = ref([
  {
    id: id++,
    title: "HOME",
    path: "/home",
  },
  {
    id: id++,
    title: "DESTINATION",
    path: "/destination/0",
  },
  {
    id: id++,
    title: "CREW",
    path: "/crew/0",
  },
  {
    id: id++,
    title: "TECHNOLOGY",
    path: "/technology/0",
  },
]);
</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";
.header {
  position: fixed;
  z-index: 20;
  width: 100%;
  
  &__top {
    width: 100%;
    height: 100px;
    @include flex(row ,space-between, center);
    @include pad {
      @include flex (row, space-between, center);
    }
    &__logo {
      position: absolute;
      left: 24px;
    }
    &__input {
      opacity: 0;
    }
    &__input:checked ~ ul {
      transform: scale(1, 1);
      transition: transform 0.15s;
      transform-origin: right;
      backdrop-filter: blur(50px);
      @include pad {
        display: none;
      }
    }
    &__input:checked ~ label {
      
      .hamburger {
        display: none;
      }
      .close {
        display: block;
      }
      @include pad {
        display: none;
      }
    }
    &__label {
      position: absolute;
      right: 24px;
      z-index: 10;
      .close {
        display: none;
      }
      @include pad {
        display: none;
      }
    }
  }
  &__nav-list {
    transform: scale(0, 1);
    width: 60%;
    height: 600%;
    padding: 118px 0 0 24px;
    position: absolute;
    top: 0px;
    right: 0;
    @include pad {
      transform: scale(1, 1);
      @include flex (row, space-around, center);
      height: 60px;
      line-height: 60px;
      padding-top: 30px;
      position: unset;
    }
    &--item {
      margin-bottom: 30px;
      font-family: "Oswald";
      font-weight: 300;
      height: 31px;
      line-height: 31px;
      color: var(--main-font-color);
      cursor: pointer;
      span {
        margin-right: 10px;
        font-weight: 500;
        @include pad {
          display: none;
        }
      }
      &:hover {
        border-right: 4px solid var(--main-font-color);
        @include pad {
          border-right: unset;
          border-bottom: 4px solid var(--main-font-color);
        }
      }
    }
  }
}
</style>


