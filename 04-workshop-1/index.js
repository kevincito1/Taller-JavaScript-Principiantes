//Aprendiendo javaScript
/*En los siguientes ejercicios abarcaremos los diferentes
valores correspondientes a javaScript y afianzaremos lo aplicado*/

let miNumero = 10;
console.log(miNumero);

let miBooleano = true;
console.log(typeof(miBooleano));

let miCadena = "Coca-Cola"
console.log(miCadena.length);

const miArray = ["Kevin", 5, [1, 2, 3]]
console.log(miArray);

const miObjeto = {
    name: "Kevin",
    lastNAme: "Rodas",
    age: 34
}

let nombreUsuario = prompt("Indica tu nombre de usuario")
alert(`Hola ${nombreUsuario} bienvenido`)

let like = confirm("Te gusta javaScript")
if (like){
    alert(`Excelente ${nombreUsuario}, te divertiras mucho`)
}else{
    alert(`Que mal que no te guste, pero vas a ver como te enamoraras`)
}

console.warn("Esto es solo una practica")

console.error("Error 404")

console.table([1,2,3,4,5])