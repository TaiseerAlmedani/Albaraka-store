<template>
  <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <div class="d-flex flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h3 mb-4">
        Albaraka store
      </h1>
      <h4 class="subtitle text-h3">
        All your needs in one market
      </h4>
      <v-btn to="/products" color="primary mt-10">
        All Prducts <v-icon>mdi mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-parallax>
  <h1 class="text-h2 my-16 text-center">Our Products</h1>
  <v-divider class="my-7 mx-auto border-opacity-25"  :thickness="2"  length="500" color="primary" />
  <products-list />
</template>
<script setup>
import ProductsList from '@/components/ProductsList.vue';
</script>
