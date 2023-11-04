<script>
export default {
    name: 'Header'
}
</script>

<template>
    <div class="container-fluid custom-background">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-around py-3 mb-4 custom-header">
      <RouterLink to="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <img src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" class="bi me-2" width="200" role="img" aria-label="Bootstrap" />
      </RouterLink>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 text-white">LOJA</a></li>
        <li><RouterLink to="/myGames" class="nav-link px-2 text-white">MEUS JOGOS</RouterLink></li>
        <li><a href="#" class="nav-link px-2 text-white">COMUNIDADE</a></li>
        <li><a href="#" class="nav-link px-2 text-white">SOBRE</a></li>
        <li><a href="#" class="nav-link px-2 text-white">SUPORTE</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn custom-button me-2">Instale o Steam</button>
      </div>
    </header>
  </div>
</template>

<style scoped>
    .custom-background {
        background-color: #171D25;
        padding: 0px 150px;
    }

    .custom-header {
        margin: 0px !important;
    }

    .custom-button {
        background-color: #6C9018;
        color: white;
        font-size: .8em;
    }
</style>