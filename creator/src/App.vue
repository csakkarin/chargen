<template>
  <div id="app" class="m-5 grid sm:grid-columns-1 md:grid-columns-2 bg-indigo-light purple" >
    <div class=" bg-grey-light flex align-start p-2">
       <font-awesome-icon icon="swords"
        pull="right"
        size="6x"
        style="color:Tomato"
        value="NEW"
        />
      <h1 class="M5 pl-5">CHARGEN !</h1>
    </div>
     <div class="bg-grey-light">
      <transition
         name="fade"
         mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeroCreator from './components/HeroCreator.vue';
import { referencedb } from './services/referencedb.service';
export default class App extends Vue {

  public mounted() {
    referencedb.setupData();
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Metamorphous|Ubuntu');

body {
  box-sizing: border-box;
  background-color: lightgrey;
}

#app {
  margin-top: 60px;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  font-family: 'Metamorphous', cursive;
}

p {
  font-family: 'Ubuntu', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition-timing-function: ease;
  transition-duration: 0.3s;
  transition-property: opacity;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}


</style>
