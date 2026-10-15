/* 1 - DIGITAÇÃO */
 const campoTexto = document.getElementById("campoTexto");
const textoDigitado = document.getElementById("textoDigitado");

campoTexto.addEventListener("input", function () {
    textoDigitado.textContent = campoTexto.value;
});

/* 2 - TROCA DE TEXTO */
const botaoMouse = document.getElementById("botaoMouse");

botaoMouse.addEventListener("mouseover", function () {
    botaoMouse.textContent = "Você passou o mouse!";
});

/* 3 - ESCONDENDO ELEMENTOS */
const botaoEsconder = document.getElementById("botaoEsconder");
const elementoEsconder = document.getElementById("elementoEsconder");

botaoEsconder.addEventListener("dblclick", function () {
    elementoEsconder.style.display = "none";
});

/* 4 - ALTERANDO A FONTE */
const botaoFonte = document.getElementById("botaoFonte");
const textoFonte = document.getElementById("textoFonte");

botaoFonte.addEventListener("click", function () {

    const tamanhoAleatorio =
        Math.floor(Math.random() * 31) + 10;

    textoFonte.style.fontSize = tamanhoAleatorio + "px";
});

// 5 - MOSTRAR E ESCONDER
// ==========================================

const mostrar = document.getElementById("mostrar");
const esconder = document.getElementById("esconder");
const paragrafoMostrar = document.getElementById("paragrafoMostrar");

mostrar.addEventListener("click", function () {
    paragrafoMostrar.style.display = "block";
});

esconder.addEventListener("click", function () {
    paragrafoMostrar.style.display = "none";
});


// ==========================================
// 6 - TROCA DE COR
// ==========================================

const botaoCor = document.getElementById("botaoCor");
const caixaCor = document.getElementById("caixaCor");

function gerarCorAleatoria() {

    const letras = "0123456789ABCDEF";
    let cor = "#";

    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }

    return cor;
}

botaoCor.addEventListener("click", function () {

    const novaCor = gerarCorAleatoria();

    caixaCor.style.backgroundColor = novaCor;
});


// ==========================================
// 7 - ALTERNANDO DESTAQUE
// ==========================================

const botaoDestaque = document.getElementById("botaoDestaque");
const textoDestaque = document.getElementById("textoDestaque");

botaoDestaque.addEventListener("click", function () {

    textoDestaque.classList.toggle("destaque");

});


// ==========================================
// 8 - TROCA DE IMAGEM
// ==========================================

const imagem = document.getElementById("imagem");
const imagem1 = document.getElementById("imagem1");
const imagem2 = document.getElementById("imagem2");

imagem1.addEventListener("click", function () {

    imagem.src = "https://picsum.photos/id/10/250/150";

});

imagem2.addEventListener("click", function () {

    imagem.src = "https://picsum.photos/id/20/250/150";

});


// ==========================================
// 9 - CONTADOR DE CARACTERES
// ==========================================

const campoCaracteres = document.getElementById("campoCaracteres");
const contador = document.getElementById("contador");

campoCaracteres.addEventListener("input", function () {

    const quantidade = campoCaracteres.value.length;

    contador.textContent =
        "Quantidade de caracteres: " + quantidade;

});


// ==========================================
// 10 - VERIFICAÇÃO DE IDADE
// ==========================================

const idade = document.getElementById("idade");
const verificarIdade = document.getElementById("verificarIdade");
const resultadoIdade = document.getElementById("resultadoIdade");

verificarIdade.addEventListener("click", function () {

    const valorIdade = Number(idade.value);

    if (valorIdade >= 18) {

        resultadoIdade.textContent =
            "Você é maior de idade.";

    } else {

        resultadoIdade.textContent =
            "Você é menor de idade.";

    }

});


// ==========================================
// 11 - PAR OU ÍMPAR
// ==========================================

const numero = document.getElementById("numero");
const verificarNumero = document.getElementById("verificarNumero");
const resultadoNumero = document.getElementById("resultadoNumero");

verificarNumero.addEventListener("click", function () {

    const valorNumero = Number(numero.value);

    if (valorNumero % 2 === 0) {

        resultadoNumero.textContent =
            "O número é PAR.";

    } else {

        resultadoNumero.textContent =
            "O número é ÍMPAR.";

    }

});


// ==========================================
// 12 - MÉDIA DO ALUNO
// ==========================================

const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");

const calcularMedia = document.getElementById("calcularMedia");
const resultadoMedia = document.getElementById("resultadoMedia");

calcularMedia.addEventListener("click", function () {

    const n1 = Number(nota1.value);
    const n2 = Number(nota2.value);
    const n3 = Number(nota3.value);

    const media = (n1 + n2 + n3) / 3;

    if (media >= 7) {

        resultadoMedia.textContent =
            "Média: " + media.toFixed(2) +
            " - Aprovado!";

    } else if (media >= 5) {

        resultadoMedia.textContent =
            "Média: " + media.toFixed(2) +
            " - Recuperação!";

    } else {

        resultadoMedia.textContent =
            "Média: " + media.toFixed(2) +
            " - Reprovado!";

    }

});
