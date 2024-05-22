const panini = [ //array di panini
    {
        id: 0,
        nome: "Tomato Classic Burger",
        img: "/img/listaProdotti/panino1.png",
        prezzo: 8,
        tag1: "Lattuga",
        tag2: "Pomodoro",
        ingredienti: "Pane, hamburger, lattuga, pomodoro",
    },
    {
        id: 1,
        nome: "Crispy CheeseBurger",
        img: "/img/listaProdotti/panino2.png",
        prezzo: 9,
        tag1: "Bacon",
        tag2: "Cheddar",
        ingredienti: "Pane, hamburger, bacon, cheddar",
    },
    {
        id: 2,
        nome: "Crispy Spicy Burger",
        img: "/img/listaProdotti/panino3.png",
        prezzo: 9,
        tag1: "Cipolla",
        tag2: "Salsa piccante",
        ingredienti: "Pane, hamburger, cipolla, salsa piccante",
    },
    {
        id: 3,
        nome: "Veggie Burger",
        img: "/img/listaProdotti/panino4.png",
        prezzo: 7,
        tag1: "Lattuga",
        tag2: "Salsa vegetale",
        ingredienti: "Pane integrale, hambuger vegetale, lattuga, salsa vegetale",
    },
    {
        id: 4,
        nome: "Chicken Burger",
        img: "/img/listaProdotti/panino5.png",
        prezzo: 8,
        tag1: "Lattuga",
        tag2: "Pomodoro",
        ingredienti: "Pane, pollo fritto, lattuga, pomodoro",
    },
    {
        id: 5,
        nome: "BBQ Bacon Burger",
        img: "/img/listaProdotti/panino6.png",
        prezzo: 9,
        tag1: "Bacon",
        tag2: "Cipolla",
        ingredienti: "Pane, hamburger, bacon, cipolla, salsa BBQ",
    },
    {
        id: 6,
        nome: "Crispy Chicken Burger",
        img: "/img/listaProdotti/panino7.png",
        prezzo: 9,
        tag1: "Bacon",
        tag2: "Lattuga",
        ingredienti: "Pane, pollo fritto, bacon, lattuga",
    },
    {
        id: 7,
        nome: "Caprese Burger",
        img: "/img/listaProdotti/panino8.png",
        prezzo: 9,
        tag1: "Pomodoro",
        tag2: "Basilico",
        ingredienti: "Pane, hamburger, mozzarella, pomodoro, basilico",
    },
    {
        id: 8,
        nome: "Avocado Burger",
        img: "/img/listaProdotti/panino9.png",
        prezzo: 8,
        tag1: "Avocado",
        tag2: "Pomodoro",
        ingredienti: "Pane, hamburger, avocado, pomodoro",
    },
    {
        id: 9,
        nome: "Pesto Burger",
        img: "/img/listaProdotti/panino10.png",
        prezzo: 8,
        tag1: "Pesto",
        tag2: "Mozzarella",
        ingredienti: "Pane, hamburger, pesto, mozzarella",
    },
    {
        id: 10,
        nome: "Asian Burger",
        img: "/img/listaProdotti/panino11.png",
        prezzo: 7,
        tag1: "Cavolo",
        tag2: "Cetriolo",
        ingredienti: "Pane, hamburger, lattuga di cavolo, cetriolo",
    },
    {
        id: 11,
        nome: "Sweet Potato Burger",
        img: "/img/listaProdotti/panino12.png",
        prezzo: 9,
        tag1: "Patate dolci",
        tag2: "Lattuga",
        ingredienti: "Pane, hamburger, patate dolci, lattuga",
    },
    {
        id: 12,
        nome: "BBQ Chicken Burger",
        img: "/img/listaProdotti/panino13.png",
        prezzo: 9,
        tag1: "Bacon",
        tag2: "Cipolla",
        ingredienti: "Pane, pollo fritto, bacon, cipolla, salsa BBQ",
    },
    {
        id: 13,
        nome: "Rocket Crunch Burger",
        img: "/img/listaProdotti/panino14.png",
        prezzo: 8,
        tag1: "Rucola",
        tag2: "Grana",
        ingredienti: "Pane, hamburger, rucola, grana",
    },
];

