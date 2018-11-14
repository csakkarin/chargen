<style scoped lang="scss" src="./HeroCreator.scss"></style>
<template src="./HeroCreator.html"></template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { heroService } from '../services/hero.service';
import {referencedb} from '../services/referencedb.service';
import Hero from '../models/hero';
@Component
export default class HeroCreator extends Vue {
  private heros = [] as Hero[];

  public mounted() {
    referencedb.setupData().then((_) => {
    
    heroService.getAll().then((heros) => {
      this.heros = heros;
    });
    })
  }
  protected deleteHero(id: number) {
    heroService.deleteHero(id).then((heros) => {
      this.heros = heros;
    });
  }
}
</script>