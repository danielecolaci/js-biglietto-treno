//Km
let km = prompt('Quanti sono i km da percorrere?');
console.log(km);

//Età
let age = prompt('Quanti anni hai?')
console.log(age);

//Prezzo biglietto
let price = km * 0.21;
console.log(price);

//Sconto
let final_price;

if (age < 18) {
    final_price = (price * 0.8).toFixed(2);
}
else if (age > 65) {
    final_price = (price * 0.6).toFixed(2);
}
else {
    final_price = price.toFixed(2);
}

console.log(final_price)
alert("Il prezzo del tuo biglietto è " + final_price + "€")