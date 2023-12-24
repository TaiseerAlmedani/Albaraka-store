<template>
  <h1 class="title text-h2 font-weight-bold text-center my-12 ">Cart Page</h1>
  <v-divider class="my-7 mx-auto border-opacity-25"  :thickness="2"  length="500" color="primary" />

  <v-container>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4" xl="3" v-for="(item, index) in items" :key="item.id">
        <ProductItem :product="item">
          <template #action>
            <v-btn @click="deleteItem(index)" icon="mdi-delete" color="error" variant="text">
            </v-btn>
          </template>
        </ProductItem>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ProductItem from '@/components/ProductItem.vue';
import { useCartStore } from '@/stores/cart';
import { mapState, mapActions } from 'pinia'
export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapState(useCartStore, ['items'])
  },
  methods: {
    ...mapActions(useCartStore, ['deleteItem'])
  }
}
</script>
