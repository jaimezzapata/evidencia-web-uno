// TIENDA DE MASCOTAS "PET CENTER"

let totalClientes = 0;
let totalRecaudado = 0;
let totalProductosVendidos = 0;

// Nivel 1: Menú Principal (Ciclo 1)
let opcionPrincipal = "";

do {
    opcionPrincipal = prompt(
        "--- PET CENTER: MENÚ PRINCIPAL ---\n" +
        "1. Atender cliente\n" +
        "2. Ver balance de la jornada\n" +
        "3. Salir del sistema\n\n" +
        "Ingrese una opción:"
    );

    if (opcionPrincipal === "1") {
        // Variables locales de la compra del cliente
        let subtotalCliente = 0;
        let cantidadProductosCliente = 0;
        let opcionDepartamento = "";

        // Nivel 2: Menú de Departamentos (Ciclo 2)
        do {
            opcionDepartamento = prompt(
                "--- MENÚ DE DEPARTAMENTOS ---\n" +
                "1. Alimentos y Nutrición\n" +
                "2. Accesorios y Juguetes\n" +
                "3. Servicios de Higiene y Cuidado\n" +
                "4. Finalizar compra y facturar\n\n" +
                "Seleccione un departamento:"
            );

            // Validación de departamentos
            if (opcionDepartamento === "1" || opcionDepartamento === "2" || opcionDepartamento === "3") {
                let opcionProducto = "";
                let nombreDepto = "";

                if (opcionDepartamento === "1") {
                    nombreDepto = "Alimentos y Nutrición";
                } else if (opcionDepartamento === "2") {
                    nombreDepto = "Accesorios y Juguetes";
                } else {
                    nombreDepto = "Servicios de Higiene y Cuidado";
                }

                // Nivel 3: Menú de Productos y Servicios (Ciclo 3)
                do {
                    if (opcionDepartamento === "1") {
                        opcionProducto = prompt(
                            "--- " + nombreDepto + " ---\n" +
                            "1. Bulto Concentrado Premium (3 Kg): $45.000\n" +
                            "2. Paquete de Galletas / Snacks: $12.000\n" +
                            "3. Lata de Alimento Húmedo: $8.000\n" +
                            "4. Volver al menú de departamentos\n\n" +
                            "Elija un producto:"
                        );
                    } else if (opcionDepartamento === "2") {
                        opcionProducto = prompt(
                            "--- " + nombreDepto + " ---\n" +
                            "1. Correa y Collar Ajustable: $22.000\n" +
                            "2. Juguete Mordedor Interactivo: $15.000\n" +
                            "3. Cama Acolchada Mediana: $60.000\n" +
                            "4. Volver al menú de departamentos\n\n" +
                            "Elija un producto:"
                        );
                    } else {
                        opcionProducto = prompt(
                            "--- " + nombreDepto + " ---\n" +
                            "1. Baño Medicado y Cepillado: $35.000\n" +
                            "2. Corte de Pelo Canino/Felino: $28.000\n" +
                            "3. Limpieza Dental y Uñas: $18.000\n" +
                            "4. Volver al menú de departamentos\n\n" +
                            "Elija un servicio:"
                        );
                    }

                    if (opcionProducto >= "1" && opcionProducto <= "3") {
                        let cantidadStr = prompt("Ingrese la cantidad (mayor a 0):");
                        let cantidad = Number(cantidadStr);

                        if (cantidad > 0) {
                            let precioUnitario = 0;

                            // Asignación de precios según departamento y producto
                            if (opcionDepartamento === "1") {
                                if (opcionProducto === "1") precioUnitario = 45000;
                                else if (opcionProducto === "2") precioUnitario = 12000;
                                else if (opcionProducto === "3") precioUnitario = 8000;
                            } else if (opcionDepartamento === "2") {
                                if (opcionProducto === "1") precioUnitario = 22000;
                                else if (opcionProducto === "2") precioUnitario = 15000;
                                else if (opcionProducto === "3") precioUnitario = 60000;
                            } else if (opcionDepartamento === "3") {
                                if (opcionProducto === "1") precioUnitario = 35000;
                                else if (opcionProducto === "2") precioUnitario = 28000;
                                else if (opcionProducto === "3") precioUnitario = 18000;
                            }

                            subtotalCliente += precioUnitario * cantidad;
                            cantidadProductosCliente += cantidad;
                            alert("¡Agregado con éxito! Subtotal actual: $" + subtotalCliente);
                        } else {
                            alert("Error: La cantidad debe ser mayor a 0.");
                        }
                    } else if (opcionProducto !== "4") {
                        alert("Opción inválida en el menú de productos.");
                    }

                } while (opcionProducto !== "4");

            } else if (opcionDepartamento === "4") {
                // Finalizar compra y facturar
                if (subtotalCliente > 0) {
                    let esAfiliado = confirm("¿El cliente es afiliado al Club de Mascotas? (Aceptar = Sí, Cancelar = No)");
                    let descuento = 0;

                    // Lógica de descuentos
                    if (esAfiliado) {
                        descuento = subtotalCliente * 0.15;
                    } else if (subtotalCliente > 70000) {
                        descuento = subtotalCliente * 0.08;
                    }

                    let deseaDonar = confirm("¿Desea donar $3.000 para el albergue de animales rescatados? (Aceptar = Sí, Cancelar = No)");
                    let donacion = deseaDonar ? 3000 : 0;

                    let totalPagar = subtotalCliente - descuento + donacion;

                    // Actualizar estadísticas globales de la jornada
                    totalClientes++;
                    totalRecaudado += totalPagar;
                    totalProductosVendidos += cantidadProductosCliente;

                    // Mostrar Factura
                    alert(
                        "===== FACTURA DE VENTA — PET CENTER =====\n" +
                        "Subtotal: $" + subtotalCliente + "\n" +
                        "Descuento aplicado: $" + descuento + "\n" +
                        "Aporte voluntario refugio: $" + donacion + "\n" +
                        "TOTAL A PAGAR: $" + totalPagar + "\n\n" +
                        "¡Gracias por su compra!"
                    );
                } else {
                    alert("El cliente no agregó ningún producto o servicio. No hay factura que generar.");
                }

            } else {
                alert("Opción inválida en el menú de departamentos.");
            }

        } while (opcionDepartamento !== "4");

    } else if (opcionPrincipal === "2") {
        // Ver balance de la jornada
        let promedioGasto = totalClientes > 0 ? (totalRecaudado / totalClientes) : 0;

        alert(
            "===== BALANCE DE LA JORNADA =====\n" +
            "Clientes atendidos: " + totalClientes + "\n" +
            "Total recaudado: $" + totalRecaudado + "\n" +
            "Productos/Servicios vendidos: " + totalProductosVendidos + "\n" +
            "Promedio de gasto por cliente: $" + promedioGasto.toFixed(2)
        );

    } else if (opcionPrincipal === "3") {
        alert("Saliendo del sistema. ¡Buen trabajo en la jornada!");
    } else {
        alert("Opción inválida en el menú principal. Intente de nuevo.");
    }

} while (opcionPrincipal !== "3");