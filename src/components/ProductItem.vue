<template>
<v-card theme="dark">
  <v-card-title class="text-center">
    {{ product.title }}
  </v-card-title>
  <v-img :src="product.image" height="200" contain></v-img>
  <v-card-text>
    {{ product.description }}
  </v-card-text>
  <v-card-actions class="justify-end">
    <v-btn
    @click="addToCart(product)"
    color="primary"
    icon="mdi-cart"
   variant="text"> </v-btn>
   <slot name="action"/>
  </v-card-actions>
</v-card>
</template>

<script>
import { useCartStore } from "@/stores/cart"
import { mapActions } from 'pinia'
export default{
  props:{
    product:Object
  },
  methods:{
    ...mapActions(useCartStore , ['addToCart'])
  }
}
</script>
