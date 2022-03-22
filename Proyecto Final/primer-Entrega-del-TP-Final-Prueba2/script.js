let viajeBrasil = 800;
let viajeEstadosUnidos = 1200;
let viajeEspaña = 1800;
let viaje ;

let idCliente;
let nombreCliente ;
let direccionCliente; 
let telefonoCliente;
let nombreProducto;
let precio;
let cantidad;
let total;
let subtotal;
let p=0;
let iva;
let subtotalP=0;
let fecha= new Date();
let imprimir;
let numero_Factura=0;

function calcularViajePrecio(viaje) {
  let iva = 1.21;
  viaje = viaje * iva;
  return viaje;
}
function ShowSelected()
{
/* Para obtener el valor */
var cod = document.getElementById("producto").value;
alert(cod);
 
/* Para obtener el texto */
var combo = document.getElementById("producto");
var selected = combo.options[combo.selectedIndex].text;

}

if (viaje == "Brasil" || viaje == "brasil") {
  viajeBrasil = calcularViajePrecio(viajeBrasil);
  console.log("Su vuelo con iva cuesta: $" + viajeBrasil + ".");
} else if (viaje == "Estados Unidos" || viaje == "estados unidos") {
  viajeEstadosUnidos = calcularViajePrecio(viajeEstadosUnidos);
  console.log("Su vuelo con iva cuesta: $" + viajeEstadosUnidos + ".");
}
if (viaje == "España" || viaje == "españa") {
  viajeEspaña = calcularViajePrecio(viajeEspaña);
  console.log("Su vuelo con iva cuesta: $" + viajeEspaña + ".");
}
const pasajeros = [];
function Persona(nombre, apellido, dni, numeroDeVuelo) {
  this.nombre = nombre.nombre;
  this.edad = apellido.edad;
  this.dni = dni.dni;
  this.numeroDeVuelo = numeroDeVuelo.numeroDeVuelo;
}

function cantidadDePasajeros() {
  let nombre = prompt("Decime tu Nombre: ");
  let apellido = prompt("Decime tu Apellido: ");
  let dni = prompt("Decime cual es tu numero de Documento ");
  let numeroDeVuelo = prompt("Decime tu numero de Boleto ");
  pasajeros.push([nombre, apellido, dni, numeroDeVuelo]);
}



function generarFactura(){

  
  idCliente=document.getElementById("idCliente").value;
  nombreCliente=document.getElementById("nombreCliente").value;
  direccionCliente=document.getElementById("direccionCliente").value;
  telefonoCliente=document.getElementById("telefonoCliente").value;

 
  
  document.write(fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear()+"</br>"+"</br>"+"</br>");
  document.write("Identificacion del Cliente:"+'&nbsp;'+idCliente+"<br>"+"<br>");
  document.write("Nombre del Cliente:"+'&nbsp;'+nombreCliente+"<br>"+"<br>");
  document.write("Direccion:"+'&nbsp;'+direccionCliente+"<br>"+"<br>");
  document.write("Telefono:"+'&nbsp;'+telefonoCliente+"<br>"+"<br>"+"<br>");
  
  
for (subtotal=0; nombreProducto != "*"; subtotal++) {
cantidad=parseInt(prompt('Ingrese Cantidad'));
document.write("Cantidad:  "+'&nbsp;'+cantidad+'&nbsp;'+'&nbsp;');

nombreProducto=prompt('Ingrese Nombre del pasajero');
document.write("Nombre Producto:  "+'&nbsp;'+nombreProducto+'&nbsp;'+'&nbsp;');

precio=viaje;
document.write("Precio:  "+'&nbsp;'+precio+'&nbsp;'+'&nbsp;');




nombreProducto=prompt('Ingrese "*" Para terminar o cualquier tecla para continuar');

  subtotal=precio*cantidad;
  subtotalP=subtotalP+parseInt(subtotal);
  iva=subtotalP*0.19;
  total=subtotalP+iva;
  

  document.write("SubTotal :"+'&nbsp;'+subtotal+"<br>"+"<br>"+"<br>");
  

} 
document.write("Subtotal : "+'&nbsp;'+subtotalP+"<br>"+"<br>");
document.write("Iva 19% :"+'&nbsp;'+iva+"<br>"+"<br>");
document.write("Total :"+'&nbsp;'+total+"<br>"+"<br>");
document.write('<button onclick="window.print()">Imprimir Factura</button>');

}
