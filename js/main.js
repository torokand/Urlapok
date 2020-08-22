function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']")
    let amountNumber = parseInt(amountInput.value);
    // if (isNaN(amountNumber)) {
    //    amountNumber = 0;
    // }
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber)
}

function showSumPrice(pricePerProduct = 1000, productNumber = 1) {
 //   productNumber = productNumber || 0; régebbi böngészőkben
    let showAmount = document.querySelector("span.show-amount")
    if (productNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!")
    } else if (productNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!")
    } else {
        let amount = productNumber * pricePerProduct;
        showAmount.innerHTML = amount;
    }

}