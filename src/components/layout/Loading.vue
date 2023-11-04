<script>
import loading from '../../assets/loading.svg'

export default {
    name: 'Loading',
    data() {
        return {
            imgLoading: loading
        }
    }
    
}
</script>

<template>
    <div class="d-flex justify-content-center container w-100">
        <img :src="imgLoading" alt="Loading">
    </div>    
</template>

<style scoped>
    img {
        width: 100px;
    }
</style>