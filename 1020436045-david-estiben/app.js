
/* Parque de Diversiones Aventura Park */

// Variables para los menus
let repetir = true;
let opcionPrincipal = 0;
let opcionZona = 0;
let opcionAtraccion = 0;

// Variables para la compra
let cantidadPases = 0;
let subtotal = 0;
let totalPases = 0;

// Variables para la factura
let descuento = 0;
let seguro = 0;
let totalPagar = 0;

// Variables para el balance diario
let totalVisitantes = 0;
let recaudoTotal = 0;
let pasesVendidos = 0;


// Funcion para mostrar el menu principal
function mostrarMenuPrincipal() {
    return prompt(
        "🎢 AVENTURA PARK 🎢\n\n" +
        "1 - Registrar visitante o grupo\n" +
        "2 - Ver balance del dia\n" +
        "3 - Salir del sistema\n\n" +
        "Seleccione una opcion:"
    );
}


// Funcion para mostrar las zonas
function mostrarMenuZonas() {
    return prompt(
        " ZONAS DEL PARQUE\n\n" +
        "1 - Zona Extrema\n" +
        "2 - Zona Familiar e Infantil\n" +
        "3 - Zona Acuatica\n" +
        "4 - Finalizar compra y facturar\n\n" +
        "Seleccione una opcion:"
    );
}


// Funcion para mostrar las atracciones
function mostrarMenuAtracciones(zona) {

    if (zona == 1) {
        return prompt(
            "ZONA EXTREMA \n\n" +
            "1 - Pase Vertigo: $20000\n" +
            "2 - Caida Libre: $18000\n" +
            "3 - Simulador 4D: $15000\n" +
            "4 - Volver a las zonas\n\n" +
            "Seleccione una opcion:"
        );

    } else if (zona == 2) {
        return prompt(
            "ZONA FAMILIAR E INFANTIL\n\n" +
            "1 - Carrusel Clasico: $8000\n" +
            "2 - Carros Chocones: $10000\n" +
            "3 - Rueda de la Fortuna: $12000\n" +
            "4 - Volver a las zonas\n\n" +
            "Seleccione una opcion:"
        );

    } else if (zona == 3) {
        return prompt(
            "ZONA ACUATICA\n\n" +
            "1 - Piscina de Olas: $14000\n" +
            "2 - Tobogan Tornado: $16000\n" +
            "3 - Pase Rio Lento: $9000\n" +
            "4 - Volver a las zonas\n\n" +
            "Seleccione una opcion:"
        );
    }
}


// Funcion para calcular el subtotal
function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}


// Funcion para registrar pases
function registrarPases(precio) {

    cantidadPases = Number(prompt(
        "Precio por pase: $" + precio +
        "\nIngrese la cantidad de pases:"
    ));

    if (cantidadPases > 0) {

        subtotal = subtotal +
            calcularSubtotal(cantidadPases, precio);

        totalPases = totalPases + cantidadPases;

    } else {
        alert("La cantidad debe ser mayor que cero.");
    }
}


// Funcion para calcular el descuento
function calcularDescuento(subtotal, totalPases, formaPago) {

    if (totalPases >= 5 && subtotal > 50000) {
        return subtotal * 0.12;

    } else if (formaPago == 1) {
        return subtotal * 0.05;

    } else {
        return 0;
    }
}


// Funcion para calcular el total
function calcularTotal(subtotal, descuento, seguro) {
    return subtotal - descuento + seguro;
}


