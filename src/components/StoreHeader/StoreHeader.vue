<template>
    <header>
        <router-link to="/">
            <img :src="store" alt="store" width="120" class="logo"/>
        </router-link>
        <ul class="nav">
            <li>
                <div class="search">
                    <input type="text" class="search__Term" placeholder="Search" v-model="searchTerm" @input="searchProducts">
                    <button type="submit" class="search__Button">
                        <icon-search />
                    </button>
                    <ul v-if="showDropdown" class="dropdown">
                        <li style="color:black" v-for="product in searchResults" :key="product.id" @click="handleItemClick(product)">
                            <router-link :to="'/product/' + product.id">{{ product.title }}</router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li><button><icon-bag /></button> {{$store.state.counter}} </li>
            <li><a @click="goToCategory('smartphones')">smartphones</a></li>
            <li><a @click="goToCategory('laptops')">laptops</a></li>
            <li><a @click="goToCategory(`fragrances`)">fragrances</a></li>
            <li><a @click="goToCategory(`skincare`)">SkinCare</a></li>
        </ul>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import IconSearch from '../icons/IconSearch.vue';
import store from '../../assets/image/logo-store.svg';
import IconBag from '../../components/icons/IconBag.vue';
import { useRouter } from "vue-router";

const router = useRouter();
const searchTerm = ref('');
const showDropdown = ref(false);
const searchResults = ref([]);

const goToCategory = (type) => {
    router.push({ path: '/product/category/' + type });
}

const searchProducts = async () => {
    if (searchTerm.value.trim() === '') {
        showDropdown.value = false;
        searchResults.value = [];
        return;
    }

    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm.value}`);
        const data = await response.json();
        searchResults.value = data.products;
        showDropdown.value = true;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

const handleItemClick = (product) => {
    // Redirect to product details page
    router.push({ path: '/product/' + product.id });
    // Close the dropdown
    showDropdown.value = false;
}
</script>

<style lang="scss" scoped>
@import './StoreHeader-style.scss';

.dropdown {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    width: calc(100% - 2px);
    margin-top: 1px;
    border-top: none;
    list-style-type: none;
    padding: 0;
    top: 100%; /* Adjust dropdown position */
    left: 0; /* Adjust dropdown position */
    height: 200px;
    overflow: scroll;
}

.dropdown li {
    padding: 10px;
    cursor: pointer;
}

.dropdown li:hover {
    background-color: #f9f9f9;
}
</style>