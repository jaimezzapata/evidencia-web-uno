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

// Para finalizar ciclos
let volverAlMenu = false
let finalizarFacturar = false


function atenderCliente() {
    
}

function facturarCliente() {

}
    
function balanceJornada() {
    
}

let user = prompt("Ingrese su usuario: ")
console.log("****** Bievenido, " + user + " ******")
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