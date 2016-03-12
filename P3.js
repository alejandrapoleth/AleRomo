/**Pregunta 3 (1 ptos)
Se pide una función que recibe un arreglo como parámetro y
 devuelva una copia del arreglo.

Probar con un ejemplo sencillo que funcione.
*/

var arr = [1,2,3,4,5,6]
var arrcopia;
console.log(arr);
console.log(copiaArr(arr));

function copiaArr(arr){
	arrcopia=arr.map(function(elem){ return elem;});
	return arrcopia;
}
