<template>
  <div id="app">
<HeaderIndex></HeaderIndex>
<Home></Home>
   <FooterIndex></FooterIndex>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import  Home from './views/Home'
import FooterIndex from "@/components/Footer/FooterIndex";
import HeaderIndex from "@/components/Header/HeaderIndex";
export default {
  name: 'App',
  components: {
    HelloWorld,Home,FooterIndex,HeaderIndex
  }
}
</script>

<style>

</style>
