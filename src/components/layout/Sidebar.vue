<script>
export default {
    name: 'Sidebar'
}
</script>

<template>
  <div class="d-flex flex-column align-items-flex-start pb-3 mb-3 link-dark text-decoration-none sidebar">
    <h5>RECOMENDAÇÕES</h5>
    <ul>
      <li>De amigos</li>
      <li>De curadores</li>
      <li>Marcadores</li>
    </ul>
    <h5>CATEGORIAS</h5>
    <ul>
      <li>Mais vendidos</li>
      <li>Novidades</li>
      <li>Próximos lançamentos</li>
      <li>Promoções</li>
      <li>Jogos de R.V.</li>
      <li>Compatíveis com comando</li>
      <li>Excelentes no Deck</li>
    </ul>
    <h5>VER POR GÉNERO</h5>
    <ul>
      <li>Grátis para Jogar</li>
      <li>Acesso Antecipado</li>
      <li>Aventura</li>
      <li>Ação</li>
      <li>Casual</li>
      <li>Corridas</li>
      <li>Desporto</li>
      <li>Estratégia</li>
      <li>Indie</li>
      <li>Multijogador em Massa</li>
      <li>RPG</li>
      <li>Simulação</li>
    </ul>
  </div>
</template>

<style scoped>

  .sidebar {
    margin-top: 70px;
  }

  .sidebar h5{
    color: #536E84 !important;
    font-size: 1.1em;
    font-weight: bold;
    margin-top: 20px;
  }

  .sidebar ul {
    padding: 0px;
  }

  .sidebar li {
    list-style-type: none;
    color: #7A8B9D;
    font-size: .9em;
    cursor: pointer;
  }

  .sidebar li:hover {
    color: #66c0f4;
  }
</style>