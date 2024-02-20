<template>
  <div class="product">
    <div v-if="!loading">
      <h2 class="product_title">{{ product.title }}</h2>
      <div class="product_desc">
        <div class="product_desc_image">
          <img class="prod-img" :src="product.images[0]" alt="product">
        </div>
          <div class="product_desc_content">
            <div class="product_desc_info">
              <h1 class="description">Description</h1>
              <p>{{ product.description }}</p>
            </div>
            <div class="product_desc--edit">
              Quantity:
              <div class="counter">
                  <button @click="$store.commit('decreaseQuantity')">
                    <span class="minus">-</span>
                  </button>
                  <div>{{ $store.state.counter }}</div>
                  <button @click="$store.commit('increaseQuantity()')">
                    <span class="plus">+</span>
                  </button>
              </div>
            </div>
            <span>Dollars: <strong class="text-orange-400 text-xl ml-5">{{ product.price }}</strong></span>
           <div class="pt-14">
            <button class="btn" @click="$store.dispatch('trackProduct',product)">Add to Cart</button>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();
const productId = route.params.id;
const product = ref({});
const loading = ref(true);

 // Initialize quantity with 0
//  const quantity = ref(0);

const fetchProductId = () => {
  fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(json => {
      product.value = json;
      loading.value = false;
    });
};

onMounted(() => {
  fetchProductId();
});

// const addProductID = () =>{
//       this.
// }

      // export default {
      //   computed : {
      //     getProductID : {
      //       set(){
              
      //       }
      //     }
      //   }
      // }

</script>

<style lang="scss" scoped>
@import './ProductView-style.scss'
</style>