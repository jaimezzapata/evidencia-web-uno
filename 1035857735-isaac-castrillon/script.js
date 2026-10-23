let totalUsuariosAtendidos = 0;
let totalDineroRecaudado = 0;
let totalServiciosFacturados = 0;

function mostrarMenuPrincipal() {
    return parseInt(prompt(
        "--- MENÚ PRINCIPAL: FITZONE CLUB ---\n" +
        "1. Atender socio / nuevo usuario\n" +
        "2. Ver balance de caja del día\n" +
        "3. Salir del sistema"
    ));
}

function mostrarMenuServicios() {
    return parseInt(prompt(
        "--- MENÚ DE SERVICIOS Y TIENDA ---\n" +
        "1. Planes de Membresía\n" +
        "2. Clases y Entrenador Personalizado\n" +
        "3. Tienda Fitness y Suplementos\n" +
        "4. Finalizar compra y facturar"
    ));
}

function gestionarMembresias() {
    let subtotalMembresias = 0;
    let continuar = true;

    while (continuar) {
        let opcion = parseInt(prompt(
            "--- PLANES DE MEMBRESÍA ---\n" +
            "1. Pase Diario / Tiquetera 1 día: $15.000\n" +
            "2. Mensualidad Básica (Área de pesas y cardio): $80.000\n" +
            "3. Mensualidad VIP (Acceso total + Zona húmeda): $120.000\n" +
            "4. Volver al menú de servicios\n" +
            "Elija una opción:"
        ));

        if (opcion === 4) {
            continuar = false;
        } else if (opcion >= 1 && opcion <= 3) {
            let cantidad = parseInt(prompt("Indique la cantidad o meses deseados (mayor a 0):"));
            if (cantidad > 0) {
                let precioUnitario = 0;
                if (opcion === 1) precioUnitario = 15000;
                else if (opcion === 2) precioUnitario = 80000;
                else if (opcion === 3) precioUnitario = 120000;

                let subTotalItem = precioUnitario * cantidad;
                subtotalMembresias += subTotalItem;
                totalServiciosFacturados += cantidad;
                alert("¡Agregado con éxito! Subtotal parcial: $" + subtotalMembresias);
            } else {
                alert("La cantidad debe ser mayor a 0.");
            }
        } else {
            alert("Opción inválida.");
        }
    }
    return subtotalMembresias;
}

function gestionarClases() {
    let subtotalClases = 0;
    let continuar = true;

    while (continuar) {
        let opcion = parseInt(prompt(
            "--- CLASES Y ENTRENADOR PERSONALIZADO ---\n" +
            "1. Clase de Spinning / Indoor Cycling: $18.000\n" +
            "2. Sesión con Entrenador Personal (1 hora): $35.000\n" +
            "3. Paquete Clase de Funcional / Cross: $20.000\n" +
            "4. Volver al menú de servicios\n" +
            "Elija una opción:"
        ));

        if (opcion === 4) {
            continuar = false;
        } else if (opcion >= 1 && opcion <= 3) {
            let cantidad = parseInt(prompt("Indique la cantidad deseada (mayor a 0):"));
            if (cantidad > 0) {
                let precioUnitario = 0;
                if (opcion === 1) precioUnitario = 18000;
                else if (opcion === 2) precioUnitario = 35000;
                else if (opcion === 3) precioUnitario = 20000;

                let subTotalItem = precioUnitario * cantidad;
                subtotalClases += subTotalItem;
                totalServiciosFacturados += cantidad;
                alert("¡Agregado con éxito! Subtotal parcial: $" + subtotalClases);
            } else {
                alert("La cantidad debe ser mayor a 0.");
            }
        } else {
            alert("Opción inválida.");
        }
    }
    return subtotalClases;
}

