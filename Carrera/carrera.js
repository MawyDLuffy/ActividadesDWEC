// Comenzar la carrera

let botonComenzar = document.getElementById("start");

botonComenzar.addEventListener("click", empezarCarrera);

// Hacer que empiecen a moverse los cangrejos

function empezarCarrera() {

    botonComenzar.disabled = true;

    //Velocidad de los cangrejos:
    movIntervalo = setInterval(movimiento, 2);
}

// Función para el movimiento de los cangrejos:

function movimiento() {

    let cangrejo1 = document.getElementById("cangrejo1");
    let cangrejo2 = document.getElementById("cangrejo2");

    //Acceso al css de los elementos y generador de número aleatorio:

    let movCangrejo1 = Math.floor(Math.random() * 3);
    let movCangrejo2 = Math.floor(Math.random() * 3);

    // Trae el valor en px desde el css y le quita el px con el substring:

    let rangoMovimientoC1 = cangrejo1.style.left.substring(0, cangrejo1.style.left.length - 2);
    let rangoMovimientoC2 = cangrejo2.style.left.substring(0, cangrejo2.style.left.length - 2);

    //Transformar los píxeles anteriores en números:

    rangoMovimientoC1 = Number(rangoMovimientoC1);
    rangoMovimientoC2 = Number(rangoMovimientoC2);

    cangrejo1.style.left = (rangoMovimientoC1 + movCangrejo1) + "px";
    cangrejo2.style.left = (rangoMovimientoC2 + movCangrejo2) + "px";

    //Comprobar si alguno ha ganado:
    comprobarVictoria(rangoMovimientoC1,rangoMovimientoC2);
    console.log(cangrejo1.style.left);
    console.log(cangrejo2.style.left);
}

//Finalizar el juego:

function comprobarVictoria(rangoC1,rangoC2) {

    if (rangoC1 >= 1770) {

        alert("¡Ha ganado el cangrejo número 1!");
        finJuego();
       

    }else if (rangoC2 >= 1770){

        alert ("¡Ha ganado el cangrejo número 2!");
        finJuego();
        

    }

}

function finJuego(){

    clearInterval(movIntervalo);
    cangrejo1.style.left = "0px";
    cangrejo2.style.left = "0px";
    botonComenzar.disabled = false;

}





