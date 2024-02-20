<template>
    <div class="banner">
      <img :src="banner" alt="Banner" class="banner__img">
    </div>
    <main class="home">
      <div class="home_wrap">
        <h1 class="home_wrap_title">Produts�</h1>
        <div class="home_wrap__content">
          <storeCardProduct  v-for="card in data" :key="card.index" :products="card" />
        </div>
      </div>
    </main>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import StoreCardProduct from '../../components/StoreCardProduct/StoreCardProduct.vue'
import banner from '../../assets/image/banner1.jpg'

const data = ref({})

const getProduct = () =>{
//  fetch('https://fakestoreapi.com/products')
  fetch('https://dummyjson.com/products')

    .then(res=>res.json())
    .then(result =>{
      
      data.value = result?.products
      // data.value = result

      console.log("product", result?.products)
    })
  }

onMounted(() =>{
  getProduct()
})
</script>
<style lang="scss" scoped>
@import './HomeView-style.scss';
</style>