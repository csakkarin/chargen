<template>
  <div id="app" class="grid grid-columns-2 purple">
    <img alt="Chargen logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeroCreator from './components/HeroCreator.vue';

export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  color: #2c3e50;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
