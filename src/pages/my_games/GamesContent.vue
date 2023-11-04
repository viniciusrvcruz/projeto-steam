<script>
import Loading from '../../components/layout/Loading.vue';
import { fetchGameId } from '../../services/api/FetchGames.js';
import GameItem from './GameItem.vue';
export default {
  components: { GameItem, Loading },
    name: 'Games',
    data() {
        return {
            games: [], // initialize an empty array
            myGames: [],
            show: 4, // Amount of game it will show
            showLoading: true
        };
    },
    mounted() {

        if(localStorage.getItem('Data')) {
            this.myGames = localStorage.getItem('Data') // Get data in localstorage
            this.myGames = JSON.parse(this.myGames) 
            this.myGames.forEach((myGame) => {
                this.myGames = [] // delete the informations
                fetchGameId(myGame.gameId).then((game) => { // Get games with id
                    this.myGames.push(game) // set games in the variable
                })
            })

            this.showLoading = false
        } else {
            this.myGames = []
            this.showLoading = false
        }

        
    }
}
</script>

<template>
    <div class="container text-white">
        <div>
            <h2 class="mt-4">Meus Jogos</h2>
            <section class="d-flex flex-row justify-content-around flex-wrap"> 
                <GameItem v-if="myGames[0]" :games="myGames"/>
                <h5 v-else class="text-left">Você não possui nenhum jogo!</h5>
            </section>
        </div>
        <loading v-if="showLoading"/>
    </div>
</template>

<style scoped>
    .container {
        width: 90%;
        background-color: transparent;
    }

    .container h2 {
        font-size: 1.7em;
    }
</style>