/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato. */

const botNums = randomNum(100, 0, 5);
console.log('Array del bot: ' + botNums);

// prompt 5 volte e mette i numeri nell'array
const userNums = input(5);
console.log('Array dell\'user: ' + userNums);

// controlla se i numeri nell'userNum sono contenuti nel botNums e quante volte
const numChecked = checkNum(userNums, botNums);
console.log(`Hai indovinato ${numChecked} numeri`);


/* FUNCTIONS */
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

function input(nloop) {
    const userNum = [];

    for (let i = 0; i < nloop; i++) {
        const inputNum = Number(prompt('Inserisci numeri:'));
        userNum.push(inputNum);
    }
    return userNum
}

function checkNum(arrayUser, arrayBot) {
    let n = 0;
    arrayUser.forEach(element => {
        if (arrayBot.includes(element)) {
            n++;
        }
    });
    return n
}