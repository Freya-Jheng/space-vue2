<template>
  <div class="crew">
    <Navbar />
    <div class="crew__content">
      <div class="crew__content__title">
        <span class="num">02</span>
        <span class="word">MEET YOUR CREW</span>
      </div>
      <span class="crew__content__avatar">
        <img
          v-show="currentCrews.id === 0"
          src="@/assets/crew/image-douglas-hurley.png"
          alt=""
          class="crew__content__avatar--image"
        />
        <img
          v-show="currentCrews.id === 1"
          src="@/assets/crew/image-mark-shuttleworth.png"
          alt=""
          class="crew__content__avatar--image"
        />
        <img
          v-show="currentCrews.id === 2"
          src="@/assets/crew/image-victor-glover.png"
          alt=""
          class="crew__content__avatar--image"
        />
        <img
          v-show="currentCrews.id === 3"
          src="@/assets/crew/image-anousheh-ansari.png"
          alt=""
          class="crew__content__avatar--image"
        />
      </span>
      <CrewNavTab />
      <div class="crew__content__introduce">
        <h3 class="crew__content__introduce__job">{{ currentCrews.job }}</h3>
        <h1 class="crew__content__introduce__name">{{ currentCrews.name }}</h1>
      </div>
      <p class="crew__content__description">
        {{ currentCrews.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import CrewNavTab from "@/components/CrewNavTab.vue";
import { reactive, onUpdated } from "vue";
import { useRoute } from "vue-router";
let id = 0;
const currentCrews = reactive([
  {
    id: 0,
    job: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
]);
const crews = reactive([
  {
    id: id++,
    job: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: id++,
    job: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: id++,
    job: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    id: id++,
    job: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
]);
const updateId = () => {
  const route = useRoute().params.id;
  crews.forEach((crew) => {
    if (crew.id.toString() === route) {
      const { id, job, name, description } = crew;
      currentCrews.id = id;
      currentCrews.job = job;
      currentCrews.description = description;
      currentCrews.name = name;
    }
  });
};
updateId();
onUpdated(() => {
  updateId();
});
</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";
.crew {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(@/assets/crew/background-crew-mobile.jpg);
  color: var(--main-font-color);
  font-size: 15px;
  &__content {
    position: absolute;
    width: 100%;
    top: 80px;
    @include flex(column, center, center);
    text-align: center;
    &__title {
      font-family: "Barlow Condensed";
      letter-spacing: 2.7px;
      font-size: 16px;
      .num {
        color: #4e4f57;
        margin-right: 10px;
      }
    }
    &__avatar {
      margin: 51px 0 32px 0;
      position: relative;
      img {
        height: 223px;
      }
      &::after {
        position: absolute;
        top: 100%;
        right: 50%;
        transform: translateX(50%);
        content: "";
        width: 327px;
        height: 1px;
        background-color: var(--border-grey);
      }
    }
    &__introduce {
      font-family: "Bellefair";
      margin-top: 20px;
      &__job {
        font-size: 16px;
        margin-bottom: 10px;
        color: #919296;
      }
      &__name {
        font-size: 24px;
      }
    }
    &__description {
      width: 95%;
      margin-top: 10px;
      color: var(--sub-font-color);
      font-family: "Barlow";
      line-height: 25px;
    }
  }
}
</style>
