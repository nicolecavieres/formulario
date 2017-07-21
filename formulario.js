
var formulario=document.getElementById("formu");


formulario.onsubmit = function(){
	alert("Tu mensaje ha sido enviado");
	ga('send', 'event', 'Form','submit');
};