function gestionarTienda() {
    let subtotalTienda = 0;
    let continuar = true;

    while (continuar) {
        let opcion = parseInt(prompt(
            "--- TIENDA FITNESS Y SUPLEMENTOS ---\n" +
            "1. Bebida Hidratante / Energizante: $7.000\n" +
            "2. Barra de Proteína: $9.000\n" +
            "3. Termo Deportivo Oficial: $25.000\n" +
            "4. Volver al menú de servicios\n" +
            "Elija una opción:"
        ));

        if (opcion === 4) {
            continuar = false;
        } else if (opcion >= 1 && opcion <= 3) {
            let cantidad = parseInt(prompt("Indique la cantidad deseada (mayor a 0):"));
            if (cantidad > 0) {
                let precioUnitario = 0;
                if (opcion === 1) precioUnitario = 7000;
                else if (opcion === 2) precioUnitario = 9000;
                else if (opcion === 3) precioUnitario = 25000;

                let subTotalItem = precioUnitario * cantidad;
                subtotalTienda += subTotalItem;
                totalServiciosFacturados += cantidad;
                alert("¡Agregado con éxito! Subtotal parcial: $" + subtotalTienda);
            } else {
                alert("La cantidad debe ser mayor a 0.");
            }
        } else {
            alert("Opción inválida.");
        }
    }
    return subtotalTienda;
}

function iniciarSistema() {
    let salirSistema = false;

    while (!salirSistema) {
        let opcionMenuPrincipal = mostrarMenuPrincipal();

        if (opcionMenuPrincipal === 1) {
            totalUsuariosAtendidos++;
            let subtotalUsuario = 0;
            let finalizarCompra = false;

            while (!finalizarCompra) {
                let opcionServicios = mostrarMenuServicios();

                if (opcionServicios === 1) {
                    subtotalUsuario += gestionarMembresias();
                } else if (opcionServicios === 2) {
                    subtotalUsuario += gestionarClases();
                } else if (opcionServicios === 3) {
                    subtotalUsuario += gestionarTienda();
                } else if (opcionServicios === 4) {
                    finalizarCompra = true;
                } else {
                    alert("Opción inválida.");
                }
            }

            let descuento = 0;
            let esEstudiante = prompt("¿El usuario es estudiante y presenta carné válido? (si / no):").toLowerCase();
            let medioPago = prompt("¿Cuál es el medio de pago? (efectivo / otro):").toLowerCase();

            let descuentoEstudiante = 0;
            let descuentoEfectivo = 0;

            if (esEstudiante === "si") {
                descuentoEstudiante = subtotalUsuario * 0.08;
            }

            if (medioPago === "efectivo" && subtotalUsuario > 100000) {
                descuentoEfectivo = subtotalUsuario * 0.10;
            }

            if (descuentoEstudiante > descuentoEfectivo) {
                descuento = descuentoEstudiante;
            } else {
                descuento = descuentoEfectivo;
            }

            let seguro = 0;
            let deseaSeguro = prompt("¿Desea incluir la póliza de cobertura médica deportiva por $6.000? (si / no):").toLowerCase();
            if (deseaSeguro === "si") {
                seguro = 6000;
            }

            let totalFinal = subtotalUsuario - descuento + seguro;
            totalDineroRecaudado += totalFinal;

            alert(
                "=== RESUMEN DE FACTURACIÓN ===\n" +
                "Subtotal: $" + subtotalUsuario + "\n" +
                "Descuento aplicado: -$" + descuento + "\n" +
                "Seguro médico: +$" + seguro + "\n" +
                "TOTAL A PAGAR: $" + totalFinal + "\n\n" +
                "¡Gracias por preferir FitZone Club!"
            );

        } else if (opcionMenuPrincipal === 2) {
            let promedioCompra = totalUsuariosAtendidos > 0 ? (totalDineroRecaudado / totalUsuariosAtendidos) : 0;
            alert(
                "=== BALANCE DE CAJA DEL DÍA ===\n" +
                "Total usuarios atendidos: " + totalUsuariosAtendidos + "\n" +
                "Dinero recaudado: $" + totalDineroRecaudado + "\n" +
                "Servicios/productos facturados: " + totalServiciosFacturados + "\n" +
                "Promedio por usuario: $" + promedioCompra.toFixed(2)
            );

        } else if (opcionMenuPrincipal === 3) {
            alert("Saliendo del sistema.");
            salirSistema = true;
        } else {
            alert("Opción inválida.");
        }
    }
}

iniciarSistema();