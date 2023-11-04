<script>
import Sidebar from '../../components/layout/Sidebar.vue';
import Nav from '../../components/layout/Nav.vue';
import GamesContent from './GamesContent.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    Nav,
    GamesContent
  }
}
</script>


<template>
  <main class="d-flex justify-content-center">
    <Sidebar />
    <section class="d-flex flex-column">
      <Nav />
      <GamesContent />
    </section>
  </main>
</template>

<style scoped>
    main {
      height: 100%;
      background-image: linear-gradient(to right, #193748, #1B2C42);
      padding: 20px 150px;
    }

</style>
