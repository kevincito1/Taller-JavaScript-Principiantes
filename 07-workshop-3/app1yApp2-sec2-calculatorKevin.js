
let flag = true;
while(flag){
    const choiceCalculator = prompt(
        "Hola, para conocer el promedio de calificaciones oprime 1\n para la estadistica de las calificaciones oprime 2?"
      );
    if (choiceCalculator === "1") {
        while (flag) {
          let califications = prompt("Ingresa tus calificaciones, separadas por ','");
          const validatorcom = califications.includes(",");
          if (validatorcom === true) {
            let arrayCalifications = califications.split(",").map((e) => Number(e))
            const sumCalifications = arrayCalifications.reduce((total, num) => {
                return total + num;
              });
            alert(`El promedio de las calificaciones ingresadas es de:${sumCalifications / arrayCalifications.length}`);
            flag = !true;
          }else{
              alert("Error en la ingresada de datos, utiliza ',' para separar los valores");
          }
        }
        flag = !true
      }else if(choiceCalculator === "2"){
          while(flag){
              let califications = prompt("Ingresa tus calificaciones, separadas por ','");
          const validatorcom = califications.includes(",");
          if (validatorcom === true) {
            let arrayCalifications = califications.split(",").map((e) => Number(e))
            const averageCalifications = arrayCalifications.reduce((total, num)=>{
              return total+num
            });
            const minCalification = Math.min.apply(Math, arrayCalifications);
            const maxCalification = Math.max.apply(Math, arrayCalifications);
            const approved = arrayCalifications.filter((approv)=> approv>=70).length;
            const failure = arrayCalifications.filter((fail)=> fail<70).length;
            const order = arrayCalifications.sort().reverse()
            alert(`Estos son los resultados:\n Calificación Promedio: ${averageCalifications/arrayCalifications.length}\n Calificación Maxima: ${maxCalification}\n Calificación Minima: ${minCalification}\n Aprobados: ${approved}\n No aprobados ${failure}\n Lista de Calificaciones Ordenadas ${order}`)
            flag = !true      
          }else{
              alert("Error en la ingresada de datos, utiliza ',' para separar los valores");
          }
          }
          flag = !true
      }else{
          alert("Opción no válida, intenta nuevamente.")
      }
}

