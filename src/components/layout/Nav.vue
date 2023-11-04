<script>
export default {
    
}
</script>

<template>
<div class="container">
    <nav class="navbar rounded navbar-expand-lg bg-body-tertiary nav-custom">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Sua loja</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Novidades e tendências</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Ação</a></li>
                <li><a class="dropdown-item" href="#">Arcade</a></li>
                <li><a class="dropdown-item" href="#">Aventura</a></li>
                <li><a class="dropdown-item" href="#">Casual</a></li>
                <li><a class="dropdown-item" href="#">Estratégia</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Loja de pontos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Notícias</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Laboratório  </a>
            </li>
        
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
          </form>
        </div>
      </div>
    </nav>
</div>
</template>

<style scoped>
    .container {
        margin-right: 0px;
        width: 100%;
    }

    .nav-custom {
        background-image: linear-gradient(to right, #307DBF, #1A377C);
    }

    .nav-custom a {
        color: white !important;
        font-size: .8em;
        margin-right: 5px;
    }

    .dropdown-menu a {
        color: black !important;
    }

    .nav-custom input {
        background-color: #316282;
        border: none;
    }
</style>