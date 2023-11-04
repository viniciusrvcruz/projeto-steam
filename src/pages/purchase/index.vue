<script>
import Nav from '../../components/layout/Nav.vue';
import Sidebar from '../../components/layout/Sidebar.vue'
import PurchaseForm from './PurchaseForm.vue';
export default {
  components: { Sidebar, Nav, PurchaseForm },
    
}
</script>

<template>
    <main class="d-flex justify-content-center">
      <sidebar />
      <section class="d-flex flex-column">
        <Nav />
        <PurchaseForm />
      </section>
    </main>
  </template>

<style scoped>
    main {
    display: flex;
    height: 100%;
    background-image: linear-gradient(to right, #193748, #1B2C42);
    padding: 20px 150px;
    }

</style>