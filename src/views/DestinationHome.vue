<template>
  <div class="destination">
    <Navbar />
    <div class="destination__top">
      <div class="destination__top__title">
        <span class="num">01</span>
        <span class="word">PICK YOUR DESTINATION</span>
      </div>
      <img
        v-show="newPlanet.id === 0"
        src="@/assets/destination/image-moon.png"
        alt=""
        class="destination__top__image"
      />
      <img
        v-show="newPlanet.id === 1"
        src="@/assets/destination/image-mars.png"
        alt=""
        class="destination__top__image"
      />
      <img
        v-show="newPlanet.id === 2"
        src="@/assets/destination/image-europa.png"
        alt=""
        class="destination__top__image"
      />
      <img
        v-show="newPlanet.id === 3"
        src="@/assets/destination/image-titan.png"
        alt=""
        class="destination__top__image"
      />
      <DestinationNavTab />
      <h1 class="destination__top__category">{{newPlanet.category}}</h1>
      <p class="destination__top__description">{{newPlanet.description}}
      </p>
      <div class="destination__top__details">
        <div class="destination__top__details__distance">
          <span>AVG. DISTANCE</span>
          <h1>{{newPlanet.distance}} km</h1>
        </div>
        <div class="destination__top__details__time">
          <span>EST. TRAVEL TIME</span>
          <h1>{{newPlanet.time}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import DestinationNavTab from "@/components/DestinationNavTab.vue";
import { onUpdated, reactive } from "vue";
import { useRoute } from "vue-router";
let id = 0;
const planets = reactive([
  {
    id: id++,
    category: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400",
    time: "3 days",
  },
  {
    id: id++,
    category: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL.",
    time: "9 months",
  },
  {
    id: id++,
    category: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL.",
    time: "3 years",
  },
  {
    id: id++,
    category: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL.",
    time: "7 years",
  },
])
const route = useRoute()
const newPlanet = reactive([{
  id: 0,
  category: 'MOON',
  description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  distance: 384400,
  time: 3,
}])
const updateId = () => {
  const routeId = route.params.id
  planets.forEach((planet) => {
    if (planet.id.toString() === routeId) {
      const index = planets.indexOf(planet)
      const {id, category, description, distance, time } = planets[index]
      newPlanet.id = id 
      newPlanet.category = category
      newPlanet.description = description
      newPlanet.distance = distance
      newPlanet.time = time
    }
  })
}
updateId()

onUpdated(
  () => {
    updateId ()
  }
)
</script>

<style scoped lang='scss'>
@import "@/styles/mixins.scss";

.destination {
  width: 100%;
  height: 130%;
  color: var(--main-font-color);
  background-image: url(@/assets/destination/background-destination-mobile.jpg);
  @include pad {
    background-image: url(@/assets/destination/background-destination-tablet.jpg);
  }
  position: relative;
  font-weight: 300;
  font-family: "Bellefair";
  &__top {
    position: absolute;
    top: 80px;
    width: 100%;
    @include flex(column, space-around, center);

    &__title {
      font-family: "Barlow Condensed";
      letter-spacing: 2.7px;
      font-size: 16px;
      margin-bottom: 51px;
      .num {
        color: #4e4f57;
        margin-right: 10px;
      }
    }
    &__image {
      width: 170px;
      height: 170px;
      margin-bottom: 26px;
    }
    &__category {
      margin-bottom: 10px;
      font-size: 56px;
    }
    &__description {
      color: var(--sub-font-color);
      font-size: 15px;
      font-family: "Barlow";
      margin: 0 24px;
      line-height: 25px;
      text-align: center;
      margin-bottom: 60px;
      position: relative;
      &::after {
        position: absolute;
        top: 125%;
        right: 50%;
        transform: translateX(50%);
        content: "";
        width: 90%;
        height: 1px;
        background-color: var(--border-grey);
      }
    }
    &__details {
      width: 100%;
      @include flex(column, space-between, center);
      gap: 30px;
      text-align: center;
      span {
        font-size: 14px;
        color: var(--sub-font-color);
        font-family: "Barlow Condensed";
        letter-spacing: 2.36px;
      }
      h1 {
        margin-top: 15px;
        font-size: 28px;
      }
    }
  }
}
</style>
