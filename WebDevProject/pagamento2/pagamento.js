function CalcoloResto() {
    let pagato = document.body.querySelector('#pagato').value;
    console.log(pagato)

    if (isNaN(pagato) || pagato <= 0) { //verifica se pagato è un numero
        alert('Inserire correttamente i valori.');
        return 0;
    }

    if (pagato < ImportoDaPagare) {
        alert('La somma versata deve essere maggiore o uguale al conto totale.');
        return 0;
    }

    let resto = pagato - ImportoDaPagare;
    return resto;
}

//ottieni prodotti carrello

// Recupera la stringa JSON dall'localStorage con la chiave specifica
var arrayOggettiJSON = localStorage.getItem('ProdottiCarrello');


// Converti la stringa JSON in un array di oggetti, recuperando da local storage la stringa con la chiave prodottiCarrello
var arrayOggetti = JSON.parse(localStorage.getItem('ProdottiCarrello'));

// Ora puoi utilizzare l'array di oggetti come desideri
console.log(arrayOggetti);

let CalcolaImportoDaPagare = function(){
    let totaleCarrello = 0;
    arrayOggetti.forEach(element => {
        totaleCarrello += element.prezzo;
    });

    return totaleCarrello;
}

let ImportoDaPagareElemento = document.body.querySelector("#totDaPagare")

console.log(CalcolaImportoDaPagare())


let ImportoDaPagare = CalcolaImportoDaPagare()

ImportoDaPagareElemento.innerHTML = `€${ImportoDaPagare}`


let SubmitButton = document.body.querySelector("button")

let ElementoResto = document.body.querySelector("#resto")

SubmitButton.addEventListener('click', function(){
    ElementoResto.innerHTML = "Resto: €" +  CalcoloResto();
})