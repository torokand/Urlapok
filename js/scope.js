// Global scope.
var globalName = 'Joe'

function something() {
 //   var globalName = 'Jack';
 globalName = 'Piri'   ;
 console.log(globalName);
}
something();

console.log(globalName);

// A let blokk szintű változó, a blokk { } jelek között van.
let name = "Sanyi";
name = "Varga Béla"

{
    let name ="Pisti";
    console.log(name);
}

console.log(name);

const NAMES = "Sanyi"
// NAME = "Péter" // hibát ad
function test() {
    // NAMES = "Pisti" // Hibát ad, mert a globális constanst akarom változtatni
    const NAMES ="Pisti";
    console.log(NAMES);
}
test();
console.log(NAMES);