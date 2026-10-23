# 📋 Evaluación y Retroalimentación Práctica: JavaScript (Web 1)

**Estudiante:** Brandon Gonzalez  
**Documento de Identidad:** 1214743083  
**Carpeta:** `1214743083-Brandon-gonzalez`  
**Ejercicio Asignado:** Ejercicio 1 — Taquilla de Cine 'CineStar'  

---

## 🎯 Calificación Final: **4.0/ 5.0**

---

### 📊 Desglose por Criterios de Evaluación

- **1. Estructura y Organización de Git / Entrega (1.0 pt):** **1.0 / 1.0**  
  Tu archivo `index.html` enlaza correctamente con tu script de JavaScript. Como observaciones de forma, nombraste tu carpeta con mayúscula (`1214743083-Brandon-gonzalez`) en lugar de minúsculas y llamaste a tu archivo `Ejercicio1.js` en lugar del nombre estándar solicitado (`app.js` o `index.js`).

- **2. Estructura de Control y Modularización (1.5 pts):** **1.5 / 1.5**  
  Se valida favorablemente el uso de funciones recursivas (`MenuPrincipal()`, `MenuAtencionCliente()`, `EntradasDeCine()`, `SnackYConfiteria()`, `Combos()`) como mecanismo de control de flujo para navegar entre los menús y submenús. Modularizaste tu código en 7 funciones independientes.

- **3. Restricciones Técnicas y Validaciones (0.8 pt):** **0.8 / 0.8**  
  Cumpliste estrictamente con la restricción de no utilizar arreglos (`[]`) ni objetos (`{}`), gestionando la información con variables primitivas y acumuladores (0.5). Te faltó validar que las cantidades ingresadas por el cliente sean números enteros positivos mayores a cero (-0.3).

- **4. Lógica de Negocio y Funcionalidad (1.7 pts):** **1.0 / 1.7**  
  Registraste con total precisión las 3 áreas y los 9 productos con sus precios correspondientes de CineStar (entradas 2D, 3D, VIP, snacks y combos) y acumulaste correctamente las ventas para el balance (0.7). Sin embargo, en la facturación omitiste los descuentos del 15% por tarjeta CineStar Club y del 5% por efectivo >$30.000 (-0.5), omitiste la donación voluntaria de $2.000 (-0.3) y no mostraste el resumen detallado de la factura (-0.1). Además, tu balance produce `NaN` por división por cero si se consulta antes de atender clientes (-0.1).

---

### 📝 Observaciones Detalladas y Retroalimentación

Brandon, tu solución es funcional, navega adecuadamente por todas las áreas del cine y registra las compras acumuladas de manera modular. A continuación tienes los puntos clave para tener en cuenta:

#### ✅ Fortalezas destacadas:
1. **Catálogo completo y exacto:** Registraste todas las opciones de entradas ($12.000, $16.000, $22.000), confitería ($10.000, $6.000, $8.500) y combos ($13.500, $24.000, $38.000) con los precios exactos del enunciado.
2. **Modularización:** Dividiste la atención al cliente en funciones específicas para cada menú y submenú.
3. **Restricciones primitivas:** No utilizaste arreglos ni objetos, cumpliendo la restricción técnica del ejercicio.

#### 📌 Oportunidades de mejora y aspectos omitidos:

1. **Lógica de descuentos en la facturación (`Facturar()`):**
   En tu código actual (líneas 124-129) solo se muestra el valor neto acumulado:
   ```javascript
   function Facturar (){
       alert("El valor total de su factura es = $" + valorNeto);
       acumuladorClientes ++;
       acumuladorFacturas = acumuladorFacturas + valorNeto;
       valorNeto = 0;
   }
   ```
   **Lo que faltó implementar según el enunciado:**
   - Preguntar si el cliente tiene **Tarjeta CineStar Club** para aplicar un **15% de descuento** sobre el subtotal.
   - Si no tiene tarjeta pero paga en **Efectivo** y supera **$30.000**, aplicar un **5% de descuento**.
   - Preguntar si desea donar **$2.000** para el fondo de fomento cinematográfico.
   - Mostrar el desglose: *Subtotal, Descuento aplicado, Donación y Total final a pagar*.

2. **Validación de cantidades:**
   Al solicitar la cantidad (`let Cantidad = Number(prompt("Ingrese la cantidad: "))`), no se valida que el valor sea mayor a 0. Si el usuario escribe 0 o números negativos, el sistema los procesa sin alertar.

3. **Protección en el Balance General:**
   En `BalanceGeneral()`, si se consulta el balance antes de atender clientes, la operación `(acumuladorFacturas / acumuladorClientes)` divide `0 / 0`, imprimiendo `NaN`. Se recomienda condicionar:
   ```javascript
   let promedio = acumuladorClientes > 0 ? (acumuladorFacturas / acumuladorClientes) : 0;
   ```

---
*Evaluación generada con base en los lineamientos del repositorio y los enunciados oficiales de la evidencia práctica.*
