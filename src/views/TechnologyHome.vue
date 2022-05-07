<template>
  <div class="tech">
    <Navbar />
    <div class="tech__content">
      <div class="tech__content__title">
        <span class="num">03</span>
        <span class="word">SPACE LAUNCH 101</span>
      </div>
      <span class="tech__content__background-image">
        <img
          v-show="currentTech.id === 0"
          src="@/assets/technology/image-launch-vehicle-landscape.jpg"
          alt=""
        />
        <img
          v-show="currentTech.id === 1"
          src="@/assets/technology/image-spaceport-landscape.jpg"
          alt=""
        />
        <img
          v-show="currentTech.id === 2"
          src="@/assets/technology/image-space-capsule-landscape.jpg"
          alt=""
        />
      </span>
      <TechNavTab />
      <div class="tech__content__introduce">
        <h3 class="tech__content__introduce__begin">THE TERMINOLOGY…</h3>
        <h1 class="tech__content__introduce__name">{{currentTech.title}}</h1>
      </div>
      <p class="tech__content__description">
        {{currentTech.description}}
      </p>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import TechNavTab from "@/components/TechNavTab.vue";
import { onUpdated, reactive } from "vue";
import { useRoute } from "vue-router";

let id = 0;
const currentTech = reactive([
  {
    id: 0,
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation.Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
]);
const techs = reactive([
  {
    id: id++,
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation.Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: id++,
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: id++,
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
]);
const updateId = () => {
  techs.forEach((tech) => {
    const route = useRoute().params.id

    if (tech.id.toString() === route) {
      const {id, title, description} = tech
      currentTech.id = id
      currentTech.title = title
      currentTech.description = description
    }
  })
}

updateId()

onUpdated (
  () => {
    updateId()
  }
)
</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";

.tech {
  width: 100%;
  height: 100%;
  background-image: url(@/assets/technology/background-technology-mobile.jpg);
  position: relative;
  color: var(--main-font-color);
  font-family: "Barlow Condensed";
  font-size: 14px;
  cursor: default;

  &__content {
    position: absolute;
    width: 100%;
    top: 80px;
    text-align: center;
    @include flex(column, center, center);
    &__title {
      letter-spacing: 2.7px;
      font-size: 16px;
      margin-bottom: 30px;
      .num {
        color: #4e4f57;
        margin-right: 10px;
      }
    }
    &__background-image {
      img {
        width: 100%;
        margin-bottom: 32px;
      }
    }
    &__introduce {
      margin-top: 20px;
      &__begin {
        color: var(--sub-font-color);
        letter-spacing: 2.36px;
        margin-bottom: 10px;
      }
      &__name {
        font-family: "Bellefair";
        font-size: 24px;
      }
    }
    &__description {
      width: 90%;
      margin-top: 10px;
      font-family: "Barlow";
      font-size: 15px;
      color: var(--sub-font-color);
      line-height: 25px;
    }
  }
}
</style>