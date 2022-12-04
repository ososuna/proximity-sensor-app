<script setup lang="ts">
import { ref } from 'vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import Proximity from '../components/Proximity.vue'
const bulbOn = ref(false);
const turnOnOffBulb = ( proximity: number ) => {
  bulbOn.value = proximity < 20;
}
</script>
<template>
<NavbarComponent />
<div class="vh-100 bg-dark">
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-6">
      <img v-if="bulbOn" src="../assets/bulb-on.jpeg" alt="logo" style="width: 200px;">
      <img v-else src="../assets/bulb-off.jpeg" alt="logo" style="width: 200px;">
    </div>
    <div class="col-6 d-flex align-items-center justify-content-center">
      <Proximity @proximity="turnOnOffBulb" />
    </div>
  </div>
</div>
</template>