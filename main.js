let hola = alert ("Hola mi nombre es Robot, quisiera saber como esta conformada tu familia. Sin malas intenciones :)");

let nombreFamiliar = prompt("Ingrese el nombre de su familiar. Para finalizar escriba Salir");

while((nombreFamiliar !== "Salir" ) || (nombreFamiliar !== "salir" )){
    parentescoFamiliar = prompt("Ingrese su parentesco con " + nombreFamiliar);
    edadFamiliar = parseInt(prompt("Ingresa la edad de " + nombreFamiliar ));
    console.log(nombreFamiliar + " es su " + parentescoFamiliar + " y tiene " + edadFamiliar + " años.");
    nombreFamiliar = prompt("Ingrese el nombre de otro familiar. Para finalizar escriba Salir");

}

console.log("Gracias por participar")
