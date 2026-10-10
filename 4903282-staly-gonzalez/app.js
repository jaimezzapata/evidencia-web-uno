
let visitantes = 0;
let dineroTotal = 0;
let pasesVendidos = 0;

// Funcion para mostrar los menus
function menuPrincipal() {
    return Number(prompt(
        "AVENTURA PARK\n" +
        "1. Registrar visitante o grupo\n" +
        "2. Ver balance del dia\n" +
        "3. Salir"
    ));
}

function menuZonas() {
    return Number(prompt(
        "MENU DE ZONAS\n" +
        "1. Zona Extrema\n" +
        "2. Zona Familiar e Infantil\n" +
        "3. Zona Acuatica\n" +
        "4. Finalizar compra"
    ));
}

function calcularDescuento(subtotal, pases, pago) {
    if (pases >= 5 && subtotal > 50000) {
        return subtotal * 0.12;
    } else if (pago == 1) {
        return subtotal * 0.05;
    } else {
        return 0;
    }
}

function calcularTotal(subtotal, descuento, seguro) {
    return subtotal - descuento + seguro;
}

// Funcion para registrar una compra
function registrarCompra() {
    let personas = Number(prompt("Cuantas personas hay en el grupo?"));

    while (personas <= 0 || !Number.isInteger(personas)) {
        personas = Number(prompt("Ingrese una cantidad valida de personas:"));
    }

    let subtotal = 0;
    let pases = 0;
    let zona = 0;

    // Ciclo 2: seleccionar las zonas
    while (zona != 4) {
        zona = menuZonas();

        if (zona == 1 || zona == 2 || zona == 3) {
            let atraccion = 0;

            // Ciclo 3: seleccionar atracciones
            while (atraccion != 4) {
                if (zona == 1) {
                    atraccion = Number(prompt(
                        "ZONA EXTREMA\n" +
                        "1. Pase Vertigo - $20000\n" +
                        "2. Caida Libre - $18000\n" +
                        "3. Simulador 4D - $15000\n" +
                        "4. Volver"
                    ));
                } else if (zona == 2) {
                    atraccion = Number(prompt(
                        "ZONA FAMILIAR E INFANTIL\n" +
                        "1. Carrusel - $8000\n" +
                        "2. Carros chocones - $10000\n" +
                        "3. Rueda de la fortuna - $12000\n" +
                        "4. Volver"
                    ));
                } else {
                    atraccion = Number(prompt(
                        "ZONA ACUATICA\n" +
                        "1. Piscina de olas - $14000\n" +
                        "2. Tobogan Tornado - $16000\n" +
                        "3. Rio lento - $9000\n" +
                        "4. Volver"
                    ));
                }

                if (atraccion >= 1 && atraccion <= 3) {
                    let precio = 0;
                    let nombre = "";

                    if (zona == 1) {
                        if (atraccion == 1) {
                            precio = 20000;
                            nombre = "Pase Vertigo";
                        } else if (atraccion == 2) {
                            precio = 18000;
                            nombre = "Caida Libre";
                        } else {
                            precio = 15000;
                            nombre = "Simulador 4D";
                        }
                    } else if (zona == 2) {
                        if (atraccion == 1) {
                            precio = 8000;
                            nombre = "Carrusel";
                        } else if (atraccion == 2) {
                            precio = 10000;
                            nombre = "Carros chocones";
                        } else {
                            precio = 12000;
                            nombre = "Rueda de la fortuna";
                        }
                    } else {
                        if (atraccion == 1) {
                            precio = 14000;
                            nombre = "Piscina de olas";
                        } else if (atraccion == 2) {
                            precio = 16000;
                            nombre = "Tobogan Tornado";
                        } else {
                            precio = 9000;
                            nombre = "Rio lento";
                        }
                    }

                    let cantidad = Number(prompt(
                        "Atraccion: " + nombre +
                        "\nPrecio: $" + precio +
                        "\nCuantos pases desea comprar?"
                    ));

                    while (cantidad <= 0 || !Number.isInteger(cantidad)) {
                        cantidad = Number(prompt(
                            "Ingrese una cantidad de pases mayor que cero:"
                        ));
                    }

                    subtotal = subtotal + precio * cantidad;
                    pases = pases + cantidad;

                    alert(
                        "Atraccion agregada: " + nombre +
                        "\nSubtotal: $" + subtotal
                    );

                } else if (atraccion != 4) {
                    alert("Opcion no valida");
                }
            }

        } else if (zona != 4) {
            alert("Seleccione una zona valida");
        }
    }

    if (pases == 0) {
        alert("No se compraron pases");
        return;
    }

    // Forma de pago
    let pago = Number(prompt(
        "FORMA DE PAGO\n" +
        "1. Efectivo\n" +
        "2. Tarjeta"
    ));

    while (pago != 1 && pago != 2) {
        pago = Number(prompt("Seleccione 1 para efectivo o 2 para tarjeta"));
    }

    // Calcular el descuento
    let descuento = calcularDescuento(subtotal, pases, pago);

    // Seguro medico
    let respuesta = prompt(
        "Desea seguro medico por $5000 por persona?\n" +
        "1. Si\n" +
        "2. No"
    );

    let seguro = 0;

    if (respuesta == "1") {
        seguro = personas * 5000;
    }

    // Calcular el total
    let total = calcularTotal(subtotal, descuento, seguro);

    // Mostrar la factura
    alert(
        "FACTURA AVENTURA PARK\n\n" +
        "Personas: " + personas +
        "\nPases comprados: " + pases +
        "\nSubtotal: $" + subtotal +
        "\nDescuento: $" + descuento +
        "\nSeguro medico: $" + seguro +
        "\nTOTAL A PAGAR: $" + total
    );

    // Actualizar los datos del dia
    visitantes = visitantes + personas;
    dineroTotal = dineroTotal + total;
    pasesVendidos = pasesVendidos + pases;
}

// Programa principal
function iniciarSistema() {
    let opcion = 0;

    // Ciclo 1: menu principal
    while (opcion != 3) {
        opcion = menuPrincipal();

        if (opcion == 1) {
            registrarCompra();

        } else if (opcion == 2) {
            alert(
                "BALANCE DEL DIA\n\n" +
                "Visitantes registrados: " + visitantes +
                "\nDinero recaudado: $" + dineroTotal +
                "\nPases vendidos: " + pasesVendidos +
                "\nPromedio por visitante: $" +
                (visitantes > 0 ? dineroTotal / visitantes : 0)
            );

        } else if (opcion == 3) {
            alert("Taquilla cerrada. Gracias por usar el sistema.");

        } else {
            alert("Opcion no valida");
        }
    }
}
