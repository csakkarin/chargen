<template>
  <div id="app" class="grid grid-columns-2 purple">
    <div>
       <font-awesome-icon icon="swords"
        pull="right"
        size="6x"
        style="color:Tomato"
        value="NEW"
        />
      <h1>CHARGEN !</h1>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeroCreator from './components/HeroCreator.vue';

export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Metamorphous|Ubuntu');

#app {
  margin-top: 60px;
  color: #2c3e50;
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
</style>
