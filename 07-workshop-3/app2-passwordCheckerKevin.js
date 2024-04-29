const userInputPassword = prompt(`Por favor ingresa tu contraseña segura, esta debe cumplir con las siguientes condiciones:\n1.Al menos 8 caracteres\n2.Al menos un numero\n3.Al menos una letra\n4.Al menos un caracter especial: ! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , . | / \\ ~ \``);

const lengthChecker = userInputPassword.length
console.log(lengthChecker)
function numChecker(password){
    const numberString = ['0','1','2','3','4','5','6','7','8','9']
    let includesNumber = !true
    for(i=0;i<numberString.length;i++){
        if(password.includes(numberString[i])){
            includesNumber = true
        }
    }
    return includesNumber;
}
numChecker(userInputPassword);

//const resolveNumChecker = numChecker(userInputPassword)


const onlyLowerUpperCaseLetters = /[a-zA-Z]/
const lowerAndUpperChecker = Boolean(userInputPassword.match(onlyLowerUpperCaseLetters))
console.log(lowerAndUpperChecker)
const specialCharacter = /[!@#$%^&*()+=_\-{}[\]:;\"'<>|/\\~`]/
const specialCharacterChecker = Boolean(userInputPassword.match(specialCharacter))
console.log(specialCharacterChecker)

if(lengthChecker > 8 && numChecker(userInputPassword) === true && lowerAndUpperChecker === true && specialCharacterChecker === true ){
    alert("Tu contraseña cumple con lo requerido, es una contraseña segura")
}else{
    alert("Revisa tu contraseña no esta cumpliendo con los parametros requeridos.")
}

