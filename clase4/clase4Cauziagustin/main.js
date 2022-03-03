let viajeBrasil=800;
let viajeEstadosUnidos=1200;
let viajeEspaña=1800;
alert("Actualmente contamos con Vuelos a Brasil, Estados Unidos y España.")
let viaje = prompt("A donde deseas ir?");
function calcularViajePrecio(viaje){
    let iva= 1.21;
    viaje=viaje* iva;
    return viaje;
}
if(viaje=="Brasil" || viaje=="brasil"){
    viajeBrasil=calcularViajePrecio(viajeBrasil);
    console.log("Su vuelo con iva cuesta: $" +viajeBrasil+ ".");
}else if(viaje=="Estados Unidos" || viaje=="estados unidos"){
    viajeEstadosUnidos=calcularViajePrecio(viajeEstadosUnidos);
    console.log("Su vuelo con iva cuesta: $" +viajeEstadosUnidos+ ".");
}if(viaje=="España" || viaje=="españa"){
    viajeEspaña=calcularViajePrecio(viajeEspaña);
    console.log("Su vuelo con iva cuesta: $" +viajeEspaña+ ".");
}
