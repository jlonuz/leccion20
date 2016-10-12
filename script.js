// tu codigo va aca

// ejercicio 1

function callbackPromedio (a, b, c, callback){
	var promedio = (a+b+c)/3;

	return callback(promedio);

}



// ejercicio 2

var cambioSegundos=1;

function segundero() {
	document.getElementById("titulo").innerHTML = cambioSegundos++;

}
setInterval(segundero, 1000);