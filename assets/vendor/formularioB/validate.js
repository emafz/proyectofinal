function capturar(){
  var nombre=document.getElementById ("name").value;
  var email=document.getElementById ("email").value;
  var motivo=document.getElementById ("subject").value;
  var mensaje=document.getElementById ("mensaje").value;
  if (nombre=="") {
    alert("El nombre es obligatorio");
    document.getElementById ("name").focus();
  }else{
    if (email=="") {
      alert("Su direccion de email es oblogatoria");
      document.getElementById ("email").focus();
  }else{
    console.log (nombre + " " +email + " " +motivo + " " +mensaje);
    document.getElementById ("name").value="";
    document.getElementById ("email").value="";
    document.getElementById ("subject").value="";
    document.getElementById ("mensaje").value="";
  }
  }
}