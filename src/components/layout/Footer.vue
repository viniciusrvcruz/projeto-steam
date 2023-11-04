<script>
export default {
    name: 'Footer'
}
</script>

<template>
    <div class="container-fluid custom-background">
    <footer class="py-3 px-5 my-4 custom-footer">
        <div class="d-flex justify-content-md-around">
            <img src="https://store.cloudflare.steamstatic.com/public/images/footerLogo_valve_new.png" width="90" alt="Valve">
            <img src="https://store.cloudflare.steamstatic.com/public/images/v6/logo_steam_footer.png" width="90" alt="Valve">
        </div>
        <p class="text-center custom-text px-5 pt-5 mx-5">&copy; 2023 Valve Corporation. Todos os direitos reservados. Todas as marcas são propriedade dos seus respectivos donos nos EUA e em outros países.
        IVA incluso em todos os preços onde aplicável.   Política de Privacidade   |   Termos Legais   |   Acordo de Assinatura do Steam   |   Reembolsos   |   Cookies
        </p>
        <ul class="nav justify-content-center mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 custom-text">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 custom-text">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 custom-text">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 custom-text">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 custom-text">About</a></li>
        </ul>
        <p class="text-center custom-text">&copy; 2023 Company, Inc</p>
    </footer>
    </div>
</template>

<style scoped>
    .custom-background {
        background-color: #171A21;
    }

    .custom-footer {
        margin: 0px !important;
    }

    .custom-text {
        color: white;
    }
</style>