const tabellaProdotti = document.querySelector("table");

const elementiPerRigaTabella = 3;

const mostraProdotti = (prodotti) => {
    let html = '<tr>';
    prodotti.forEach((prodotto, index) => {
        html += `
            <td>       
                <div class="card">
                    <img src=${prodotto.img} alt="${prodotto.nome}">
                    <div class="card__details">
                        <span class="tag">${prodotto.tag1}</span>
                        <span class="tag">${prodotto.tag2}</span>
                        <div class="name">${prodotto.nome}</div>
                        <div class="prezzo">${prodotto.prezzo}€</div>
                        <p>Ingredienti: ${prodotto.ingredienti}</p>
                        <button id="carrello" numeroProdotto="${prodotto.id}">Aggiungi al carrello</button>
                    </div>
                </div>
            </td>
        `;
        // Inserisce un nuovo <tr> ogni 4 elementi
        if ((index + 1) % elementiPerRigaTabella === 0 && index !== prodotti.length - 1) { //ogni elementiPerRigaTabella aggiunge un <tr> così da andare a capo e fare una nuova riga al posto di inserire tutti i panini in un unica riga
            html += '</tr><tr>';
        }
    });
    html += '</tr>';
    tabellaProdotti.innerHTML = html; //aggiungoo con innner html ogni panino alla tabella prodotti
};

mostraProdotti(panini); //richiamo la funzione all inizio così aggiunge tutti i panini dinamicamente


//FUNZIONE AGGIUNGI AL CARRELLO
let carrelloSidebar = document.body.querySelector("#titoloCarrello")

let totaleCarrello = document.body.querySelector(".cart-total")

let ListCarrello = []; //contiene tutti gli elemtni del carrello
let prezzoTotale = 0;

document.addEventListener("DOMContentLoaded", function() {
    // Seleziona tutti i pulsanti con la id "carrello"
    var buttons = document.querySelectorAll('#carrello');

    // Aggiungi un EventListener a ciascun pulsante
    buttons.forEach(function(button) { //ogni volta che viene premuto il pulsante aggiungi al carrello, prende il numero dell attributo custom numeroProdotto e poi inserisce il panino di quell'indice all'interno della lista carrello
        button.addEventListener('click', function() {

            let idProdotto = this.getAttribute('numeroProdotto');
            
            ListCarrello.push(panini[idProdotto])

            console.log(ListCarrello)

            let nuovoProdottoHtml = 
            `
            <div class="cart-item">
<img src="${panini[idProdotto].img}" alt="${panini[idProdotto].id}">
<div class="cart-item-info">
    <p class="cart-item-name">${panini[idProdotto].nome}</p>
    <p class="cart-item-description">${panini[idProdotto].ingredienti}</p>
</div>
<p class="cart-item-price">€${panini[idProdotto].prezzo}</p>
</div>
            `
            prezzoTotale += panini[idProdotto].prezzo; //dopo aver aggiunto il panino alla lista carrello calcola il prezzo totale mostrandolo in basso a destra sotto il carrello
            
            carrelloSidebar.innerHTML += nuovoProdottoHtml //aggiunge il nuovo prodotto al carrello con innerHtml

            totaleCarrello.innerHTML = "TOTALE: €" + prezzoTotale

        });
    });
});


//VAI AL PAGAMENTO

let btnPagamento = document.body.querySelector(".checkout-button");

btnPagamento.addEventListener('click', function(){ //salva il carrello nel local storage, così da mandarlo alla pagina del pagamento
    var ProdottiCarrello = JSON.stringify(ListCarrello);
    console.log(ProdottiCarrello)

// Salva la stringa JSON nell'localStorage con una chiave specifica
    localStorage.setItem('ProdottiCarrello', ProdottiCarrello);


})




