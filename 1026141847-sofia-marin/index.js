let clientesAtendidos = 0
let totalRecaudado = 0
let totalProductosVendidos = 0

function atenderCliente() {
    let entradaGeneral_2D = 12000
    let entradaSala_3D = 16000
    let entradaVIP_IMAX = 22000

    let crispetasGrandes = 10000
    let gaseosaGrande = 6000
    let perroCaliente = 8500

    let comboPersonal = 13500
    let comboPareja = 24000
    let comboFamiliar = 38000

    let subtotal = 0
    let productosCliente = 0
    let volverAlMenu = false

    while (volverAlMenu == false) {
        let areasVenta = prompt("Seleccione el área de venta: \n1 - Entradas de Cine\n2 - Confitería y Snacks\n3 - Combos Especiales\n4 - Finalizar compra y facturar")

        if (areasVenta == 1) {
            let volverProductos = false

            while (volverProductos == false) {
                let opcion = prompt("Entradas de Cine:\n1 - Entrada General 2D: $12.000\n2 - Entrada Sala 3D: $16.000\n3 - Entrada VIP / IMAX: $22.000\n4 - Volver al menú de áreas")

                if (opcion == 1 || opcion == 2 || opcion == 3) {
                    let cantidad = 0

                    while (cantidad <= 0) {
                        cantidad = Number(prompt("Ingrese la cantidad de entradas:"))

                        if (cantidad <= 0 || !Number.isInteger(cantidad)) {
                            alert("Ingrese una cantidad entera mayor que 0")
                            cantidad = 0
                        }
                    }

                    if (opcion == 1) {
                        subtotal = subtotal + entradaGeneral_2D * cantidad
                    } else if (opcion == 2) {
                        subtotal = subtotal + entradaSala_3D * cantidad
                    } else if (opcion == 3) {
                        subtotal = subtotal + entradaVIP_IMAX * cantidad
                    }

                    productosCliente = productosCliente + cantidad
                    alert("Producto agregado correctamente")
                } else if (opcion == 4) {
                    volverProductos = true
                } else {
                    alert("Opción inválida")
                }
            }

        } else if (areasVenta == 2) {
            let volverProductos = false

            while (volverProductos == false) {
                let opcion = prompt("Confitería y Snacks:\n1 - Crispetas Grandes: $10.000\n2 - Gaseosa Grande: $6.000\n3 - Perro Caliente: $8.500\n4 - Volver al menú de áreas")

                if (opcion == 1 || opcion == 2 || opcion == 3) {
                    let cantidad = 0

                    while (cantidad <= 0) {
                        cantidad = Number(prompt("Ingrese la cantidad de productos:"))

                        if (cantidad <= 0 || !Number.isInteger(cantidad)) {
                            alert("Ingrese una cantidad entera mayor que 0")
                            cantidad = 0
                        }
                    }

                    if (opcion == 1) {
                        subtotal = subtotal + crispetasGrandes * cantidad
                    } else if (opcion == 2) {
                        subtotal = subtotal + gaseosaGrande * cantidad
                    } else if (opcion == 3) {
                        subtotal = subtotal + perroCaliente * cantidad
                    }

                    productosCliente = productosCliente + cantidad
                    alert("Producto agregado correctamente")
                } else if (opcion == 4) {
                    volverProductos = true
                } else {
                    alert("Opción inválida")
                }
            }

        } else if (areasVenta == 3) {
            let volverProductos = false

            while (volverProductos == false) {
                let opcion = prompt("Combos Especiales:\n1 - Combo Personal: $13.500\n2 - Combo Pareja: $24.000\n3 - Combo Familiar: $38.000\n4 - Volver al menú de áreas")

                if (opcion == 1 || opcion == 2 || opcion == 3) {
                    let cantidad = 0

                    while (cantidad <= 0) {
                        cantidad = Number(prompt("Ingrese la cantidad de combos:"))

                        if (cantidad <= 0 || !Number.isInteger(cantidad)) {
                            alert("Ingrese una cantidad entera mayor que 0")
                            cantidad = 0
                        }
                    }

                    if (opcion == 1) {
                        subtotal = subtotal + comboPersonal * cantidad
                    } else if (opcion == 2) {
                        subtotal = subtotal + comboPareja * cantidad
                    } else if (opcion == 3) {
                        subtotal = subtotal + comboFamiliar * cantidad
                    }

                    productosCliente = productosCliente + cantidad
                    alert("Combo agregado correctamente")
                } else if (opcion == 4) {
                    volverProductos = true
                } else {
                    alert("Opción inválida")
                }
            }

        } else if (areasVenta == 4) {
            if (productosCliente > 0) {
                volverAlMenu = true
            } else {
                alert("Debe agregar al menos un producto antes de facturar")
            }
        } else {
            alert("Opción inválida")
        }
    }

    let totalCompra = facturarCliente(subtotal)

    clientesAtendidos = clientesAtendidos + 1
    totalRecaudado = totalRecaudado + totalCompra
    totalProductosVendidos = totalProductosVendidos + productosCliente
}

function facturarCliente(subtotal) {
    let descuento = 0
    let donacion = 0

    let tarjetaClub = prompt("¿Tiene tarjeta CineStar Club?\n1 - Sí\n2 - No")

    while (tarjetaClub != 1 && tarjetaClub != 2) {
        tarjetaClub = prompt("Opción inválida\n1 - Sí\n2 - No")
    }

    if (tarjetaClub == 1) {
        descuento = subtotal * 0.15
    } else {
        let medioPago = prompt("Medio de pago:\n1 - Efectivo\n2 - Otro medio de pago")

        while (medioPago != 1 && medioPago != 2) {
            medioPago = prompt("Opción inválida\n1 - Efectivo\n2 - Otro medio de pago")
        }

        if (medioPago == 1 && subtotal > 30000) {
            descuento = subtotal * 0.05
        }
    }

    let respuestaDonacion = prompt("¿Desea donar $2.000 al fondo de fomento cinematográfico?\n1 - Sí\n2 - No")

    while (respuestaDonacion != 1 && respuestaDonacion != 2) {
        respuestaDonacion = prompt("Opción inválida\n1 - Sí\n2 - No")
    }

    if (respuestaDonacion == 1) {
        donacion = 2000
    }

    let totalCompra = subtotal - descuento + donacion

    alert("Resumen de la compra:\nSubtotal: $" + subtotal + "\nDescuento: $" + descuento + "\nDonación: $" + donacion + "\nTotal a pagar: $" + totalCompra)

    return totalCompra
}

function balanceJornada() {
    let promedioGasto = 0

    if (clientesAtendidos > 0) {
        promedioGasto = totalRecaudado / clientesAtendidos
    }

    alert("Balance de la jornada:\nClientes atendidos: " + clientesAtendidos + "\nTotal recaudado: $" + totalRecaudado + "\nEntradas y productos vendidos: " + totalProductosVendidos + "\nPromedio de gasto por cliente: $" + Math.round(promedioGasto))
}

let user = prompt("Ingrese su usuario:")
let repetir = true

while (repetir == true) {
    let opcion = prompt("Bienvenido, " + user + "\n¿Qué desea hacer?\n1 - Atender cliente\n2 - Ver balance de jornada\n3 - Cerrar taquilla")

    if (opcion == 1) {
        atenderCliente()
    } else if (opcion == 2) {
        balanceJornada()
    } else if (opcion == 3) {
        repetir = false
        alert("Taquilla cerrada\nTotal recaudado: $" + totalRecaudado)
    } else {
        alert("Opción inválida")
    }
}