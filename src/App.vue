<script>
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style scoped>
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
</style>
