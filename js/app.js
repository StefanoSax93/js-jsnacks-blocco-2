/*Snack1
Inserisci un numero, se è pari stampa il numero, 
se è dispari stampa il numero successivo.*/

const inputNumber = parseInt(prompt("Inserisci un numero"))
let numberStamp = document.getElementById("numberStamp")
let finalNumber;

if (inputNumber % 2 === 0) {
    
    finalNumber = inputNumber;
    console.log(inputNumber);
}
if(inputNumber % 2 === 1) {
    finalNumber = inputNumber + 1;
    console.log(finalNumber);
}

numberStamp.innerHTML = `${finalNumber}`

/*Snack2
Generatore di “nomi cognomi” casuali: il Grande Gatsby 
ha  una lista di nomi e una lista di cognomi, e da queste
vuole generare una falsa lista di invitati con nome e cognome.*/






/*Snack3
Crea un array di numeri interi e fai la somma di tutti 
gli elementi  che sono in posizione (indice) dispari*/