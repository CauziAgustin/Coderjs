const botonComprar = document.getElementById("boton-comprar");
botonComprar.addEventListener("click", () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Acabas de realizar una compra con exito',
        showConfirmButton: false,
        timer: 3000
      })
})
const botonVaciar = document.getElementById("boton-vaciar");
botonVaciar.addEventListener("click", () => {
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Acabas de Vaciar tu carrito',
        showConfirmButton: false,
        timer: 3000
      })
})
