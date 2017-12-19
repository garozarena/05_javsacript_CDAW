function viajar(){
	var precio = "";
	var viaje = window.prompt("Escribe un destino");

	viaje = viaje.toLowerCase();
	viaje = (viaje = "parís") ? "paris" : (viaje = "berlín") ? "berlin" : viaje;
	
	switch(viaje){
	case "roma": 
		precio=500;
		break;
	case "paris": 
		precio=450;
		break;
	case "berlin": 
		precio=388;
		break;
	default:
		precio="Pide precio";
		break;
	}
	console.log(precio);
}