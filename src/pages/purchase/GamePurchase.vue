<script>
import { fetchGameId } from '../../services/api/FetchGames.js';

export default {
    name: 'GamePurchase',
    props: ['game']
}
</script>

<template>
    <div class="d-flex flex-column align-items-center px-5 mt-5 gap-2 text-custom">
        <img :src="game.thumbnail" alt="img game" >
        <h1>{{ game.title }}</h1>
        <h2>Preço: R$ 97,00</h2>
    </div>
</template>

<style scoped>
    .text-custom {
        color: #7A8B9D; 
    }
</style>