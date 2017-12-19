function bucleFor(){
	for(var i = 0; i < 10; i++){
		console.log(i);
	}
}

function comprobar(){
	console.log("comprobando");
}

function texto(){
	var txt = document.getElementById("nombre").value;
	window.alert(txt);
}

document.getElementById("btn").addEventListener("click", texto());