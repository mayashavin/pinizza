<script setup>
import HeaderCartCount from './components/HeaderCartCount.vue';
</script>
<template>
  <HeaderCartCount />
  <router-view></router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');

#app {
  font-family: 'Cookie', Helvetica, Arial, sans-serif, cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.app-header {
  color: #d5567f;
}
</style>
