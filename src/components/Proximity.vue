<script setup lang="ts">
import { ref } from 'vue';
import proximityApi from '../api/proximityApi';
const proximity = ref(0);
const getSensorData = () => {
  setInterval( async() => {
    const { data } = await proximityApi.get('');
    proximity.value = data;
    console.log( data );
  } , 1000);
};
getSensorData();
</script>

<template>
<div class="container text-light">
  <div class="row">
    <div class="col-12">
      <h1>{{ proximity }} cm</h1>
    </div>
  </div>
</div>
</template>