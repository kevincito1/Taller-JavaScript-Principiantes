const destiny = prompt("A donde quieres viajar?")
let time = Number(prompt("Cuantos días vas a viajar?"))
let budget = Number(prompt("Con cuanto presupuesto cuentas para este viaje?"))

//Estimado gastos diarios

const foodDaily = 200
const transportDaily = 50
const entertainmentDaily = 500
const hotelDaily = 150

let enoughtMoney = (foodDaily + transportDaily + entertainmentDaily + hotelDaily)*time
console.log(enoughtMoney);

while(budget<= enoughtMoney){

    if (budget >= enoughtMoney) {
        alert(`Felicidades Julian no tendras ningún problema con tu viaje, tu presupuesto es de $${budget} y tus gastos estimados seran de $${enoughtMoney}`)
    } else {
        alert(`Julian debes revisar tus actividades, ya que al parecer con tu presupuesto de $${budget} no te alcanzara, ya que tus gastos estimados serian $${enoughtMoney}`)
        time = Number(prompt("Indica la nueva cantidad de días a quedarte"))
        budget = Number(prompt("Indica tu nuevo presupuesto"))
        }

    enoughtMoney = (foodDaily + transportDaily + entertainmentDaily + hotelDaily)*time
    if (budget >= enoughtMoney){
        alert(`Felicidades Julian no tendras ningún problema con tu viaje, tu presupuesto es de $${budget} y tus gastos estimados seran de $${enoughtMoney}`)
    }
    console.log(enoughtMoney)
    break;
}



