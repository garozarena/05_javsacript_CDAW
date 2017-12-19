function mostrar(){
	var inicio = parseInt(document.getElementById("inicio").value);
	var final = parseInt(document.getElementById("final").value);
	if(inicio >= final){window.alert("el inicio tiene que ser menor que el final");}
	else{
		for(var i=inicio; i<=final;i++){
			window.alert(i);
		}
	}
}

function calcularPrecio(){
	var precio = document.getElementById("unidad").value*document.getElementById("precio").value;
	window.alert(precio.toFixed(2));
}

function comprobarNumero(){
	var numUser = document.getElementById("numUser").value;
	if(numUser == 17){window.alert("Enhorabuena!");}
	else if(numUser<17){window.alert("El número es mayor");}
	else{window.alert("El número es menor");}
}