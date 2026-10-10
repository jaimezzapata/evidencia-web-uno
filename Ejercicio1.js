/* Estructura de Menús (3 Ciclos Anidados)
El sistema debe estar estructurado obligatoriamente mediante tres niveles de ciclos anidados:

Nivel 1 — Menú Principal (Ciclo 1):
Debe repetirse hasta que se elija cerrar la taquilla:

Atender cliente
Ver balance de la jornada
Salir del sistema */
let repetir = true;
let acumuladorClientes = 0;
let acumuladorFacturas = 0;
let valorNeto = 0;
let cantidadProductos = 0;

function MenuPrincipal(){
    alert("Bienvenido a CineStar");
    let opcion = Number(prompt("Menu de opciones \n1. atiencion cliente \n2.Ver balance de la jornada \n3.salir del sistema"));
    if(opcion == 1){
        MenuAtencionCliente();
    }else if(opcion == 2){
        BalanceGeneral();        
    }else if(opcion == 3){
        let Salida = prompt("Estas seguro que deseas salir, Marca Si, si quieres y No si quieres continuar")  
         if(Salida == "Si"){
            alert("Te esperamos Pronto")
         }else if(Salida == "No"){
            MenuPrincipal();
         }     
    }

}
MenuPrincipal();

function MenuAtencionCliente (){
    let menuAreaVentas = Number(prompt("Menu area de ventas \n1. Entradas de cine \n2. Confiteria y Snack  \n3. Combos Especiales \n4. Finalizar compra y facturar"));
    if(menuAreaVentas == 1){
        EntradasDeCine();
    }else if(menuAreaVentas == 2){
        SnackYConfiteria();
    }else if(menuAreaVentas == 3){
        Combos();
    }else if(menuAreaVentas == 4){
        Facturar ();
        MenuPrincipal();
    }
}



function EntradasDeCine (){
    let OpcionesEntradas = Number(
      prompt("Entradas de cine: \n1. Entrada General 2D: $12.000 \n2. Entrada Sala 3D: $16.000 \n3. Entrada VIP / IMAX: $22.000 \n4. Volver al menú de áreas"));
        if(OpcionesEntradas == 1){
             let Cantidad = Number(prompt("Ingrese la cantidad: "))
             valorNeto = valorNeto + (Cantidad * 12000);
             cantidadProductos += Cantidad 
             EntradasDeCine();
            }else if(OpcionesEntradas == 2){
                let Cantidad = Number(prompt("Ingrese la cantidad: "))
                valorNeto = valorNeto + (Cantidad * 16000);
                cantidadProductos += Cantidad 
                EntradasDeCine();
            }else if (OpcionesEntradas == 3){
                let Cantidad = Number(prompt("Ingrese la cantidad: "))
                valorNeto = valorNeto + (Cantidad * 22000);
                cantidadProductos += Cantidad 
                EntradasDeCine();
            }else if(OpcionesEntradas == 4){
                MenuAtencionCliente();
            }
            
    }

function SnackYConfiteria(){
    let OpcionesEntradas = Number(
      prompt("Confiteria y Snack: \n1. Crispetas / Palomitas Grandes: $10.000 \n2. Gaseosa Grande: $6.000 \n3. Perro Caliente / Hot Dog: $8.500 \n4. Volver al menú de áreas"));

      if(OpcionesEntradas == 1){
             let Cantidad = Number(prompt("Ingrese la cantidad: "))
             valorNeto = valorNeto + (Cantidad * 10000);
             cantidadProductos += Cantidad 
             SnackYConfiteria();
            }else if(OpcionesEntradas == 2){
                let Cantidad = Number(prompt("Ingrese la cantidad: "))
                valorNeto = valorNeto + (Cantidad * 6000);
                cantidadProductos += Cantidad 
                SnackYConfiteria();
            }else if (OpcionesEntradas == 3){
                let Cantidad = Number(prompt("Ingrese la cantidad: "))
                valorNeto = valorNeto + (Cantidad * 8500);
                cantidadProductos += Cantidad 
                SnackYConfiteria();
            }else if(OpcionesEntradas == 4){
                MenuAtencionCliente();
            }

}

function Combos (){
    let OpcionesEntradas = Number(
      prompt("Combos Especiales: \n1. Combo Personal (Crispeta Mediana + Gaseosa): $13.500 \n2. Combo Pareja (Crispeta Grande + 2 Gaseosas + Dulce): $24.000 \n3. Combo Familiar (2 Crispetas Grandes + 3 Gaseosas + 2 Perros): $38.000 \n4. Volver al menú de áreas"));

    if(OpcionesEntradas == 1){
             let Cantidad = Number(prompt("Ingrese la cantidad: "))
             valorNeto = valorNeto + (Cantidad * 13500);
             cantidadProductos += Cantidad 
                Combos();
            }else if(OpcionesEntradas == 2){
                let Cantidad = Number(prompt("Ingrese la cantidad: "))
                valorNeto = valorNeto + (Cantidad * 24000);
                cantidadProductos += Cantidad 
                Combos();
            }else if (OpcionesEntradas == 3){
                let Cantidad = Number(prompt("Ingrese la cantidad: "))
                valorNeto = valorNeto + (Cantidad * 38000);
                cantidadProductos += Cantidad 
                Combos();
            }else if(OpcionesEntradas == 4){
                MenuAtencionCliente();
            }
}

function Facturar (){
    alert("El valor total de su factura es = $" + valorNeto);
    acumuladorClientes ++;
    acumuladorFacturas = acumuladorFacturas + valorNeto;
    valorNeto = 0;
}

function BalanceGeneral(){
    let BalanceDeJornada = alert("Balance de la jornada: \nTotal clientes : " + acumuladorClientes + "\nTotal ventas: " + acumuladorFacturas + "\nTotal de productos vendidos: " + cantidadProductos + "\nPromedio de facturacion por cliente : " + (acumuladorFacturas/acumuladorClientes));

}

