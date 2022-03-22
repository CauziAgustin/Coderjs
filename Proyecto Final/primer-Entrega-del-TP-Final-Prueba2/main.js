let viajeBrasil = 800;
let viajeEstadosUnidos = 1200;
let viajeEspaña = 1800;



var idCliente;
var nombreCliente ;
var direccionCliente; 
var telefonoCliente;
var nombreProducto;
var precio;
var cantidad;
var total;
var subtotal;
var p=0;
var iva;
var subtotalP=0;
var fecha= new Date();
var imprimir;
var numero_Factura=0;
//let cantidad = prompt("Cuantas Personas viajan?");


function generarFactura(){
  idCliente=document.getElementById("idCliente").value;
  nombreCliente=document.getElementById("nombreCliente").value;
  direccionCliente=document.getElementById("direccionCliente").value;
  telefonoCliente=document.getElementById("telefonoCliente").value;
  
  document.write("Hora: "+ fecha.getHours() +":"+fecha.getMinutes() +":"+fecha.getSeconds() + "- " + "Fecha: "+fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear()+"</br>"+"</br>"+"</br>");
  document.write("Identificacion del Titular:"+'&nbsp;'+idCliente+"<br>"+"<br>");
  document.write("Nombre del Titular:"+'&nbsp;'+nombreCliente+"<br>"+"<br>");
  document.write("Direccion del Titular:"+'&nbsp;'+direccionCliente+"<br>"+"<br>");
  document.write("Telefono del Titular:"+'&nbsp;'+telefonoCliente+"<br>"+"<br>"+"<br>");

  for (subtotal=0; nombreProducto != "*"; subtotal++) {
    cantidad=prompt("Ingrese la cantidad de Boletos: ");
    nombreProducto=prompt('Ingrese Nombre del Pasajero');
    document.write("Nombre del pasajero numero:  "+'&nbsp;'+nombreProducto+'&nbsp;'+'&nbsp;');
    precio=parseFloat(prompt('Ingrese Precio'));
    document.write("Precio:  "+'&nbsp;'+precio+'&nbsp;'+'&nbsp;');
    cantidad=parseInt(prompt('Ingrese Cantidad'));
    document.write("Cantidad:  "+'&nbsp;'+cantidad+'&nbsp;'+'&nbsp;');

    nombreProducto=prompt('Ingrese "*" Para terminar o cualquier tecla para continuar');
    subtotal=precio*cantidad;
    subtotalP=subtotalP+parseInt(subtotal);
    iva=subtotalP*0.21;
    total=subtotalP+iva;
    document.write("SubTotal :"+'&nbsp;'+subtotal+"<br>"+"<br>"+"<br>");
  } 
document.write("Subtotal : "+'&nbsp;'+subtotalP+"<br>"+"<br> Iva 19% :"+'&nbsp;'+iva+"<br>"+"<br>");
document.write("Total :"+'&nbsp;'+total+"<br>"+"<br>");
document.write('<button onclick="window.print()">Imprimir Factura</button>');
}



// alert("Actualmente contamos con Vuelos a Brasil, Estados Unidos y España.");
//let viaje = prompt("A donde deseas ir?");
function calcularViajePrecio(viaje) {
  let iva = 1.21;
  viaje = viaje * iva;
  return viaje;
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
function Persona(nombreCompleto, apellido, dni, numeroDeVuelo) {
  this.nombreCompleto = nombreCompleto.nombreCompleto;
  this.edad = apellido.edad;
  this.dni = dni.dni;
  this.numeroDeVuelo = numeroDeVuelo.numeroDeVuelo;
}

function cantidadDePasajeros() {
  let nombreCompleto = prompt("Decime tu Nombre Completo: ");
  let apellido = prompt("Decime tu Apellido: ");
  let dni = prompt("Decime cual es tu numero de Documento ");
  let numeroDeVuelo = prompt("Decime tu numero de Boleto ");
  pasajeros.push([nombre, apellido, dni, numeroDeVuelo]);
}

for (let i = 0; i < cantidad; i++) {
  cantidadDePasajeros();
}

