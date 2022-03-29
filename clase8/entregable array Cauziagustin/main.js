let viajeBrasil = 800;
let viajeEstadosUnidos = 1200;
let viajeEspaña = 1800;
alert("Actualmente contamos con Vuelos a Brasil, Estados Unidos y España.");
let viaje = prompt("A donde deseas ir?");
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
let cantidad = prompt("Cuantas Personas viajan?");
for (let i = 0; i < cantidad; i++) {
  cantidadDePasajeros();
}
console.log(pasajeros);
