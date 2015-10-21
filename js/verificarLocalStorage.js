function verificarLocalStorage () {
	/*
		 verifico si se encuentran de ser asi lo retorno
	*/
	var bandera = false;

	if(obtenerDatos() !== null){
		bandera = true;
	}
	return bandera;
}