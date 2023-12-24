<template>
  <v-container>
    <v-row>
      <v-col v-for="(item , index) in items" :key="item.id">
        <ProductItem :product="item">
        <template #action>
          <v-btn
          @click="deleteItem(index)"
          icon="mdi-delete"
          color="error"
          variant="outlined">
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
import { mapState , mapActions } from 'pinia'
export default {
  components: {
    ProductItem,
  },
  computed:{
    ...mapState(useCartStore , ['items'])
  },
  methods:{
    ...mapActions(useCartStore , ['deleteItem'])
  }
}
</script>
