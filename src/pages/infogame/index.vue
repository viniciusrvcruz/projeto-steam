<script>
import { RouterLink } from 'vue-router';
import Nav from '../../components/layout/Nav.vue';
import Sidebar from '../../components/layout/Sidebar.vue';
import { fetchGameId } from '../../services/api/FetchGames.js';

export default {
    name: 'InfoGame',
    components: { Sidebar, Nav, Nav, Sidebar, RouterLink },
    data() {
      return {
        game: [],
        gameId: '',
        localStorageExistis: false,
        idExistis: 1
      }
    },
    mounted() {

      this.localStorageExistis = localStorage.getItem('Data') ? localStorage.getItem('Data') : false

      if(this.localStorageExistis) {
        JSON.parse(this.localStorageExistis).forEach((info) => {
          if(info.gameId == this.$route.params.id) {
            this.idExistis = 0
          }
        });
      }

      console.log(this.idExistis)
      

      if(this.localStorageExistis.gameId) {
        this.localStorageExistis = false
      } else {
        this.localStorageExistis = true
      }
      
      this.gameId = this.$route.params.id
      fetchGameId(this.gameId).then((data) => {
          this.game = data
      })
  },
}
</script>

<template>
<main class="d-flex justify-content-center">
    <Sidebar />
    <section class="d-flex flex-column">
      <Nav />
      <div class="d-flex flex-column align-items-center px-5 py-5 gap-3 text-white">
        <img :src="game.thumbnail" alt="img game" class="my-2 custom-img" >
        <div class="w-50">
          <h1 class="mb-5">{{ game.title }}</h1>
          <p>{{ game.short_description }}</p>
          <h4 class="">Plataforma: {{ game.platform }}</h4>
          <h4>Editora: {{ game.publisher }}</h4>
          <h4>Desenvolvedor: {{ game.developer }}</h4>
          <h4>Data de lançamento: {{ game.release_date }}</h4>
          <h2 class="mt-4">Preço: R$ 97,00</h2>
          <hr>
          <RouterLink :to="'/purchase/' + game.id" v-if="idExistis !== 0" type="button" class="btn btn-success mt-2">Comprar</RouterLink>
        </div>
      </div>
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

    .custom-img {
      width: 500px;
    }

</style>
