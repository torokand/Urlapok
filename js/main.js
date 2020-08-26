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

// Add helptext.
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";
// console.log( helpText );

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

// parent.removeChild(helpText);

//Window events.
let sendButton = document.querySelector("form .btn.btn-primary");
/*    sendButton.onclick = function() {
// vagysendButton.onclick = calcAmount; 
   alert("Hello JS!");
};
*/



// let sendButton = document.querySelector("form.btn.btn-primary");
/* sendButton.addEventListener("click", function() {
    alert("Hello JS!");
}); */


window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
    });

// Űrlap események.

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();
    console.log( this );
    
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i=0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log( values );
});


/*     */


