const email = prompt("Ingresa un correo electronico valido")

const checkerAtSign = email.includes("@")
const checkerPoint = email.split("@")[1].includes(".")
const checkerAtSignTogetherPoint = email.includes("@.")
const checkerBlankSpace = email.includes(" ")

if(checkerAtSign===true && checkerPoint===true && checkerAtSignTogetherPoint===false && checkerBlankSpace===false){
    alert("El correo ingresado cumple las condiciones")
}else{
    alert("El correo ingresado no cumple las condiciones")
}