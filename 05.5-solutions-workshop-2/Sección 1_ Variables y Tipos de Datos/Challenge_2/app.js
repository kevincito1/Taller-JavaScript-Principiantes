
let desicion = true

let souvenirsList = [];

function types (data) {
    return alert(`El tipo de dato ingresado como ${data} es de tipo ${typeof(data)}`)
    }

while (desicion) {  


    let nameSouvenir = prompt("indica el nombre del souvenir")
    let priceSouvenir = Number(prompt("Indica el precio del souvenir"))
    let disponibilitySouvenir = prompt("indica si el articulo esta o no disponible").toLowerCase();
    if(disponibilitySouvenir === "si"){
    disponibilitySouvenir = true
    }else {
    disponibilitySouvenir = false
    }

    const souvenirs = {
        name: nameSouvenir,
        price: priceSouvenir,
        disponibility: disponibilitySouvenir,
    }
       
    souvenirsList.push(souvenirs);  

    let moreSouvenirs = prompt("Deseas agregar otro souvenir?").toLowerCase();
    if (moreSouvenirs === "no"){
        desicion = false        
    }    

    types(nameSouvenir);
    types(priceSouvenir);
    types(disponibilitySouvenir);

}

console.log(souvenirsList);

  

