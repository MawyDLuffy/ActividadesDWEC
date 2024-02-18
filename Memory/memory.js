// Declaración de variables y eventos

let botonComenzar = document.getElementById("start");

botonComenzar.addEventListener("click", comenzarJuego);

let color1 = document.getElementById("C1");
let color2 = document.getElementById("C2");
let color3 = document.getElementById("C3");
let color4 = document.getElementById("C4");

color1.addEventListener("click", pulsarBoton1);
color2.addEventListener("click", pulsarBoton2);
color3.addEventListener("click", pulsarBoton3);
color4.addEventListener("click", pulsarBoton4);

let secuenciaPulsada = [];
let haFallado = false;
let secuencia = [];
let deshabilitarColores = true;

async function comenzarJuego() {

    botonComenzar.disabled = true;

    //Llenar el array con 4 números aleatorios:
    for (let i = 0; i <= 3; i++) {
        secuencia.push((Math.floor(Math.random() * 4) + 1));
    }
    console.log(secuencia);
    await iluminar();
    deshabilitarColores = false;
}

async function iluminar() {

    for (let i = 0; i < secuencia.length; i++) {

        await new Promise(resolve => {
            setTimeout(() => {
                iluminarCuadrado(secuencia[i]);
                resolve(); // Resuelve la promesa después de iluminar el cuadro
            }, 1500);
        });
    }

}

function iluminarCuadrado(numero) {

    let cuadrados = document.getElementsByClassName("cuadrado");

    cuadrados[numero - 1].style.border = "8px solid purple";

    setTimeout(() => {
        apagarCuadrado(numero);
    }, 1000);

}

function apagarCuadrado(numero) {

    let cuadrados = document.getElementsByClassName("cuadrado");

    cuadrados[numero - 1].style.border = "0px solid purple";

}

function apagarColor() {
    color1.style.backgroundColor = "rgb(226, 117, 190)";
    color2.style.backgroundColor = "rgb(114, 126, 234)";
    color3.style.backgroundColor = "rgb(214, 201, 131)";
    color4.style.backgroundColor = "rgb(116, 194, 130)";
}

// Parte del jugador:

function pulsarBoton1() {
    if (!deshabilitarColores) {
        color1.style.backgroundColor = "rgb(202, 76, 160)";
        setTimeout(() => {
            apagarColor();
        }, 100);
        secuenciaPulsada.push(1);
        comprobarSecuencia();
    }
}
function pulsarBoton2() {
    if (!deshabilitarColores) {
        color2.style.backgroundColor = "rgb(72, 79, 144)";
        setTimeout(() => {
            apagarColor();
        }, 100);
        secuenciaPulsada.push(2);
        comprobarSecuencia();
    }
}
function pulsarBoton3() {
    if (!deshabilitarColores) {
        color3.style.backgroundColor = "rgb(125, 119, 86)";
        setTimeout(() => {
            apagarColor();
        }, 100);
        secuenciaPulsada.push(3);
        comprobarSecuencia();
    }
}
function pulsarBoton4() {
    if (!deshabilitarColores) {
        color4.style.backgroundColor = "rgb(78, 128, 87)";
        setTimeout(() => {
            apagarColor();
        }, 100);
        secuenciaPulsada.push(4);
        comprobarSecuencia();
    }
}

// Comparación de la primera combinacion de colores con la combinación que pulsa el usuario.
function comprobarSecuencia() {
    for (let i = 0; i < secuenciaPulsada.length; i++) {

        console.log(secuenciaPulsada);
        if (secuenciaPulsada[i] != secuencia[i]) {
            haFallado = true;
        }

    }
    if (!haFallado && secuenciaPulsada.length == 4) {  
        setTimeout(() => {
            alert("¡Ha ganado!"); 
        }, 500);   
        reiniciarJuego();   

    }

    if (haFallado) {
        setTimeout(() => {
            alert("¡Ha perdido!");
        }, 500);
        reiniciarJuego();
    }
}


function reiniciarJuego() {

    secuencia = [];
    secuenciaPulsada = [];
    botonComenzar.disabled = false;
    deshabilitarColores = true;
}


//Lo ideal sería hacer solo una funcion y dentro de esta pues recoger qué botón se ha pulsado pero lo complica, de este modo
//se decide por separar las funciones de cada botón porque solo son 4.
//Al pulsarlo mete el número correspondiente en el array que se compara con el array que se hace solo.