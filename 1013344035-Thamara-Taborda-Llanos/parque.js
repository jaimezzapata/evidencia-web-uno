let subtotalCompra = 0;
let pasesCompra = 0;
let totalRegistros = 0;
let totalPersonas = 0;
let totalPasesVendidos = 0;
let dineroRecaudado = 0;

function leerEntero(mensaje, minimo, maximo) {
    let numero;
    let entrada;

    while (true) {
        entrada = prompt(mensaje);
        if (entrada === null) {
            return -1;
        }
        numero = Number(entrada);
        if (
            entrada.trim() !== "" &&
            Number.isInteger(numero) &&
            numero >= minimo &&
            numero <= maximo
        ) {
            return numero;
        }
        alert("Dato invalido. Ingresa un numero entero entre " + minimo + " y " + maximo + ".");
    }
}


// Menú principal
function menuPrincipal() {
    let opcionPrincipal = 0;
    while (opcionPrincipal !== 3) {
        opcionPrincipal = leerEntero(
            "AVENTURA PARK\n\n" +
            "1. Registrar visitante o grupo\n" +
            "2. Ver balance del dia\n" +
            "3. Salir del sistema\n\n" +
            "Selecciona una opcion:",
            1,
            3
        );
        if (opcionPrincipal === -1) {
            opcionPrincipal = 3;
        } else if (opcionPrincipal === 1) {
            registrarVisitante();
        } else if (opcionPrincipal === 2) {
            verBalance();
        } else if (opcionPrincipal === 3) {
            alert("Gracias por visitar Aventura Park.");
        }
    }
}

// 4. Registro visitante
function registrarVisitante() {
    let personas;
    let opcionZona = 0;

    subtotalCompra = 0;
    pasesCompra = 0;

    personas = leerEntero(
        "REGISTRO DE VISITANTE O GRUPO\n\n" +
        "Cuantas personas integran el grupo?",
        1,
        1000
    );

    if (personas === -1) {
        return;
    }

    // Menú de zonas
    while (opcionZona !== 4) {
        opcionZona = leerEntero(
            "MENU DE ZONAS\n\n" +
            "1. Zona Extrema\n" +
            "2. Zona Familiar e Infantil\n" +
            "3. Zona Acuatica\n" +
            "4. Finalizar compra y facturar\n\n" +
            "Subtotal actual: " + subtotalCompra +
            "\nPases seleccionados: " + pasesCompra +
            "\nSelecciona una opcion:",
            1,
            4
        );

        if (opcionZona === -1) {
            opcionZona = 4;
        } else if (opcionZona >= 1 && opcionZona <= 3) {
            menuAtracciones(opcionZona);
        } else if (opcionZona === 4) {
            if (pasesCompra === 0) {
                alert(
                    "No has comprado ningun pase.\n" +
                    "El registro sera cancelado."
                );
                return;
            }
            facturarCompra(personas);
        }
    }
}

// Menú de atracciones

function menuAtracciones(zona) {
    let opcionAtraccion = 0;
    let cantidad = 0;
    let precio = 0;
    let nombreAtraccion = "";

    while (opcionAtraccion !== 4) {

        // Zona extrema
        if (zona === 1) {
            opcionAtraccion = leerEntero(
                "ZONA EXTREMA\n\n" +
                "1. Pase Vertigo: $20.000\n" +
                "2. Caida Libre 60m: $18.000\n" +
                "3. Simulador 4D Extremo: $15.000\n" +
                "4. Volver al menu de zonas\n\n" +
                "Selecciona una atraccion:",
                1,
                4
            );
        // Zona familiar e infantil
        } else if (zona === 2) {
            opcionAtraccion = leerEntero(
                "ZONA FAMILIAR E INFANTIL\n\n" +
                "1. Carrusel Clasico: $8.000\n" +
                "2. Carros Chocones: $10.000\n" +
                "3. Rueda de la Fortuna: $12.000\n" +
                "4. Volver al menu de zonas\n\n" +
                "Selecciona una atraccion:",
                1,
                4
            );
        // Zona acuatica
        } else if (zona === 3) {
            opcionAtraccion = leerEntero(
                "ZONA ACUATICA\n\n" +
                "1. Piscina de Olas: $14.000\n" +
                "2. Tobogan Tornado: $16.000\n" +
                "3. Pase Rio Lento: $9.000\n" +
                "4. Volver al menu de zonas\n\n" +
                "Selecciona una atraccion:",
                1,
                4
            );
        }

        if (opcionAtraccion === -1) {
            opcionAtraccion = 4;
        }

        if (opcionAtraccion >= 1 && opcionAtraccion <= 3) {
            if (zona === 1) {
                switch (opcionAtraccion) {
                    case 1:
                        nombreAtraccion = "Pase Vertigo";
                        precio = 20000;
                        break;
                    case 2:
                        nombreAtraccion = "Caida Libre 60m";
                        precio = 18000;
                        break;
                    case 3:
                        nombreAtraccion = "Simulador 4D Extremo";
                        precio = 15000;
                        break;
                }
            } else if (zona === 2) {
                switch (opcionAtraccion) {
                    case 1:
                        nombreAtraccion = "Carrusel Clasico";
                        precio = 8000;
                        break;

                    case 2:
                        nombreAtraccion = "Carros Chocones";
                        precio = 10000;
                        break;

                    case 3:
                        nombreAtraccion = "Rueda de la Fortuna";
                        precio = 12000;
                        break;
                }
            } else if (zona === 3) {
                switch (opcionAtraccion) {
                    case 1:
                        nombreAtraccion = "Piscina de Olas";
                        precio = 14000;
                        break;
                    case 2:
                        nombreAtraccion = "Tobogan Tornado";
                        precio = 16000;
                        break;
                    case 3:
                        nombreAtraccion = "Pase Rio Lento";
                        precio = 9000;
                        break;
                }
            }

            cantidad = leerEntero(
                "Atraccion: " + nombreAtraccion +
                "\nPrecio por pase: " + precio +
                "\n\nCuantos pases deseas comprar?",
                1,
                1000
            );
            if (cantidad !== -1) {
                subtotalCompra = subtotalCompra + precio * cantidad;
                pasesCompra = pasesCompra + cantidad;
                alert(
                    "COMPRA AGREGADA\n\n" +
                    "Atraccion: " + nombreAtraccion +
                    "\nCantidad: " + cantidad +
                    "\nValor agregado: " +
                    precio * cantidad +
                    "\n\nSubtotal acumulado: " +
                    subtotalCompra +
                    "\nTotal de pases: " + pasesCompra
                );
            }
        }
    }
}

