const weather = ["soleado", "lluvia", "nevado"];
const articlesSunny = [
  {
    name: "Gafas",
    weight: 2,
    space: 2,
  },
  {
    name: "Bronceador",
    weight: 1,
    space: 1,
  },
  {
    name: "Traje de baño",
    weight: 2.5,
    space: 3,
  },
];

const articlesRainy = [
  {
    name: "Paraguas",
    weight: 2,
    space: 3,
  },
  {
    name: "Impermeable",
    weight: 2,
    space: 2,
  },
];

const articlesSnowy = [
  {
    name: "Gorro calefactor",
    weight: 1,
    space: 1,
  },
  {
    name: "Guantes calefactores",
    weight: 1.5,
    space: 1.5,
  },
  {
    name: "Chaqueta calefactora",
    weight: 3,
    space: 4,
  },
];

let spaceBagDispo = 6;
let weightBagDispo = 5;

let randomWeather = weather[Math.floor(Math.random() * weather.length)];

console.log(randomWeather);

if (randomWeather === "soleado") {
  let articlesforSunny = [];
  for (let j = 0; j <= articlesSunny.length - 1; j++) {
    articlesforSunny.push(articlesSunny[j].name);
  }
    alert("Hola Julian te espera una temporada soleada");
  while (spaceBagDispo >= 0 && weightBagDispo >=0) {
    let choice = prompt(`que articulo deseas llevar de los siguientes: 1 ${articlesforSunny[0]} 2 ${articlesforSunny[1]} 3 ${articlesforSunny[2]}`)   
      if (weightBagDispo >= articlesSunny[choice -1].weight && spaceBagDispo >= articlesSunny[choice -1].space) {
        weightBagDispo = weightBagDispo - articlesSunny[choice -1].weight;
        spaceBagDispo = spaceBagDispo - articlesSunny[choice -1].space;
    }else{
        alert("No tienes espacio o disponibilidad de peso suficiente para agregar este articulo")
    }
    let addArticles = confirm(`Julian aun te queda disponible ${weightBagDispo} de peso y ${spaceBagDispo} de espacio, quieres llevar algo más ?`)
    if(addArticles !== true ){
        break;
    }   
  }
}else if(randomWeather === "lluvia"){
    let articlesforRainy = [];
    for (let j = 0; j <= articlesRainy.length - 1; j++) {
      articlesforRainy.push(articlesRainy[j].name);
    }
      alert("Hola Julian te espera una temporada de lluvia");
    while (spaceBagDispo >= 0 && weightBagDispo >=0) {
      let choice = prompt(`que articulo deseas llevar de los siguientes: 1 ${articlesforRainy[0]} 2 ${articlesforRainy[1]}`)   
        if (weightBagDispo >= articlesRainy[choice -1].weight && spaceBagDispo >= articlesRainy[choice -1].space) {
          weightBagDispo = weightBagDispo - articlesRainy[choice -1].weight;
          spaceBagDispo = spaceBagDispo - articlesRainy[choice -1].space;
      }else{
          alert("No tienes espacio o disponibilidad de peso suficiente para agregar este articulo")
      }
      let addArticles = confirm(`Julian aun te queda disponible ${weightBagDispo} de peso y ${spaceBagDispo} de espacio, quieres llevar algo más ?`)
      if(addArticles !== true ){
          break;
      }   
    }
}else if(randomWeather === "nevado"){
    let articlesforSnowy = [];
    for (let j = 0; j <= articlesSnowy.length - 1; j++) {
      articlesforSnowy.push(articlesSnowy[j].name);
    }
      alert("Hola Julian te espera una temporada nevada");
    while (spaceBagDispo >= 0 && weightBagDispo >=0) {
      let choice = prompt(`que articulo deseas llevar de los siguientes: 1 ${articlesforSnowy[0]} 2 ${articlesforSnowy[1]} 3 ${articlesforSnowy[2]}`)   
        if (weightBagDispo >= articlesSnowy[choice -1].weight && spaceBagDispo >= articlesSnowy[choice -1].space) {
          weightBagDispo = weightBagDispo - articlesSnowy[choice -1].weight;
          spaceBagDispo = spaceBagDispo - articlesSnowy[choice -1].space;
      }else{
          alert("No tienes espacio o disponibilidad de peso suficiente para agregar este articulo")
      }
      let addArticles = confirm(`Julian aun te queda disponible ${weightBagDispo} de peso y ${spaceBagDispo} de espacio, quieres llevar algo más ?`)
      if(addArticles !== true ){
          break;
      }   
}
}