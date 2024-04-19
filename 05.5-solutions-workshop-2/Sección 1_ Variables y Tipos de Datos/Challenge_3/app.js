// El usuario indica el presupuesto con el que cuenta.

let budget = Number(prompt("Ingresa la cantidad del presupuesto con el que cuentas"));
let hotel = Number(prompt("Indica el precio por noche del lugar donde te hospedaras"));
let transport = Number(prompt("Indica la cantidad de viajes internos que estimes hacer por día"));
let food = Number(prompt("Indica el precio promedio de la comida, teniendo en cuenta que comeras 3 veces al día"));
let days = Number(prompt("Indica cuantos días vas a estar en el destino"))

function onVacation(budget, hotel, transport, food) {
    let wastes = ((hotel * days)+((transport * 10000) * days)+((food * 3) * days));
    let dispo = budget - wastes;
    let threshold = 500000;
    if(budget > wastes && threshold <= dispo ){
        alert(`El valor de tu presupuesto es de $${budget} y los gastos estimados son de $${wastes}, vas a tener disponible $${dispo} por si quieres algo adicional`);
    }else{
        alert(`El valor de tu presupuesto es de $${budget} y los gastos estimados son de $${wastes}, no te alcanzara, prueba reduciendo el número de días o aumentando tu presupuesto`);
    }

    

    
}

onVacation(budget, hotel, transport, food);

