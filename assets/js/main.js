/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Invece di usare prompt e allerte usate inputs ed elementi della dom per mostrare a schermo il risultato. */


function randomNum(max, min, nloop) {
    const randomNumArray = [];
    let i = 0;
    while (randomNumArray.length < nloop) {
        const randomNumb = Math.floor(Math.random() * (max - min) + min)

        if (!randomNumArray.includes(randomNumb)) {
            randomNumArray.push(randomNumb);
        }

        i++;
    }
    return randomNumArray
}

console.log(randomNum(100, 0, 5));