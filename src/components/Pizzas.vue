<template>
  <ul class="gallery" v-if="store.pizzasGallery.length">
    <li v-for="pizza in store.pizzasGallery" :key="pizza.name" class="gallery-item">
      <div>
        <img :src="pizza.image" :alt="pizza.name">
        <div class="gallery-item-info">
          <div class="gallery-item-header">{{ pizza.name }}</div>
          <div class="gallery-item-description">{{ pizza.description }}</div>
          <div class="gallery-item-price">${{ pizza.price }}</div>
        </div>
        <button class="gallery-item-add-btn" @click="cart.addItem({ ...pizza, quantity: 1 })">Add to cart</button>
      </div>
    </li>
  </ul>
  <div v-else>All pizza is sold out (kind of).</div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { usePizzas } from '../stores/usePizzas.js'
import { useCart } from '../stores/useCart.js'

export default {
  setup() {
    const store = usePizzas()
    const cart = useCart()
    window.stores = { pizzaStore: store, cart }

    onMounted(async () => {
      await store.fetchPizzas()
    })

    return {
      store,
      cart
    }
  }
}
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0 2rem;
  justify-content: center;
}

.gallery-item-add-btn {
  padding-block: 0.6rem;
  padding-inline: 1rem;
  background: palevioletred;
  color: white;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  font-weight: 600;
}

.gallery-item-add-btn:hover {
  background: #d5567f;
}

.gallery-item-info {
  margin-block: 0.5rem;
}

.gallery-item {
  margin: 1rem;
  max-width: 400px;
  padding-block: 1rem;
}

.gallery-item:hover {
  background: #fff5f5;
}

.gallery-item-description {
  margin-block: 0.5rem;
  font-size: 20px;
  padding-inline: 1rem;
}

.gallery-item-price {
  color: palevioletred;
  font-size: 24px;
}

.gallery-item-header {
  color: palevioletred;
  font-weight: 600;
  font-size: 26px;
}
</style>