// Entrega 1

// let hola = alert ("Hola mi nombre es Robot, quisiera saber como esta conformada tu familia. Sin malas intenciones :)");

// let nombreFamiliar = prompt("Ingrese el nombre de su familiar.");

// while(nombreFamiliar !== "Salir"){
//     parentescoFamiliar = prompt("Ingrese su parentesco con " + nombreFamiliar);
//     edadFamiliar = parseInt(prompt("Ingresa la edad de " + nombreFamiliar ));
//     console.log(nombreFamiliar + " es su " + parentescoFamiliar + " y tiene " + edadFamiliar + " años.");

//     nombreFamiliar = prompt("Ingrese el nombre de otro familiar. Para finalizar escriba Salir");

// }

// console.log("Gracias por participar")

// let hola = prompt("Hola! contamos con estos destinos, escribe cual quieres visitar: USA - CHILE - NEUQUEN")

// Entrega 2

let aviso = alert("Vamos a buscar tu destino")

//Clase y funcion constructora

class paquetesDeViaje {
    constructor(lugar, precioBase, tiempoDeVuelo) {
        this.lugar = lugar.toUpperCase();
        this.precioBase = parseFloat(precioBase);
        this.tiempoDeVuelo = (tiempoDeVuelo)+"HS";
    }
    precioFinal() {
        this.precioBase = this.precioBase * 1.21;
    }
    valorPorTiempo
    () {
        this.precioBase / this.tiempoDeVuelo;
    }
}
//Array de paquetes
const paquetes = [];
paquetes.push(new paquetesDeViaje ("USA", "899", 12));
paquetes.push(new paquetesDeViaje("CHILE", "329", 4));
paquetes.push(new paquetesDeViaje("NEUQUEN", "199",2));


// Iteración
for (const paquetesDeViaje of paquetes)
paquetesDeViaje.precioFinal();

console.log(paquetes)

// Metodos de búsqueda
let verPrimero = paquetes.find((el) => el.lugar === "CHILE");
console.log (verPrimero)
const verSegundo = paquetes.filter((el) => el.precioBase < 999);
console.log (verSegundo)



//let iniciarBusqueda = prompt("Tenemos estos destinos disponibles eligue el que más gustes: USA - CHIlE - NEUQUEN. O escriba Terminar para finalizar.");


// while(iniciarBusqueda != "Terminar" ){
//     switch (iniciarBusqueda) {
//         case "USA":
//             alert("Haz elegido " + paquetes.lugar[0] + " tiene un precio base de $" + paquetes.precioBase[0] + ". Final con impuestos de $" + paquetes.precioFinal[0]);
//             break;
//         case "CHILE":
//             alert("Haz elegido " + paquetes.lugar[1] + " tiene un precio base de $" + paquetes.precioBase[1] + ". Final con impuestos de $" + paquetes.precioFinal[1]);
//             break;
//         case "NEUQUEN":
//             alert("Haz elegido " + paquetes.lugar[2] + " tiene un precio base de $" + paquetes.precioBase[2] + ". Final con impuestos de $" + paquetes.precioFinal[2]);
//             break;
//         default:
//             alert("Tu destino no se encuentra disponible");
//             break;
//     }
//     iniciarBusqueda = prompt("Tenemos estos destinos disponibles eligue el que más gustes: USA - CHIlE - NEUQUEN. O escriba Terminar para finalizar.");
// }