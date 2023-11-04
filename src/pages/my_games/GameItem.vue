<script>
import { RouterLink } from 'vue-router';

  export default {
    name: 'GameItem',
    props: ['games'],
    components: { RouterLink },
  };
</script>

<template>
  <RouterLink :to="'/infoGame/' + game.id" class="d-flex flex-column align-items-center jogo-container shadow pb-3 m-3 text-white text-decoration-none" v-for="(game, index) in games" :key="index">
    <img :src="game.thumbnail" alt="Jogo">
    <h4 class="mt-2">{{ game.title }}</h4>
    <h5>Plataforma: {{ game.platform }}</h5>
    <span>R$ 97,99</span>
  </RouterLink>
</template>

  <style scoped>
    .jogo-container {
        background-image: linear-gradient(to top, #3799c4, #1B293A);
        cursor: pointer;
    }

    .jogo-container span {
        background-color: #4C6B22;
        color: #BEEE11;
        font-size: 1.8em;
        font-weight: bold;
        padding: 0px 10px;
    }

    button {
        margin: auto;
    }
  </style>