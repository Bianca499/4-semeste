/* ==========================================
   LUGARES PARA CONHECER
   FUNCIONALIDADES
========================================== */


/* ==========================================
   ELEMENTOS DO HTML
========================================== */

const campoDestino =
    document.getElementById("campoDestino");

const btnAdicionar =
    document.getElementById("btnAdicionar");

const listaDestinos =
    document.getElementById("listaDestinos");

const contador =
    document.getElementById("contador");


/* ==========================================
   DESTINOS INICIAIS
========================================== */

let destinos = [

    {
        nome: "Rio de Janeiro",
        imagem:
            "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1000&q=90"
    },

    {
        nome: "Gramado",
        imagem:
            "https://images.unsplash.com/photo-1605537964076-3cb0ea2ff9e9?auto=format&fit=crop&w=1000&q=90"
    },

    {
        nome: "Fernando de Noronha",
        imagem:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=90"
    }

];


/* ==========================================
   MOSTRAR DESTINOS
========================================== */

function mostrarDestinos() {

    /* Limpa a lista */

    listaDestinos.innerHTML = "";


    /* Atualiza o contador */

    contador.textContent = destinos.length;


    /* ======================================
       SE NÃO EXISTIR DESTINO
    ====================================== */

    if (destinos.length === 0) {

        listaDestinos.innerHTML = `

            <div class="lista-vazia">

                <div class="simbolo">
                    ✦
                </div>

                <h3>
                    Nenhum destino cadastrado
                </h3>

                <p>
                    Informe um destino acima para adicioná-lo à sua lista.
                </p>

            </div>

        `;

        return;
    }


    /* ======================================
       CRIA OS CARDS
    ====================================== */

    destinos.forEach(function (destino, index) {

        const card =
            document.createElement("article");


        card.classList.add("card-destino");


        card.innerHTML = `

            <img
                class="card-imagem"
                src="${destino.imagem}"
                alt="Imagem de ${destino.nome}"
                onerror="
                    this.src =
                    'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=90'
                "
            >


            <div class="card-info">

                <small>
                    DESTINO
                </small>

                <h3>
                    ${destino.nome}
                </h3>

                <div class="card-local">
                    ⌖ Lugar para conhecer
                </div>


                <button
                    class="btn-apagar"
                    onclick="apagarDestino(${index})"
                >
                    🗑 APAGAR DESTINO
                </button>

            </div>

        `;


        listaDestinos.appendChild(card);

    });

}


/* ==========================================
   ADICIONAR DESTINO
========================================== */

function adicionarDestino() {

    const nome =
        campoDestino.value.trim();


    /* Verifica se está vazio */

    if (nome === "") {

        alert(
            "Por favor, informe um destino."
        );

        campoDestino.focus();

        return;
    }


    /* ======================================
       VERIFICA DESTINO REPETIDO
    ====================================== */

    const existe =
        destinos.some(function (destino) {

            return destino.nome.toLowerCase() ===
                nome.toLowerCase();

        });


    if (existe) {

        alert(
            "Esse destino já está cadastrado."
        );

        campoDestino.focus();

        return;
    }


    /* ======================================
       ADICIONA O DESTINO
    ====================================== */

    destinos.push({

        nome: nome,

        imagem:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=90"

    });


    /* Limpa o campo */

    campoDestino.value = "";


    /* Atualiza a tela */

    mostrarDestinos();


    /* Vai para a lista */

    document
        .getElementById("destinos")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ==========================================
   APAGAR DESTINO
========================================== */

function apagarDestino(index) {

    const destino =
        destinos[index];


    const confirmar =
        confirm(
            `Deseja realmente apagar "${destino.nome}"?`
        );


    if (confirmar) {

        destinos.splice(index, 1);

        mostrarDestinos();

    }

}


/* ==========================================
   BOTÃO ADICIONAR
========================================== */

btnAdicionar.addEventListener(
    "click",
    adicionarDestino
);


/* ==========================================
   ENTER NO CAMPO
========================================== */

campoDestino.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            adicionarDestino();

        }

    }
);


/* ==========================================
   INICIAR A APLICAÇÃO
========================================== */

mostrarDestinos();