function obtenerDatos () {
	var constantes = JSON.parse(localStorage.getItem('constantes'));
	return constantes;
}