// Facturación de la compra
function facturarCompra(personas) {
    let descuento = 0;
    let seguro = 0;
    let totalPagar = 0;
    let formaPago = 0;
    let agregarSeguro = 0;
    let porcentajeDescuento = 0;

    formaPago = leerEntero(
        "FORMA DE PAGO\n\n" +
        "1. Efectivo\n" +
        "2. Otro medio de pago\n\n" +
        "Selecciona una opcion:",
        1,
        2
    );

    if (formaPago === -1) {
        formaPago = 2;
    }

    // Descuento por volumen
    if (pasesCompra >= 5 && subtotalCompra > 50000) {
        porcentajeDescuento = 12;
        descuento = subtotalCompra * 0.12;

    } else if (formaPago === 1) {
        
        porcentajeDescuento = 5;
        descuento = subtotalCompra * 0.05;
    }

    // Seguro medico
    agregarSeguro = leerEntero(
        "SEGURO MEDICO OPCIONAL\n\n" +
        "El seguro cuesta $5.000 por persona.\n" +
        "Personas en el grupo: " + personas +
        "\nCosto del seguro para el grupo: " +
        (5000 * personas) +
        "\n\n1. Agregar seguro\n" +
        "2. No agregar seguro",
        1,
        2
    );

    if (agregarSeguro === 1) {
        seguro = 5000 * personas;
    }

    // Calcular el total final
    totalPagar = subtotalCompra - descuento + seguro;

    // Actualizar las estadisticas globales
    totalRegistros = totalRegistros + 1;
    totalPersonas = totalPersonas + personas;
    totalPasesVendidos = totalPasesVendidos + pasesCompra;
    dineroRecaudado = dineroRecaudado + totalPagar;

    // factura
    alert(
        "========== AVENTURA PARK ==========\n" +
        "             FACTURA\n" +
        "===================================\n\n" +
        "Personas del grupo: " + personas +
        "\nPases comprados: " + pasesCompra +
        "\nSubtotal: " + subtotalCompra +
        "\nDescuento (" + porcentajeDescuento +
        "%): - " + descuento +
        "\nSeguro medico: " + seguro +
        "\n-----------------------------------\n" +
        "TOTAL A PAGAR: " + totalPagar +
        "\n===================================\n\n" +
        "Gracias por tu compra."
    );
}



// Estadisticas y balance del dia

function verBalance() {
    let promedio = 0;

    if (totalPersonas > 0) {
        promedio = dineroRecaudado / totalPersonas;
    }

    alert(
        "======= BALANCE DE AVENTURA PARK =======\n\n" +
        "Registros de visitantes o grupos: " +
        totalRegistros +
        "\nTotal de personas registradas: " +
        totalPersonas +
        "\nTotal de pases vendidos: " +
        totalPasesVendidos +
        "\nDinero recaudado: " +
        dineroRecaudado +
        "\nPromedio recaudado por persona: " +
        promedio +
        "\n\n========================================"
    );
}

menuPrincipal();