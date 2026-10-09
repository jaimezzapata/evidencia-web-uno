function atenderCliente() {
    // Entradas al cine
    let entradaGeneral_2D = 12000
    let entradaSala_3D = 16000
    let entradaVIP_IMAX = 22000
    // Comidas y bebidas
    let crispetasGrandes = 10000
    let gaseosaGrande = 6000
    let perroCaliente = 8500
    // Combos
    let comboPersonal = 13500
    let comboPareja = 24000
    let comboFamiliar = 38000

let volverAlMenu = false
    while (volverAlMenu == false) {}


let finalizarFacturar = false
}

function facturarCliente() {
    // Descuentos
    let medioPago = prompt("Medio de pago: \n1 - Tarjeta CineStar Club\n2 - Efectivo")
    if (medioPago == 1) {
        subtotal = subtotal - (subtotal * 0.15)
    }
    else if (subtotal > 30000) {
        totalCompra = subtotal - (subtotal * 0.05)
    }
}
    
function balanceJornada() {
    
}

let user = prompt("Ingrese su usuario: ")
let repetir = true
    while (repetir == true) {
        let opcion = prompt("Bievenido, " + user + "\n¿Qué desea hacer? \n1 - Atender cliente\n2 - Ver balance de jornada\n3 - Cerrar taquilla")
        if (opcion == 1) {
            atenderCliente()
        } else if (opcion == 2) {
            balanceJornada()
        } else if (opcion == 3) {
            repetir = false
        }
    }