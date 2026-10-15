// ==========================================
// DATA DO DIA DOS PROFESSORES
// ==========================================

const dataFinal = new Date(
    2026,
    9,
    15,
    0,
    0,
    0
);


// ==========================================
// CONTADOR
// ==========================================

function atualizarContador() {

    const agora = new Date();

    const diferenca =
        dataFinal.getTime() - agora.getTime();


    // Se chegou o dia

    if (diferenca <= 0) {

        document.getElementById("dias").textContent = "00";

        document.getElementById("horas").textContent = "00";

        document.getElementById("minutos").textContent = "00";

        document.getElementById("segundos").textContent = "00";

        return;
    }


    // DIAS

    const dias = Math.floor(
        diferenca /
        (1000 * 60 * 60 * 24)
    );


    // HORAS

    const horas = Math.floor(
        (diferenca /
        (1000 * 60 * 60)) % 24
    );


    // MINUTOS

    const minutos = Math.floor(
        (diferenca /
        (1000 * 60)) % 60
    );


    // SEGUNDOS

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );


    // ======================================
    // MOSTRAR OS VALORES
    // ======================================

    document.getElementById("dias").textContent =
        String(dias).padStart(2, "0");


    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");


    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}


// ==========================================
// INICIAR
// ==========================================

atualizarContador();


// ==========================================
// ATUALIZAR A CADA 1 SEGUNDO
// ==========================================

setInterval(atualizarContador, 1000);


