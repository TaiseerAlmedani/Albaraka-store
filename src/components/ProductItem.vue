<template>
<v-card>
  <v-img :src="product.image" height="200" contain></v-img>
  <v-card-title>
    {{ product.title }}
  </v-card-title>
</v-card>
</template>

<script>
export default{
  props:{
    product:Object
  }
}
</script>
