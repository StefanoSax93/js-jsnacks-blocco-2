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

//genero 2 liste, una per i nomi e una per i cognomi
const nameList = ["John","Jack","Mike","Rose","Anne","Gerald","Lewis","Megan","Christie"];
const surnameList = ["Johnson","Jackson","James","Wellington","Di Caprio","Wade","Livingston"];
// importo il bottone che genera la lista
const btnGenerate = document.getElementById("btnGenerate");
let randomName;
let randomSurname;
let hostList = document.getElementById("hostList")

btnGenerate.addEventListener("click", function() {

    for(let i = 0; i < 15; i++) {
        randomName = nameList[Math.floor(Math.random() * nameList.length )];
        randomSurname = surnameList[Math.floor(Math.random() * surnameList.length)];
        console.log(randomName,randomSurname);
        hostList.innerHTML += `<li>${randomName} ${randomSurname}</li>`;
    };
    
});



/*Snack3
Crea un array di numeri interi e fai la somma di tutti 
gli elementi  che sono in posizione (indice) dispari*/

const listaNumeri = [3,5,6,8,9,0,23,25,76,34,98,213,567,78,93,67];
const sommaIndiciDispari = [];

let somma = 0;

for(let i=0; i<listaNumeri.length; i++) {
    if(i % 2 === 0) {
        somma += listaNumeri[i];
        sommaIndiciDispari.push(listaNumeri[i])
    } else {
        somma=somma
    }

}

console.log(somma);
console.log(sommaIndiciDispari);
