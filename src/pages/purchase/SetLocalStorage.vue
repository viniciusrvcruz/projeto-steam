<script>
export function setLocalStarage(purchase) {
    const existingPurchase = JSON.parse(localStorage.getItem('Data')) || [] // checks if there is data in localStorage

    existingPurchase.push(purchase)

    localStorage.setItem('Data',JSON.stringify(existingPurchase)) // set data in localStorage
    alert('Compra concluída com Sucesso!')
}
</script>