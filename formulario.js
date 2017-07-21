
/*
document.getElementById("btnForm").addEventListener("submit",function a (){
	var alerta = document.getElementById("alerta");
	alerta.style.display="value";
	alert("hoola")
	});


	
*/

var alerta = document.getElementById("alerta");
var formulario=document.getElementById("formu");

formulario.onsubmit = function(){
	ga('send', 'event', 'Form','submit');
};

	alerta.style.visibility="visible"


var x = document.getElementById("x");
x.onclick = function(){
	alerta.style.visibility="hidden"
}



