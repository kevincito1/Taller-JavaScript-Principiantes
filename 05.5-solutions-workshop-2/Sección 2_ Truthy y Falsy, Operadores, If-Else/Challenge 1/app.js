// datos Truthy
/*
true
  {}
  []
  24 número diferente de 0 puede ser negativo
  "foo"
  infinity
  */

  //datos Falsey
  /*
  false
  null
  undefined
  0 el número 0
  NaN
  '' cadenas de texto vacías
  ""
  */

  let climate = [true, {}, [], 12, "g", Infinity, false, null, undefined, 0, NaN,""];
  let energy = [true, {}, [], 12, "g", Infinity, false, null, undefined, 0, NaN,""];
  let work = [true, {}, [], 12, "g", Infinity, false, null, undefined, 0, NaN,""];

  
  if(climate[Math.floor(Math.random() * climate.length)] === true && energy[Math.floor(Math.random() * energy.length)] === true){
    console.log('Julian Sale a correr')
  } 
  else if(climate[Math.floor(Math.random() * climate.length)] === true && work[Math.floor(Math.random() * work.length)] === true){
    console.log('Julian trabaja fuera')
  }
  else if(climate[Math.floor(Math.random() * climate.length)] === false && energy[Math.floor(Math.random() * energy.length)] === true){
    console.log('Julian hace ejercicio en casa')
  }
  else if(work[Math.floor(Math.random() * work.length)] === true && energy[Math.floor(Math.random() * energy.length)] === true ) {
    console.log('Julian trabaja en casa')
  }
  else {
    console.log('Julian se relaja en casa')
  }
