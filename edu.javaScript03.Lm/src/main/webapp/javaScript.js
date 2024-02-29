/**
 * 
 */

let arrayFijo = ["pepe", "juanito", "david", 9, true]

 function pedirUsuario(){
	 
	 let i = prompt ("INTRODUZCA UN VALOR");
	 let arrayUsuario = [i];
	 
	 let j = prompt ("INTRODUZCA OTRO VALOR");
	 arrayUsuario[0] = j;
	 
	 document.write(typeof(i));
	  document.write(typeof(j));
 }