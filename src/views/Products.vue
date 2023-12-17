<script setup>
import ProductsList from '@/components/ProductsList.vue';
</script>
<template>
  <h1 class="title text-h2 font-weight-bold text-center my-12">
    All Products
  </h1>
  <v-divider color="black" thickness="2" class="border-opacity-25 my-10 mx-auto" length="700"></v-divider>
  <ProductsList all />
</template>

