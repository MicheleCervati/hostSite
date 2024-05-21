

document.body.querySelector("form").addEventListener("submit",function(event) //eventListener per l'evento submit
{
    event.preventDefault(); //evita il ricaricamento della pagina
    let input=document.body.querySelectorAll("input"); // seleziona tutti gli elementi input presenti nel body e li assegna alla variabile inpu
    if (localStorage.getItem("email")==input[0].value && localStorage.getItem("password")==input[1].value) // Verifica se i valori di email e password corrispondono a quelli memorizzati nel localStorage
        {
            // imposta l'elemento "logged" nel localStorage come true
            localStorage.setItem("logged", true);
            window.opener.location.href="Prima_index.html";  //per mandarti alla pagina "Prima_index.html"
            close();
        }else{ //chiude la finestra 
            let div=document.createElement("div");
            div.className="error-message";
            let p=document.createElement("p");
            p.className="error";
            p.textContent="dati inseriti non validi"; // imposta il testo del paragrafo come "dati inseriti non validi"
            div.appendChild(p); // aggiunge il paragrafo p al div
            document.body.appendChild(div); // aggiunge il div al body del documento
        }
});