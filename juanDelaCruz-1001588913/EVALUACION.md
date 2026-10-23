# 📋 Evaluación y Retroalimentación Práctica: JavaScript (Web 1)

**Estudiante:** Juan de la Cruz  
**Documento de Identidad:** 1001588913  
**Carpeta:** `juanDelaCruz-1001588913`  
**Ejercicio Asignado:** Ejercicio 3 — Tienda de Mascotas 'Pet Center'  

---

## 🎯 Calificación Final: **3.7 / 5.0**

---

### 📊 Desglose por Criterios de Evaluación

- **1. Estructura y Organización de Git / Entrega (1.0 pt):** **0.7 / 1.0**  
  Nombraste tu carpeta invirtiendo el orden y en CamelCase (juanDelaCruz-1001588913) en vez de minúsculas con documento inicial (1001588913-juan-de-la-cruz).

- **2. Estructura de Control y Modularización (1.5 pts):** **1.0 / 1.5**  
  Creaste funciones modulares. Sin embargo, en el Ciclo 3 (menú de productos) colocaste una sentencia break; incondicional en la línea 200, provocando que el bucle se rompa en la primera compra e impidiendo al cliente agregar más de un producto en la misma categoría.

- **3. Restricciones Técnicas y Validaciones (0.8 pt):** **0.6 / 0.8**  
  No utilizaste arreglos ni objetos. En servicios no solicitaste la cantidad (asumiste 1 fijo). Tu programa genera un error en tiempo de ejecución (ReferenceError) al facturar debido al uso de la variable no declarada totalVentasDia.

- **4. Lógica de Negocio y Funcionalidad (1.7 pts):** **1.4 / 1.7**  
  Precios y descuentos bien calculados y donación de $3.000 presente. El balance acumulado falla o produce NaN debido a que totalVentasDia nunca fue declarada en el código.

---

### 📝 Observaciones Detalladas y Retroalimentación

Juan, tu diseño modular inicial es bueno. Debes corregir la instrucción break; que expulsa al usuario del menú de productos antes de tiempo y declarar todas tus variables con let para evitar que el programa falle al facturar.

#### 💥 1. Error de ejecución (ReferenceError):
Al facturar (`app.js`, línea 223):
```javascript
totalVentasDia += totalCliente;
```
**Salida de consola:** `Uncaught ReferenceError: totalVentasDia is not defined at app.js:223`.  
La variable `totalVentasDia` la utilizas en las líneas 77, 83 y 223 sin haberla declarado nunca con `let`, `const` o `var`.

#### 📌 2. Interrupción prematura del Ciclo 3:
En la línea 200 incluiste un `break;` incondicional que expulsa al cliente al menú de departamentos en su primera compra, impidiendo agregar múltiples productos en la misma categoría.

---
*Evaluación generada con base en los lineamientos del repositorio y los enunciados oficiales de la evidencia práctica.*
