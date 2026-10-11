let clientesAtendidos = 0
let totalRecaudado = 0
let totalProductosVendidos = 0

const PORC_TARJETA = 15
const PORC_EFECTIVO = 5
const MINIMO_EFECTIVO = 30000
const DONACION = 2000

//Ejecicion de programa 
let jornadaActiva = true

while (jornadaActiva) {                                      // CICLO 1: menú principal
    let opcionPrincipal = menuPrincipal()

    if (opcionPrincipal === 1) {
        let subtotal = 0                                     // se reinicia con cada cliente
        let productosCliente = 0
        let comprando = true

        while (comprando) {                                  // CICLO 2: áreas de venta
            let area = menuAreas()

            if (area >= 1 && area <= 3) {
                let eligiendo = true

                while (eligiendo) {                          // CICLO 3: productos y cantidades
                    let producto = leerNumero(menuProductos(area))

                    if (producto === 4) {
                        eligiendo = false
                    } else if (producto >= 1 && producto <= 3) {
                        let cantidad = leerNumero("Ingrese la cantidad:")

                        if (cantidad > 0 && Number.isInteger(cantidad)) {
                            subtotal += obtenerPrecio(area, producto) * cantidad
                            productosCliente += cantidad
                            alert("Agregado. Subtotal actual: " + formatoPesos(subtotal))
                        } else {
                            alert("La cantidad debe ser un número entero mayor a 0")
                        }
                    } else {
                        alert("Opción no válida")
                    }
                }
            } else if (area === 4) {
                comprando = false

                if (subtotal === 0) {
                    alert("No se agregaron productos. Compra cancelada.")
                } else {
                    let tarjeta = leerNumero("¿Tiene la Tarjeta CineStar Club?\n1 - Sí\n2 - No")
                    let efectivo = 2                         // por defecto: No
                    if (tarjeta !== 1) {
                        efectivo = leerNumero("¿Paga en efectivo?\n1 - Sí\n2 - No")
                    }

                    let descuento = calcularDescuento(subtotal, tarjeta, efectivo)

                    let donacion = 0
                    let quiereDonar = leerNumero("¿Desea donar $2.000 al fondo de fomento cinematográfico?\n1 - Sí\n2 - No")
                    if (quiereDonar === 1) {
                        donacion = DONACION
                    }

                    let total = calcularTotal(subtotal, descuento, donacion)
                    alert(armarFactura(subtotal, descuento, donacion, total))

                    // Se acumula en la jornada solo cuando la compra se facturó
                    clientesAtendidos++
                    totalRecaudado += total
                    totalProductosVendidos += productosCliente
                }
            } else {
                alert("Opción no válida")
            }
        }
    } else if (opcionPrincipal === 2) {
        mostrarBalance()
    } else if (opcionPrincipal === 3) {
        jornadaActiva = false
        alert("Taquilla cerrada. ¡Hasta mañana!")
    } else {
        alert("Opción no válida")
    }
}
//Seccion de las funciones

function leerNumero(mensaje){
    return Number(prompt(mensaje))
}

function menuPrincipal(){
    return leerNumero("---CINESTAR---\n1 - Atender cliente\n2 - Ver balance de la jornada\n3 - Salir del sistema")
}
function menuAreas(){
    return leerNumero("---AREAS DE VENTA---\n1 - Entradas de cine\n2 - Confiteria y Snacks\n3 - Combos especiales\n4 -Finalizar compra y facturar")
}
function menuProductos(area){
    if (area === 1){
        return "--- ENTRADAS ---\n1 - Entrada General 2D: 12.000\n2 - Entrada Sala 3D: 16.000\n3 - Entrada VIP / MAX: 22.000\n4 - Volver al menu de areas"
    }
    else if (area === 2){
        return "--- CONFITERIA ---\n1 - Crispetas Grandes: 10.000\n2 - Gaseosa Grande: 6.000\n3 - Perro Caliente: 8.500\n4 - Volver al menu de areas"
    }
    else if (area === 3){
        return "--- COMBOS ---\n1 - Combo Personal: 13.500\n2 - Combo Pareja: 24.000 \n3 - Combo Familiar: 38.000\n4 -Volver al menu de areas"
    }
}
function obtenerPrecio(area, producto){
    if (area === 1) {
        if (producto === 1) return 12000
        if (producto === 2) return 16000
        if (producto === 3) return 22000
    } else if (area === 2) {
        if (producto === 1) return 10000
        if (producto === 2) return 6000
        if (producto === 3) return 8500
    } else if (area === 3) {
        if (producto === 1) return 13500
        if (producto === 2) return 24000
        if (producto === 3) return 38000
    }
    return 0
}
function formatoPesos(valor){
    return "$" + Math.round(valor).toLocaleString("es-CO")
}
function calcularDescuento(subtotal, tieneTarjeta, pagaEfectivo){
    if (tieneTarjeta){
        return subtotal * PORC_TARJETA / 100
    }
    if (pagaEfectivo && subtotal > MINIMO_EFECTIVO){
        return   subtotal * PORC_EFECTIVO / 100
    }
    return 0
}
function calcularTotal(subtotal,  descuento, donacion){
    return subtotal - descuento + donacion
}
function armarFactura(subtotal , descuento , donacion, total){
    return "--- FACTURA ---\n" +
    "Subtotal: " + formatoPesos(subtotal) + "\n" +
    "Descuento: -" + formatoPesos(descuento) + "\n" +
    "Donación: " + formatoPesos(donacion) + "\n" +
    "TOTAL A PAGAR: " + formatoPesos(total)
}
function mostrarBalance() {
    let promedio = 0
    if (clientesAtendidos > 0) {                 
        promedio = totalRecaudado / clientesAtendidos
    }
    alert("--- BALANCE DE LA JORNADA ---\n" +
        "Clientes atendidos: " + clientesAtendidos + "\n" +
        "Total recaudado: " + formatoPesos(totalRecaudado) + "\n" +
        "Entradas y productos vendidos: " + totalProductosVendidos + "\n" +
        "Promedio por cliente: " + formatoPesos(promedio))
}