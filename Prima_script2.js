let btn = document.querySelector('input[type = "submit"]');
btn.addEventListener("click", function(){
    let userName = document.querySelector('input[placeholder="Nome Utente"]').value;
    let email = document.querySelector('input[placeholder="Email"]').value;
    let password = document.querySelector('input[type = "password"]').value;
    if(userName != "" && email != "" && password != ""){
        localStorage.setItem("nome", JSON.stringify(userName));
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));
        alert("Log In effettuato!")
        window.close();
    }
    else{
        alert("per cortesia inserire i dati");
    }
});
