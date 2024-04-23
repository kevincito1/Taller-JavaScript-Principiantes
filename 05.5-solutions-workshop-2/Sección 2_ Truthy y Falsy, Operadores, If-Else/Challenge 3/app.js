const weather = ["soleado", "lluvia", "nevado"]
const articlesSunny = [{
    name: "Gafas",
    weight: 0.2,
    space: 1
},
{
    name: "Bronceador",
    weight: 0.3,
    space: 1 
},
{
    name: "Traje de baño",
    weight: 0.3,
    space: 1
}]

const articlesRainy = [{
    name: "Paraguas",
    weight: 2,
    space: 3
},
{
    name: "Impermeable",
    weight: 2,
    space: 2
}]

const articlesSnowy = [{
    name: "Gorro calefactor",
    weight: 0.5,
    space: 1
},
{
    name: "Guantes calefactores",
    weight: 0.6,
    space: 1
},
{
    name: "Chaqueta calefactora",
    weight: 5,
    space: 4

}]

const spaceBagDispo = 6;
const weightBagDispo = 10;

articlesSunny.forEach(element => {
    console.log(element[0])
});