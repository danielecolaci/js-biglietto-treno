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
    final_price = (price * 0.8);
}
else if (age > 65) {
    final_price = (price * 0.6);
}
else {
    final_price = price;
}

console.log(final_price)
alert("Il prezzo del tuo biglietto è " + final_price + "€")