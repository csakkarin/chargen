<style scoped lang="scss" src="./WizardStep1.scss"></style>
<template src="./WizardStep1.html"></template>


<script lang="ts">
import Hero from '../../../models/hero';
import Class from '../../../models/class';
import { raceService } from '../../../services/race.service';
import { classService } from '../../../services/class.service';
import Race from '../../../models/races';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueFormWizard from 'vue-form-wizard';
import { Component, Emit, Prop, Watch } from 'vue-property-decorator';

Vue.use(VeeValidate);
Vue.use(VueFormWizard);

@Component({})
export default class WizardStep1 extends Vue {


 @Prop()
  public hero: Hero;
  public addingHero = !this.hero;
  public editingHero: Hero | null;
  private races: Race[] = [];
  private classes: Class[] = [];
  
  public $refs: {
    name: HTMLElement;
  };

 

  @Watch('hero')
  public onHeroChanged(value: string, oldValue: string) {
    this.editingHero = this.cloneIt();
  }

  public addHero() {
    const hero = this.editingHero as Hero;
    this.emitRefresh('add', hero);
  }
  @Emit('cancelled')
  public cancel() {
    this.editingHero = null;
  }

  public cloneIt() {
    return Object.assign({}, this.hero);
  }
  public created() {
     raceService.getAll().then((raceList) =>{
       this.$data.races = raceList;
     });
     classService.getAll().then((classList) =>{
       this.$data.classes = classList;
     });
    
    this.editingHero = this.cloneIt();
  }
  @Emit('heroChanged')
  public emitRefresh(mode: string, hero: Hero) {
    this.cancel();
  }
  public  mounted() {
     this.$refs.name.focus();
  }
  public onComplete(){
    this.save();
  }
  public save() {
    this.$validator.validate().then((result) => {
      if (!result) {
        alert(`hero's have name's with at least 2 letters`);
      } else {
        if (this.addingHero) {
          this.addHero();
        } else {
          this.updateHero();
        }
      }
    });
  }

  public updateHero() {
    const hero = this.editingHero as Hero;
    this.emitRefresh('update', hero);
  }
}
</script>
