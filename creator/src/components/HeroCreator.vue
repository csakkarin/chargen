<style scoped lang="scss" src="./HeroCreator.scss"></style>
<template src="./HeroCreator.html"></template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { heroService } from '../services/hero.service';
import Hero from '../models/hero';
@Component
export default class HeroCreator extends Vue {
  private heros = [] as Hero[];

  public mounted() {
    heroService.getAll().then((heros) => {
      this.heros = heros;
    });
  }
  deleteHero(id: number){
    heroService.deleteHero(id).then((heros) => {
      this.heros = heros;
    });
  }
}
</script>