//recensioni 
function caricaRecensioni() {
    var recensioniDiv = document.getElementById("lista-recensioni"); //seleziona il div con id "lista-recensioni" e lo assegna alla variabile recensioniDiv
    var recensioniDiv = document.getElementById("lista-recensioni");  // recupera le recensioni dal localStorage e le converte in un array, oppure inizializza un array vuoto se non ci sono recensioni
    var recensioni = JSON.parse(localStorage.getItem("recensioni") || "[]");
    recensioni.forEach(function(recensione) { // ciclo su ciascuna recensione nell'array
        var nuovaRecensione = document.createElement("p"); //nuovo elemento
        nuovaRecensione.textContent = recensione; //imposta il testo del paragrafo con la recensione corrente
        recensioniDiv.appendChild(nuovaRecensione); // aggiunge il nuovo paragrafo al div delle recensioni
    });
}

function aggiungiRecensione() {
    var input = document.getElementById("recensione-input"); //id sulla pagina html (Prima_index.html)
    var recensione = input.value; //ottiene il valore dell'input e lo assegna alla variabile recensione

    if (recensione.trim() !== "") { //verifica se è vuota o ha spazi bianchi
        var recensioniDiv = document.getElementById("lista-recensioni");
        var nuovaRecensione = document.createElement("p"); //nuovo elemento
        nuovaRecensione.textContent = recensione; //imposta il testo del paragrafo con la nuova recensione
        recensioniDiv.appendChild(nuovaRecensione); //aggiunge il nuovo paragrafo al div delle recensioni

        var recensioni = JSON.parse(localStorage.getItem("recensioni") || "[]"); //recupera le recensioni nel localstorage e le converte in array
        //oppure inizializza un array vuoto
        recensioni.push(recensione); //aggiunge la nuova recensione all'array (push)
        localStorage.setItem("recensioni", JSON.stringify(recensioni)); //salva l'array nel localStorage

        input.value = ""; //pulisce l'input
    }
}

window.onload = caricaRecensioni; //la funzione caricaRecensioni viene eseguita quando la finestra viene caricata
