function loguear(){

    var user=document.getElementById("usuario").value;
    var pass=document.getElementById("pass").value;
     if ( user == "David" && pass == "12345") {
        alert("usuario y contraseña validos")
        window.location="sesion.html";
     } 
     else   
     {
        alert("intenta de nuevo");
     }
}