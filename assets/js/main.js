/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato. */

const userNum = [];
const botNums = randomNum(100, 0, 5);
console.log(botNums);

// prompt 5 volte e mette i numeri nell'array
for (let i = 0; i < 5; i++) {
    const inputNum = Number(prompt('Inserisci numeri:'));
    userNum.push(inputNum);
}
console.log(userNum);

// controlla se i numeri nell'userNum sono contenuti nel botNums e quante volte
let n = 0;
userNum.forEach(element => {
    if (botNums.includes(element)) {
        n++;
    }
});
console.log(`Hai indovinato ${n} numeri`);

function randomNum(max, min, nloop) {
    const randomNumArray = []; //creo array dove vado ad inserire i num
    //faccio un ciclo di n volte
    let i = 0;
    while (randomNumArray.length < nloop) {
        const randomNumb = Math.floor(Math.random() * (max - min) + min)

        //verifico che non ci siano due numeri uguali nell'array
        if (!randomNumArray.includes(randomNumb)) {
            randomNumArray.push(randomNumb);
        }

        i++;
    }
    return randomNumArray
}