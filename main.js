
// Abrir cotizadores -
const abrirBrand = document.getElementById("abrirBrand");
const abrirWeb = document.getElementById("abrirWeb");
const abrirMotion = document.getElementById("abrirMotion");

const selectores = document.querySelector(".retrato");

abrirBrand.addEventListener("click", abrirCotizar1);
abrirWeb.addEventListener("click", abrirCotizar2);
abrirMotion.addEventListener("click", abrirCotizar3);

function abrirCotizar1(){
    serBrand.className = "";
    selectores.className = "retratoselect";
};

function abrirCotizar2(){
    serWeb.className = "";
    selectores.className = "retratoselect";
};

function abrirCotizar3(){
    serMotion.className = "";
    selectores.className[2] = "retratoselect";
};

// Prevent Default
const guardar = document.getElementById("guardar");
guardar.addEventListener("submit", (event) =>{
    event.preventDefault;
});

// iniciar

// Local Storage
localStorage.setItem("valorHora", "1999");
const valorHora = localStorage.getItem("valorHora");
console.log(valorHora);

// JSON
const motivoBrand = [   {  id: 1,  servicio: "Logo", horas: 18},
                        {  id: 2,  servicio: "Logo + Manual", horas: 24},
                        {  id: 3,  servicio: "Kit Inicial"  , horas: 32},
                        {  id: 4,  servicio: "Branding" , horas: 60}];

const serviciosBranding = (servicio, horas) => { localStorage.setItem(servicio, horas)};

serviciosBranding("Lista De Servcios de Branding", JSON.stringify(motivoBrand)); 

// Modificar valor - (Aqui va a dirigir la suma de todos los items)
const precioBrand = document.getElementById("cotizacionBrand");
precioBrand.innerHTML="$19900";