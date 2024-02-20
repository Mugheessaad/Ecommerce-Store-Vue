import { createStore } from 'vuex'

export default createStore({
  state: {
    allProducts: [],
    quantity: localStorage.getItem("quantity"),
    totalUnit: localStorage.getItem("total"),
    price: null,
    counter : 0,
    cartProductID : [],
  },

  getters: {
    getAllProducts: ({state}) => state.allProducts,
    getQuantity: ({state}) => state.quantity, 
  },

  mutations: {
    setAllProduct: ( state, payload ) =>{
        fetch(`https://fakestoreapi.com/products/category/${payload}`)
          .then((res) => res.json())
          .then((json) => {
              state.allProducts = json
        })
    },

    incrementItem: (state) =>{
        state.quantity += 1
    },

    increaseQuantity(state,num){
          state.counter++
          console.log(num)
    },

    decreaseQuantity(state){
        if (state.counter > 0) {
            state.counter--;
        }
    },
    trackProduct(state,id){
        state.cartProductID.push(id)
      console.log("-->",state.cartProductID.target)
    }
  },
  actions: {
    trackProduct({commit},id){
      console.log(id)
      commit('trackProduct',id)
    }
  }
});