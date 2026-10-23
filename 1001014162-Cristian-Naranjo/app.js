let clientes = 0
let recaudado = 0
let productosVendidos = 0

function obtenerPrecio(departamento, producto) {
    if (departamento == 1) {
        if (producto == 1) {
            return 45000
        } else if (producto == 2) {
            return 12000
        } else {
            return 8000
        }
    } else if (departamento == 2) {
        if (producto == 1) {
            return 22000
        } else if (producto == 2) {
            return 15000
        } else {
            return 60000
        }
    } else {
        if (producto == 1) {
            return 35000
        } else if (producto == 2) {
            return 28000
        } else {
            return 18000
        }
    }
}

function calcularDescuento(subtotal, afiliado) {
    if (afiliado == 1) {
        return subtotal * 0.15
    } else if (subtotal > 70000) {
        return subtotal * 0.08
    } else {
        return 0
    }
}

function calcularTotal(subtotal, descuento, donacion) {
    return subtotal - descuento + donacion
}

function mostrarBalance(clientes, recaudado, productosVendidos) {
    let promedio = 0
    if (clientes > 0) {
        promedio = recaudado / clientes
    }
    console.log("****** Balance de la jornada ******")
    console.log("Clientes atendidos: " + clientes)
    console.log("Total recaudado: " + recaudado)
    console.log("Productos y servicios vendidos: " + productosVendidos)
    console.log("Promedio de gasto por cliente: " + promedio)
}

let seguir = true
while (seguir) {
    let opcion = prompt("Seleccione: \n1 - Atender cliente\n2 - Ver balance de la jornada\n3 - Salir del sistema")
    if (opcion == 1) {
        let subtotal = 0
        let cantidadCliente = 0
        let atendiendo = true
        while (atendiendo) {
            let departamento = prompt("Seleccione un departamento: \n1 - Alimentos y Nutrición\n2 - Accesorios y Juguetes\n3 - Servicios de Higiene y Cuidado\n4 - Finalizar compra y facturar")
            if (departamento == 1 || departamento == 2 || departamento == 3) {
                let eligiendo = true
                while (eligiendo) {
                    let producto = 0
                    if (departamento == 1) {
                        producto = prompt("Alimentos y Nutrición: \n1 - Bulto Concentrado Premium (3 Kg): $45000\n2 - Paquete de Galletas / Snacks: $12000\n3 - Lata de Alimento Húmedo: $8000\n4 - Volver al menú de departamentos")
                    } else if (departamento == 2) {
                        producto = prompt("Accesorios y Juguetes: \n1 - Correa y Collar Ajustable: $22000\n2 - Juguete Mordedor Interactivo: $15000\n3 - Cama Acolchada Mediana: $60000\n4 - Volver al menú de departamentos")
                    } else {
                        producto = prompt("Servicios de Higiene y Cuidado: \n1 - Baño Medicado y Cepillado: $35000\n2 - Corte de Pelo Canino/Felino: $28000\n3 - Limpieza Dental y Uñas: $18000\n4 - Volver al menú de departamentos")
                    }

                    if (producto == 1 || producto == 2 || producto == 3) {
                        let cantidad = parseFloat(prompt("Ingrese la cantidad: "))
                        if (cantidad > 0) {
                            subtotal = subtotal + obtenerPrecio(departamento, producto) * cantidad
                            cantidadCliente = cantidadCliente + cantidad
                            console.log("Agregado. Subtotal actual: " + subtotal)
                        } else {
                            alert("La cantidad debe ser mayor a 0")
                        }
                    } else if (producto == 4) {
                        eligiendo = false
                    } else {
                        alert("Opción no válida")
                    }
                }
            } else if (departamento == 4) {
                if (subtotal == 0) {
                    console.log("No hubo compras, así que no hay recibo para este cliente")
                } else {
                    let afiliado = prompt("¿Eres afiliado al Club de Mascotas? \n1 - Sí\n2 - No")
                    let descuento = calcularDescuento(subtotal, afiliado)
                    let donar = prompt("¿Desea donar $3000 al refugio de animales rescatados? \n1 - Sí\n2 - No")
                    let donacion = 0
                    if (donar == 1) {
                        donacion = 3000
                    }
                    let total = calcularTotal(subtotal, descuento, donacion)

                    console.log("========== RECIBO DE COMPRA - PET CENTER ==========")
                    console.log("Valor de la compra: " + subtotal)
                    console.log("Descuento aplicado: " + descuento)
                    console.log("Aporte al refugio: " + donacion)
                    console.log("VALOR FINAL A PAGAR: " + total)

                    clientes++
                    recaudado = recaudado + total
                    productosVendidos = productosVendidos + cantidadCliente
                }
                atendiendo = false
            } else {
                alert("Opción no válida")
            }
        }
    } else if (opcion == 2) {
        mostrarBalance(clientes, recaudado, productosVendidos)
    } else if (opcion == 3) {
        seguir = false
    } else {
        alert("Opción no válida")
    }
}

console.log("Caja cerrada. ¡Hasta mañana en Pet Center!")