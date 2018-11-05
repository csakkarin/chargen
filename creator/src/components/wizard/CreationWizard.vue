<style scoped lang="scss" src="./CreationWizard.scss"></style>
<template src="./CreationWizard.html"></template>


<script lang="ts">
import WizardStep1 from './steps/WizardStep1.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { heroService } from '../../services/hero.service';
import Hero from '../../models/hero';
import Router from 'vue-router';
@Component({
    components: { WizardStep1 },
})
export default class CreationWizard extends Vue {

    public hero: Hero;

    constructor() {
        super();
        this.hero = null;
    }

    public heroChanged(mode: string, hero: Hero) {
    if (mode === 'add') {
      heroService.addHero(hero);
    } else {
      heroService.updateHero(hero);
    }
  }
  public cancel() {
     this.$router.push('/');
  }
}
</script>