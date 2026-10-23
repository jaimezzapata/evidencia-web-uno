let totalClientes = 0;
let recaudadoTotal = 0;
let totalProductosVendidos = 0;


alert(
  "Bienvenidos a CineStar",
);

//Menu de opciones para los clientes

function mostrarMenuPrincipal() {
    return Number(prompt(
        "------ CINESTAR ------\n" + 
        "--- MENÚ PRINCIPAL ---\n" +
        "1. Atender cliente\n" +
        "2. Ver balance de la jornada\n" +
        "3. Salir del sistema"
    ));
}

function mostrarMenuAreas() {
    return Number(prompt(
        "--- ÁREAS DE VENTA CINESTAR ---\n" +
        "1. Entradas de Cine\n" +
        "2. Confitería y Snacks\n" +
        "3. Combos Especiales\n" +
        "4. Finalizar compra y facturar"
    ));
}

function mostrarMenuEntradas() {
    return Number(prompt(
        "--- ENTRADAS DE CINE CINESTAR ---\n" +
        "1. Entrada General 2D: $12.000\n" +
        "2. Entrada Sala 3D: $16.000\n" +
        "3. Entrada VIP / IMAX: $22.000\n" +
        "4. Volver al menú de áreas"
    ));
}

function mostrarMenuSnacks() {
    return Number(prompt(
        "--- CONFITERÍA Y SNACKS CINESTAR ---\n" +
        "1. Crispetas / Palomitas Grandes: $10.000\n" +
        "2. Gaseosa Grande: $6.000\n" +
        "3. Perro Caliente / Hot Dog: $8.500\n" +
        "4. Volver al menú de áreas"
    ));
}

function mostrarMenuCombos() {
    return Number(prompt(
        "--- COMBOS ESPECIALES CINESTAR ---\n" +
        "1. Combo Personal (Crispeta Mediana + Gaseosa): $13.500\n" +
        "2. Combo Pareja (Crispeta Grande + 2 Gaseosas + Dulce): $24.000\n" +
        "3. Combo Familiar (2 Crispetas Grandes + 3 Gaseosas + 2 Perros): $38.000\n" +
        "4. Volver al menú de áreas"
    ));
}

function calcularDescuento(subtotal) {
    let tieneTarjeta = prompt(
        "------ CINESTAR ------\n" + 
        "¿Tiene Tarjeta CineStar Club? (s/n)") === "s";
    let descuento = 0;

    if (tieneTarjeta) {
        descuento = subtotal * 0.15; // 15% de descuento
    } else {
        let pagoEfectivo = prompt(
            "------ CINESTAR ------\n" + 
            "¿Paga en efectivo? (s/n)") === "s";
        if (pagoEfectivo && subtotal > 30000) {
            descuento = subtotal * 0.05; // 5% de descuento
        }
    }
    return descuento;
}
function gestionarDonacion() {
    let deseaDonar = prompt(
        "------ CINESTAR ------\n" + "¿Desea donar $2.000 para el fondo cinematográfico nacional? (s/n)") === "s";
    return deseaDonar ? 2000 : 0;
}
// Programa principal

let opcionPrincipal = 0;

