/* =========================
   FECHA DE INICIO
========================= */

const fechaInicio = new Date("2025-05-31T00:00:00");


/* =========================
   CONTADOR
========================= */

function actualizarContador() {

    const ahora = new Date();

    let diferencia =
        ahora - fechaInicio;


    if (diferencia < 0) {
        diferencia = 0;
    }


    const segundosTotales =
        Math.floor(diferencia / 1000);


    const segundos =
        segundosTotales % 60;


    const minutosTotales =
        Math.floor(segundosTotales / 60);


    const minutos =
        minutosTotales % 60;


    const horasTotales =
        Math.floor(minutosTotales / 60);


    const horas =
        horasTotales % 24;


    const diasTotales =
        Math.floor(horasTotales / 24);


    const fechaActual =
        new Date();


    let años =
        fechaActual.getFullYear()
        - fechaInicio.getFullYear();


    let meses =
        fechaActual.getMonth()
        - fechaInicio.getMonth();


    if (
        fechaActual.getDate()
        <
        fechaInicio.getDate()
    ) {
        meses--;
    }


    if (meses < 0) {

        años--;

        meses += 12;

    }


    const fechaTemporal =
        new Date(fechaInicio);

    fechaTemporal.setFullYear(
        fechaTemporal.getFullYear() + años
    );

    fechaTemporal.setMonth(
        fechaTemporal.getMonth() + meses
    );


    const diasRestantes =
        Math.floor(
            (
                fechaActual - fechaTemporal
            ) /
            (1000 * 60 * 60 * 24)
        );


    document.getElementById("años")
        .textContent = años;


    document.getElementById("meses")
        .textContent = meses;


    document.getElementById("dias")
        .textContent = diasRestantes;


    document.getElementById("horas")
        .textContent = horas;


    document.getElementById("minutos")
        .textContent = minutos;


    document.getElementById("segundos")
        .textContent = segundos;

}


setInterval(
    actualizarContador,
    1000
);

actualizarContador();


/* =========================
   BOTÓN DESCUBRIR
========================= */

function mostrarHistoria() {

    document
        .getElementById("historia")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================
   ABRIR CARTA
========================= */

function abrirCarta() {

    const carta =
        document.getElementById(
            "mensajeCarta"
        );

    carta.classList.toggle("mostrar");

}

/* =========================
   100 RAZONES
========================= */

const razones = [

    "Porque haces mis días mucho más bonitos. ❤️",

    "Porque siempre consigues sacarme una sonrisa.",

    "Porque contigo puedo ser yo mismo.",

    "Porque cada momento contigo es especial.",

    "Porque me haces sentir querido.",

    "Porque tu sonrisa ilumina mis días.",

    "Porque siempre estás cuando te necesito.",

    "Porque me encanta compartir mi vida contigo.",

    "Porque contigo los momentos simples se vuelven especiales.",

    "Porque eres una persona increíble.",

    "Porque cada recuerdo contigo vale oro.",

    "Porque haces que quiera ser mejor cada día.",

    "Porque me encanta escuchar tu voz.",

    "Porque contigo puedo hablar de cualquier cosa.",

    "Porque eres parte de mis sueños.",

    "Porque me haces feliz.",

    "Porque cada abrazo tuyo se siente como hogar.",

    "Porque me encanta verte sonreír.",

    "Porque nuestra historia es única.",

    "Porque todavía tenemos muchísimos recuerdos por crear."

];

let indiceRazon = 0;


function siguienteRazon() {

    indiceRazon++;

    if (indiceRazon >= razones.length) {
        indiceRazon = 0;
    }

    document.getElementById("numeroRazon")
        .textContent =
        String(indiceRazon + 1)
        .padStart(2, "0");


    document.getElementById("textoRazon")
        .textContent =
        razones[indiceRazon];

}


/* =========================
   MÚSICA
========================= */

function reproducirMusica() {

    const cancion =
        document.getElementById("cancion");

    const disco =
        document.querySelector(".disco");


    if (cancion.paused) {

        cancion.play();

        disco.classList.add(
            "reproduciendo"
        );

    } else {

        cancion.pause();

        disco.classList.remove(
            "reproduciendo"
        );

    }

}