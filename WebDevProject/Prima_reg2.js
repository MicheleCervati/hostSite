let btn = document.querySelector('input[type = "submit"]');// seleziona il bottone di submit (input[type="submit"]) e lo assegna alla variabile btn
btn.addEventListener("click", function(){ //aggiunge un eventListener al bottone per l'evento click
    //seleziona l'input e ne ottiene il valore (.value)
    let userName = document.querySelector('input[placeholder="Nome Utente"]').value;
    let email = document.querySelector('input[placeholder="Email"]').value;
    let password = document.querySelector('input[type = "password"]').value;
    //controlla che tutti i campi siano pieni
    if(userName != "" && email != "" && password != ""){
        localStorage.setItem("nome", JSON.stringify(userName));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));
        window.close();
    }
    else{
        alert("per cortesia inserire i dati");//messaggio se non sono stati riempiti i campi
    }
});