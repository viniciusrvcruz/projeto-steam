<script>
import GamePurchase from './GamePurchase.vue'
import { setLocalStarage } from './SetLocalStorage.vue'
import { validationName, validationEmail, validationPhone, validationAddress, validationCpf, validationPayment, validationAgreement } from './Validations.vue'
import { fetchGameId } from '../../services/api/FetchGames.js';

export default {
  components: { GamePurchase },
    name: 'PurchaseForm',
    data() {
        return {
            game: [],
            gameId: '',
            validated: false,
            invalidFeedbackName: false,
            invalidFeedbackEmail: false,
            invalidFeedbackPhone: false,
            invalidFeedbackAddress: false,
            invalidFeedbackCpf: false,
            invalidFeedbackPayment: false,
            name: '',
            email: '',
            phone: '',
            address: '',
            cpf: '',
            payment: '',
            agreement: false,
        }
    },
    methods: {
        async submitPurchase(e) {
            e.preventDefault()

            var i = 0

            this.validated = true

            if(!validationName(this.name)) {
                i++
                this.name = ''
                this.invalidFeedbackName = 'invalid-feedback'
            }
            
            if(!validationEmail(this.email)) {
                i++
                this.email = ''
                this.invalidFeedbackEmail = 'invalid-feedback'
            }

            if(!validationPhone(this.phone)) {
                i++
                this.phone = ''
                this.invalidFeedbackPhone = 'invalid-feedback'
            }

            if(!validationAddress(this.address)) {
                i++
                this.address = ''
                this.invalidFeedbackAddress = 'invalid-feedback'
            }

            if(!validationCpf(this.cpf)) {
                i++
                this.cpf = ''
                this.invalidFeedbackCpf = 'invalid-feedback'
            }

            if(!validationPayment(this.payment)) {
                i++
                this.invalidFeedbackPayment = 'invalid-feedback'
            }

            if(!validationAgreement(this.agreement)) {
                i++
            }

            if(i == 0) {

                const purchase = {
                    gameId: this.game.id,
                    name: this.name,
                    email: this.email,  
                    phone: this.phone,
                    address: this.address,
                    cpf: this.cpf,
                    payment: this.payment
                }

                setLocalStarage(purchase) // Set purchase localStarage
                this.$router.push('/myGames')
            } else {
                console.log('Deu errado')
            }
        }
    },
    mounted() {
        this.gameId = this.$route.params.id
        this.game = fetchGameId(this.gameId)
        this.game.then((data) => {
            this.game = data
        })
    }
}
</script>

<template>
    <div class="d-flex flex-column align-items-center container px-5 mx-5 text-white">
        <game-purchase :game="game" />
        <h1 class="my-4">Formulário para compra</h1>
        <form class="needs-validation w-75" :class="{'was-validated' : validated}" @submit="submitPurchase" novalidate>
            <div class="form-row w-100 px-5">
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom01">Nome Completo</label>
                    <input type="text" class="form-control" id="validationCustom01" v-model="name" maxlength="50" placeholder="Nome Completo" required>
                    <div v-if="invalidFeedbackName" class="invalid-feedback">
                        Nome Completo inválido! 
                    </div>
                </div>
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom02">Email</label>
                    <input type="email" class="form-control" id="validationCustom02" v-model="email" maxlength="50" placeholder="Email" required>
                    <div v-if="invalidFeedbackEmail" class="invalid-feedback">
                        Email inválido!
                    </div>
                </div>
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom02">Telefone (Somente números e com o DDD)</label>
                    <input type="text" class="form-control" id="validationCustom02" minlength="11" v-model="phone" maxlength="12" placeholder="Telefone" required>
                    <div v-if="invalidFeedbackPhone" class="invalid-feedback">
                        Telefone inválido!
                    </div>
                </div>
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom02">Endereço</label>
                    <input type="text" class="form-control" id="validationCustom02" maxlength="50" v-model="address" placeholder="Endereço" required>
                    <div v-if="invalidFeedbackAddress" class="invalid-feedback">
                        Endereço inválido!
                    </div>
                </div>
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom02">Seu CPF</label>
                    <input type="text" class="form-control" id="validationCustom02" minlength="11" v-model="cpf" maxlength="14" placeholder="Seu CPF" required>
                    <div v-if="invalidFeedbackCpf" class="invalid-feedback">
                        CPF inválido!
                    </div>
                </div>
                <div class="col-md-4 mb-3 w-100">
                    <label for="validationCustom02">Forma de pagamento</label>
                    <select class="custom-select form-control w-100" id="validationCustom02" v-model="payment" required>
                        <option value="">Selecione a forma de pagamento</option>
                        <option value="Cartão de Crédito">Cartão de Crédito</option>
                        <option value="Pix">Pix</option>
                        <option value="Boleto">Boleto</option>
                    </select>
                    <div v-if="invalidFeedbackPayment" class="invalid-feedback">
                        Forma de pagamento inválido!
                    </div>
                </div>
            </div>
            <div class="form-group px-5">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="invalidCheck" v-model="agreement" required>
                    <label class="form-check-label" for="invalidCheck">
                        Concordo com os termos e condições
                    </label>
                    <div class="invalid-feedback">
                        Você deve concordar antes de enviar.                        
                    </div>
                </div>
            </div>
            <button class="btn btn-primary my-3 mx-5" type="submit">Confirmar compra</button>
        </form>
    </div>
</template>
