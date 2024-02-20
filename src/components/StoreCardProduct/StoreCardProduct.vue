<template>
  <router-link :to="{name: 'product', params:{ id: products.id} }">
    <div class="cards">
      <div class="card">
        <div class="card_image">
          <img :src="products.images[0]" alt="product" />
        </div>
        <h2 class="card_title">{{ products.title }}</h2>
        <div class="card_content">
          <h2 class="card_price ">{{ products.price }}</h2>
          <p class="card_price ">{{ products.rating }} Stars</p>
          <h2 class="card_price ">{{ products.brand }}</h2>
          <p class="card_price"> {{products.description}} </p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue';

const props = defineProps({
    products: {
      type: Object,
      default: () => {},
    }
  })

  const validationProducts = computed(() => {
    if (!props.products ) {
      return ''
    }
    return props.products
  })

console.log(validationProducts)
</script>

<style lang="scss" scoped>
@import './StoreCardProduct-style.scss';
</style>