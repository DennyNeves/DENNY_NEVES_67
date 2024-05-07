let timeUsuario = ""; 
let elemento = document.querySelector("#time-usuário");

while (timeUsuario == "") {
   timeUsuario = prompt("Chupa XITA! Mas, qual é o time que você torce?");
}

if(timeUsuario == null){
    elemento.textContent = " Seleção do Resto do MUNDO";
}
else{
    elemento.textContent = timeUsuario;
}
