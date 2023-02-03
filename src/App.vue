<template>
  <SectionHeader></SectionHeader>
  <SectionHero></SectionHero>
  <SectionServices></SectionServices>
  <SectionPrice></SectionPrice>
  <SectionForm></SectionForm>
  <SectionFooter></SectionFooter>
</template>

<script>
import SectionHeader from './components/SectionHeader.vue';
import SectionHero from './components/SectionHero.vue';
import SectionServices from './components/SectionServices.vue';
import SectionPrice from './components/SectionPrice.vue';
import SectionForm from './components/SectionForm.vue';
import SectionFooter from './components/SectionFooter.vue';

export default {
  components: {
    SectionHeader, SectionHero, SectionServices, SectionPrice, SectionForm, SectionFooter
  }
}
</script>

<style>
@import url('./assets/css/global.css');
</style>
