<style scoped lang="scss" src="./WizardStep1.scss"></style>
<template src="./WizardStep1.html"></template>


<script lang="ts">
import Hero from '../../../models/hero';
import Vue from 'vue';
import { Component, Emit, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class WizardStep1 extends Vue {
  @Prop() hero: Hero;
  addingHero = !this.hero;
  editingHero: Hero | null;

  @Watch('hero') onHeroChanged(value: string, oldValue: string) {
    this.editingHero = this.cloneIt();
  }
  $refs: {    
    name: HTMLElement;
  };

  addHero() {
    const hero = this.editingHero as Hero;
    this.emitRefresh('add', hero);
  }
  @Emit('cancelled') cancel() {
    this.editingHero = null;
  }

  cloneIt() {
    return Object.assign({}, this.hero);
  }
  public created() {
    this.editingHero = this.cloneIt();
  }
  @Emit('heroChanged') public emitRefresh(mode: string, hero: Hero) {
    this.cancel();
  }
  public mounted() {
      this.$refs.name.focus();
  }
  public save() {
    if (this.addingHero) {
      this.addHero();
    } else {
      this.updateHero();
    }
  }
  public updateHero() {
    const hero = this.editingHero as Hero;
    this.emitRefresh('update', hero);
  }
}
</script>