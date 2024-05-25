const registraBtn = document.getElementById("registrazione"); //id registrazione (che si trova nella pagina Prima_index.html) e lo assegna alla variabile registraBtn
const loginBtn = document.getElementById("log"); //id log (che si trova nella pagina Prima_index.html)e lo assegna alla variabile loginBtn

registraBtn.addEventListener("click", function() { // aggiunge un event listener al bottone di registrazione per l'evento "click"
    const width = 700;
    const height = 500;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let newWindow = window.open("Prima_Registrazione.html", "", "width = " + width + ",height = " + height + ",left = " + left + ",top = " + top);
    //apre una nuova finestra con le dimensioni e la posizione specificate, caricando la pagina "Prima_Registrazione.html"
});
loginBtn.addEventListener("click", function() {
    const width = 700;
    const height = 500;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    let newWindow = window.open("Prima_Login.html", "", "width = " + width + ",height = " + height + ",left = " + left + ",top = " + top);
    //apre una nuova finestra con le dimensioni e la posizione specificate, caricando la pagina "Prima_Login.html"
});



    


