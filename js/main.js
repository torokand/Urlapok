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


/* Megjegyzés jelölése,
akár több soron keresztül is.    */

// Parent elemek kezelése

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']")
let alerCloseEventHandlerFunction = function(ev) {
        this.parentElement.style.display = "none";
};

for (let i =0; i< alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alerCloseEventHandlerFunction)
//        console.log( this )
    };

// switch használata

/* new Date();
console.log(new Date());
new Date(2020, 8, 28)
console.log(new Date(2020, 8, 28)); // január = 0
new Date().getDay();
console.log(new Date().getDay()); // vasárnap = 0

let weekDay = new Date().getDay();
let dayName ="";
// weekDay = 10; unknown kiiratásához
switch(weekDay) {
    case 0: dayName = "Vas"
    break;
    case 1: dayName = "Hét"
    break;
    case 2: dayName = "Ked"
    break;
    case 3: dayName = "Sze"
    break;
    case 4: dayName = "Csü"
    break;
    case 5: dayName = "Pén"
    break;
    case 6: dayName = "Szo"
    break;
    default: dayName = "unknown"
}
console.log(dayName);
*/

// A while ciklus
/*
let i = 0;
while (i < 10) {
    i++;
    console.log(i);
}
*/

// végtelen ciklus:
/*
i = 0;
while (i < 10) {
    console.log(i);
}
*/

// kollekció bejárása
/*
let animal = { name: "Cat", age: 3};
let keys = Object.keys(animal);
i = 0;
while(i < keys.length ) {
    console.log(animal[keys[i]]);
    i++;
};
*/

// do while ciklus
/*
let i=10;
do {
    console.log(i);
    i++;
}
while(i<0);
*/

//Select elem kitöltése.
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra sonka"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while(index < toppings.length) {
    let option =document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}





