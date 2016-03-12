/**Pregunta 5 (3 ptos)
Crear la clase (con la función constructora) de teléfono, 
un teléfono tiene un número asignado que se le pasa a la 
función constructora, y carácterístcas como marca y color.
 (1 pto)

Crear un método que se llame marcar que aumente el 
contador de llamadas en uno. (1 pto)

Crear un arreglo de teléfonos y crear una función 
reciba un arreglo de teléfonos y que permita devolver 
otro arreglo con todos los teléfono de una marca. (1 pto)
*/

function Telefono(numero){
	this.numero = numero;
	this.marca= "lg";
	this.colr= "negro";
	this.cont=0;
	this.marcar = function(){
		cont++;
	}
}

var telefono1 = new Telefono(000);

var arrtel=[new Telefono(111),new Telefono(222),new Telefono(333)]

function buscarMar(arrtel,marca){
	var arr=[];
	for(var i=0;i<arrtel.length;i++)
	{
		if(arrtel[i].marca==marca)
		{
			arr.push(arrtel[i]);
		}
	}
	return arr;
}

console.log(buscarMar(arrtel,"lg"));