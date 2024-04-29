let auxiliar = true;
const domain = "myDomain.com";
const users = {};

while (auxiliar) {
  const name = prompt(
    "Ingresa tu primer nombre y tu primer apellido"
  ).toLowerCase();
  if (!name) {
    alert("No se aceptan valores vaciós");
    continue;
  }
  const arrName = name.split(" ");
  if (arrName.length > 2) {
    alert("Por favor rectifica, solo tu primer nombre y tu primer apellido");
    continue;
  }
  const firstThreeNameLetter = arrName[0].slice(0, 3);
  const firstThreeLastNameLetter = arrName[1].slice(0, 3);
  let userName = firstThreeNameLetter + firstThreeLastNameLetter;
  let email = userName + "@" + domain;
  Object.assign(users, {
    [userName]: email,
  });
  let userKeys = Object.keys(users);
  let matchesId = 0;
  userKeys.forEach((element) => {
    console.log(userKeys);
    let semiMatch = "";
    for (let i = 0; i < element.length; i++) {
      semiMatch = semiMatch + element[i];
      if (semiMatch === userName) {
        matchesId = matchesId + 1;
      }
    }
  });

  let exit = confirm("Quieres agregar otro nombre y apellido");
  if (exit !== true) {
    break;
  }
}
console.log(users);
