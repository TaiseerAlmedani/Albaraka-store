<template>
  <v-container>
    <v-row>
      <v-col v-for="product in Items" :key="product.id" cols="12" sm="12" md="6" lg="4" xl="3">
        <ProductItem :product="product"></ProductItem>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
  components: {
    ProductItem
  },
  created() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => this.products = products)
  },
  data() {
    return {
      products: []
    }
  },
  props: {
    all: {
      type: Boolean,
      default:false
    }
  },
  computed: {
    Items() {
      return (this.all ? this.products : this.products.filter(a => a.id < 10))
    }
  }
}
</script>