// Menú Principal
while (opcionPrincipal !== 3) {
    opcionPrincipal = mostrarMenuPrincipal();

    if (opcionPrincipal === 1) {
        let subtotalCliente = 0;
        let opcionArea = 0;

        // Menú de Áreas de Venta
        while (opcionArea !== 4) {
            opcionArea = mostrarMenuAreas();

            // Entradas del cine

            if (opcionArea === 1) {
                let opcionEntrada = 0;

                // Productos y Cantidades
                while (opcionEntrada !== 4) {
                    opcionEntrada = mostrarMenuEntradas();

                    if (opcionEntrada >= 1 && opcionEntrada <= 3) {
                        let cantidad = Number(prompt(
                            "------ CINESTAR ------\n" + 
                            "Ingrese la cantidad (debe ser mayor a 0):"));
                        if (cantidad > 0) {
                            if (opcionEntrada === 1) {
                                subtotalCliente += cantidad * 12000;
                            } else if (opcionEntrada === 2) {
                                subtotalCliente += cantidad * 16000;
                            } else if (opcionEntrada === 3) {
                                subtotalCliente += cantidad * 22000;
                            }
                            totalProductosVendidos += cantidad;
                        } else {
                            alert("Error: La cantidad debe ser mayor a 0.");
                        }
                    }
                }
// Confiteria y snacks
            } else if (opcionArea === 2) {
                let opcionSnack = 0;

                // Productos y Cantidades
                while (opcionSnack !== 4) {
                    opcionSnack = mostrarMenuSnacks();

                    if (opcionSnack >= 1 && opcionSnack <= 3) {
                        let cantidad = Number(prompt(
                            "------ CINESTAR ------\n" + 
                            "Ingrese la cantidad (debe ser mayor a 0):"));
                        if (cantidad > 0) {
                            if (opcionSnack === 1) {
                                subtotalCliente += cantidad * 10000;
                            } else if (opcionSnack === 2) {
                                subtotalCliente += cantidad * 6000;
                            } else if (opcionSnack === 3) {
                                subtotalCliente += cantidad * 8500;
                            }
                            totalProductosVendidos += cantidad;
                        } else {
                            alert("Error: La cantidad debe ser mayor a 0.");
                        }
                    }
}

// Combos Especiales
            } else if (opcionArea === 3) {
                let opcionCombo = 0;

                // Productos y Cantidades
                while (opcionCombo !== 4) {
                    opcionCombo = mostrarMenuCombos();

                    if (opcionCombo >= 1 && opcionCombo <= 3) {
                        let cantidad = Number(prompt(
                            "------ CINESTAR ------\n" + 
                            "Ingrese la cantidad (debe ser mayor a 0):"));
                        if (cantidad > 0) {
                            if (opcionCombo === 1) {
                                subtotalCliente += cantidad * 13500;
                            } else if (opcionCombo === 2) {
                                subtotalCliente += cantidad * 24000;
                            } else if (opcionCombo === 3) {
                                subtotalCliente += cantidad * 38000;
                            }
                            totalProductosVendidos += cantidad;
                        } else {
                            alert("Error: La cantidad debe ser mayor a 0.");
                        }
                    }
}

// Finalizar compra y facturar
            } else if (opcionArea === 4) {
                if (subtotalCliente === 0) {
                    alert("El cliente no ha seleccionado ningún producto.");
                    break;
                }

                let descuento = calcularDescuento(subtotalCliente);
                let donacion = gestionarDonacion();
                let totalPagar = subtotalCliente - descuento + donacion;

                totalClientes++;
                recaudadoTotal += totalPagar;

                // Mostrar Factura en pantalla
                alert(
                    "=== FACTURA CINESTAR ===\n" +
                    "Subtotal: $" + subtotalCliente + "\n" +
                    "Descuento aplicado: -$" + descuento + "\n" +
                    "Donación voluntaria: +$" + donacion + "\n" +
                    "TOTAL A PAGAR: $" + totalPagar + "\n" +
                    "Gracias por su compra. ¡Disfrute la función!"
                );
            }
        }

// Balance de la jornada
    } else if (opcionPrincipal === 2) {
        let promedioGasto = totalClientes > 0 ? (recaudadoTotal / totalClientes) : 0;
        alert(
            "=== CINESTAR ===\n" +
            "=== BALANCE GENERAL DE LA JORNADA ===" + "\n" +
            "Total de clientes atendidos: " + totalClientes + "\n" +
            "Total de dinero recaudado: $" + recaudadoTotal + "\n" +
            "Total de entradas y productos vendidos: " + totalProductosVendidos + "\n" +
            "Gasto promedio por cliente: $" + promedioGasto
        );
    }
}

alert("Sistema cerrado. ¡Hasta luego!");