// CICLO 1: MENU PRINCIPAL
while (repetir) {

    opcionPrincipal = Number(mostrarMenuPrincipal());

    if (opcionPrincipal == 1) {

        subtotal = 0;
        totalPases = 0;
        repetirCompra = true;

        // CICLO 2: MENU DE ZONAS
        while (repetirCompra) {

            opcionZona = Number(mostrarMenuZonas());

            if (opcionZona >= 1 && opcionZona <= 3) {

                opcionAtraccion = Number(
                    mostrarMenuAtracciones(opcionZona)
                );

                // CICLO 3: MENU DE ATRACCIONES
                while (opcionAtraccion != 4) {

                    if (opcionZona == 1) {

                        if (opcionAtraccion == 1) {
                            registrarPases(20000);
                        } else if (opcionAtraccion == 2) {
                            registrarPases(18000);
                        } else if (opcionAtraccion == 3) {
                            registrarPases(15000);
                        } else {
                            alert("Opcion de atraccion no valida.");
                        }

                    } else if (opcionZona == 2) {

                        if (opcionAtraccion == 1) {
                            registrarPases(8000);
                        } else if (opcionAtraccion == 2) {
                            registrarPases(10000);
                        } else if (opcionAtraccion == 3) {
                            registrarPases(12000);
                        } else {
                            alert("Opcion de atraccion no valida.");
                        }

                    } else if (opcionZona == 3) {

                        if (opcionAtraccion == 1) {
                            registrarPases(14000);
                        } else if (opcionAtraccion == 2) {
                            registrarPases(16000);
                        } else if (opcionAtraccion == 3) {
                            registrarPases(9000);
                        } else {
                            alert("Opcion de atraccion no valida.");
                        }
                    }

                    opcionAtraccion = Number(
                        mostrarMenuAtracciones(opcionZona)
                    );
                }

            } else if (opcionZona == 4) {

                if (totalPases > 0) {

                    let formaPago = Number(prompt(
                        "FORMA DE PAGO\n\n" +
                        "1 - Efectivo\n" +
                        "2 - Otro medio de pago\n\n" +
                        "Seleccione una opcion:"
                    ));

                    if (formaPago == 1 || formaPago == 2) {

                        let opcionSeguro = Number(prompt(
                            "SEGURO MEDICO\n\n" +
                            "1 - Si, agregar seguro por $5000\n" +
                            "2 - No, continuar sin seguro\n\n" +
                            "Seleccione una opcion:"
                        ));

                        if (opcionSeguro == 1 || opcionSeguro == 2) {

                            if (opcionSeguro == 1) {
                                seguro = 5000;
                            } else {
                                seguro = 0;
                            }

                            descuento = calcularDescuento(
                                subtotal,
                                totalPases,
                                formaPago
                            );

                            totalPagar = calcularTotal(
                                subtotal,
                                descuento,
                                seguro
                            );

                            alert(
                                "FACTURA - AVENTURA PARK\n\n" +
                                "Cantidad de pases: " + totalPases + "\n" +
                                "Subtotal: $" + subtotal + "\n" +
                                "Descuento: $" + descuento + "\n" +
                                "Seguro medico: $" + seguro + "\n" +
                                "TOTAL A PAGAR: $" + totalPagar
                            );

                            totalVisitantes = totalVisitantes + 1;
                            recaudoTotal = recaudoTotal + totalPagar;
                            pasesVendidos = pasesVendidos + totalPases;

                            repetirCompra = false;

                        } else {
                            alert("Opcion de seguro no valida.");
                        }

                    } else {
                        alert("Forma de pago no valida.");
                    }

                } else {
                    alert("Debes comprar al menos un pase antes de facturar.");
                }

            } else {
                alert("Opcion de zona no valida.");
            }
        }

    } else if (opcionPrincipal == 2) {

        let promedioCompra = 0;

        if (totalVisitantes > 0) {
            promedioCompra = recaudoTotal / totalVisitantes;
        }

        alert(
            "BALANCE DEL DIA\n\n" +
            "Visitantes o grupos registrados: " + totalVisitantes + "\n" +
            "Recaudo total: $" + recaudoTotal + "\n" +
            "Pases vendidos: " + pasesVendidos + "\n" +
            "Promedio por compra: $" + promedioCompra
        );

    } else if (opcionPrincipal == 3) {

        repetir = false;
        alert("Gracias por visitar Aventura Park");

    } else {
        alert("Opcion no valida. Intente nuevamente.");
    }
}
