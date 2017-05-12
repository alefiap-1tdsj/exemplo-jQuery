//var n = navigator.userAgent;

//document.write("<p>Informações do navegador</p>\n" + n);
/*
if (2<1) {
  alert("Dois é menor que um!");
}else {
  alert("Dois não é menor que um!");
}
*/

function validaCampo(nomeElemento) {

  if (nomeElemento.tNuser.value == "") {
    nomeElemento.tNuser.style="box-shadow:1px 1px 10px #ff0000;";
    document.getElementById("iWarning1").innerHTML="*";
    return false;
  }else if(nomeElemento.tSenha.value == ""){
    nomeElemento.tSenha.style="box-shadow:1px 1px 10px #ff0000;";
    document.getElementById("iWarning2").innerHTML="*";
    return false;
  }else{
    return true;
  }

}
function validaCor(nomeInput) {

    nomeInput.style="box-shadow:none;";
    document.getElementById("iWarning1").innerHTML="";
    document.getElementById("iWarning2").innerHTML="";
}
