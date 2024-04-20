/*
- Reto 2: Calculadora de Presupuesto

Descripción: Julian está interesado en desarrollar un programa en JavaScript que le ayude a administrar su presupuesto diario. 
Este programa debe calcular si el dinero que tiene es 
suficiente para cubrir varios gastos como salir a comer, comprar un libro nuevo o ahorrar algo de dinero. 
Julian utilizará una combinación de operadores matemáticos y lógicos para 
tomar estas decisiones.

**Detalles del Reto:**
- Requerimientos del Programa:
    - Definir Parámetros de Presupuesto:
        - El programa deberá permitir a Julian introducir su presupuesto diario y los costos 
	estimados de actividades como comer fuera y comprar libros.
        - Julian también deberá establecer un mínimo de ahorro diario que le gustaría alcanzar.
    - Evaluación de Gastos:
        - Utiliza operadores matemáticos para comparar el presupuesto de Julian con los costos de las actividades.
        - Emplea operadores lógicos para determinar si Julian puede permitirse uno, ambos o ninguno de los gastos, 
	      asegurándose de que aún pueda alcanzar su objetivo de ahorro.
    - Uso de Operadores:
        - Implementa operadores como >, <, &&, ||, y ! para evaluar si las condiciones financieras 
	    permiten a Julian realizar cada actividad.
        - Por ejemplo, si Julian quiere comer fuera y comprar un libro, pero solo tiene presupuesto suficiente 
	para uno de esos gastos, debe decidir cuál priorizar basado en la 
	importancia o el deseo.

**Consejos para Julian:**
Organiza las condiciones de manera que primero verifiques cada gasto individualmente y luego considera combinaciones 
de gastos usando operadores lógicos.

Reflexiona sobre cómo podrías estructurar las condiciones para que Julian no solo vea si puede cubrir sus gastos, 
sino también cómo afectan estas decisiones a su capacidad para ahorrar.

**Instrucciones Adicionales:**
Considera incluir una interfaz simple de usuario que permita a Julian ingresar sus datos financieros y recibir feedback 
inmediato sobre sus opciones de gasto y ahorro. 
Esto podría implementarse a través de prompts para entrada de datos y alertas o console.log para mostrar los resultados.
*/

let budget = Number(prompt("Indica tu presupuesto inicial"))
let bookCost = Number(prompt("Indica el valor de un libro"))
let = foodCost = Number(prompt("Indica el valor a gastar en alimentación"))
const saving = Number(prompt("Indica cuanto es el valor que quieres destinar a ahorrar"))
alert(`Hola Julian, El presupuesto que asignaste es de: $${budget}, tu ahorro establecido es de: $${saving}, el valor que puedes gastar en tus actividades es de $${budget-saving}`)

let desicionBuy = Number(prompt("Quieres comprar algo? 1: Libros, 2: Comida"))
if(desicionBuy === 1){
    while(true){
        let booksQuantity = Number(prompt("Cuantos libros quieres comprar"))
        let totalBooks = bookCost * booksQuantity
        alert(`te presupuesto inicial era de: $${budget} y tu meta de ahorro es de $${saving} y los libros que quieres comprar te van a costar $${totalBooks}`)
        if (budget>=(saving+totalBooks)){
            alert(`Excelente esta compra no afecta tu presupuesto aún te queda disponible $${budget - (saving + totalBooks)}`)
            break;
        }else{
            alert(`Con esta compra no podrias cumplir tu meta de ahorro y estarias en un deficit de $${budget - (saving + totalBooks)} disminuye la cantidad de libros a comprar o pon 0 para eliminarlos.`)
        }
    }
    
} else if(desicionBuy === 2) {
    while(true){
        let foodsQuantity = Number(prompt("Cuantas comidas quieres comprar"))
        let totalFoods = foodCost * foodsQuantity
        alert(`te presupuesto inicial era de: $${budget} y tu meta de ahorro es de $${saving} y las comidas que quieres comprar te van a costar $${totalFoods}`)
        if (budget>=(saving+totalFoods)){
            alert(`Excelente esta compra no afecta tu presupuesto aún te queda disponible $${budget - (saving + totalFoods)}`)
            break;
        }else{
            alert(`Con esta compra no podrias cumplir tu meta de ahorro y estarias en un deficit de $${budget - (saving + totalFoods)} disminuye la cantidad de comida a comprar o pon 0 para eliminarla.`)
        }
    }
} else{
    alert("Seleccionaste una opción incorrecta")
}

