// ========================================
// CLIMA AGORA
// API: OPEN-METEO
// NÃO PRECISA DE API KEY
// ========================================


// ========================================
// ELEMENTOS DO HTML
// ========================================

const cidadeInput = document.getElementById("cidadeInput");
const btnBuscar = document.getElementById("buscar");

const cidade = document.getElementById("cidade");
const descricao = document.getElementById("descricao");
const temperatura = document.getElementById("temperatura");
const umidade = document.getElementById("umidade");
const vento = document.getElementById("vento");
const sensacao = document.getElementById("sensacao");
const icone = document.getElementById("icone");

const dias = document.getElementById("dias");
const mensagem = document.getElementById("mensagem");


// ========================================
// CÓDIGOS DO TEMPO
// OPEN-METEO
// ========================================

function interpretarClima(codigo) {

    if (codigo === 0) {
        return {
            icone: "☀️",
            descricao: "Céu limpo"
        };
    }

    if (codigo === 1) {
        return {
            icone: "🌤️",
            descricao: "Principalmente limpo"
        };
    }

    if (codigo === 2) {
        return {
            icone: "⛅",
            descricao: "Parcialmente nublado"
        };
    }

    if (codigo === 3) {
        return {
            icone: "☁️",
            descricao: "Nublado"
        };
    }

    if (codigo === 45 || codigo === 48) {
        return {
            icone: "🌫️",
            descricao: "Neblina"
        };
    }

    if (
        codigo === 51 ||
        codigo === 53 ||
        codigo === 55
    ) {
        return {
            icone: "🌦️",
            descricao: "Garoa"
        };
    }

    if (
        codigo === 56 ||
        codigo === 57
    ) {
        return {
            icone: "🌧️",
            descricao: "Garoa congelante"
        };
    }

    if (
        codigo === 61 ||
        codigo === 63 ||
        codigo === 65
    ) {
        return {
            icone: "🌧️",
            descricao: "Chuva"
        };
    }

    if (
        codigo === 66 ||
        codigo === 67
    ) {
        return {
            icone: "🌧️",
            descricao: "Chuva congelante"
        };
    }

    if (
        codigo === 71 ||
        codigo === 73 ||
        codigo === 75
    ) {
        return {
            icone: "❄️",
            descricao: "Neve"
        };
    }

    if (codigo === 77) {
        return {
            icone: "❄️",
            descricao: "Granizo de neve"
        };
    }

    if (
        codigo === 80 ||
        codigo === 81 ||
        codigo === 82
    ) {
        return {
            icone: "🌦️",
            descricao: "Pancadas de chuva"
        };
    }

    if (
        codigo === 85 ||
        codigo === 86
    ) {
        return {
            icone: "🌨️",
            descricao: "Pancadas de neve"
        };
    }

    if (
        codigo === 95 ||
        codigo === 96 ||
        codigo === 99
    ) {
        return {
            icone: "⛈️",
            descricao: "Trovoada"
        };
    }

    return {
        icone: "🌤️",
        descricao: "Clima desconhecido"
    };
}


// ========================================
// PEGAR NOME DO DIA
// ========================================

function nomeDia(data, indice) {

    if (indice === 0) {
        return "Hoje";
    }

    if (indice === 1) {
        return "Amanhã";
    }

    const dataObj = new Date(data + "T12:00:00");

    const nomesDias = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado"
    ];

    return nomesDias[dataObj.getDay()];
}


// ========================================
// MOSTRAR PREVISÃO
// ========================================

function mostrarPrevisao(dados) {

    dias.innerHTML = "";


    for (let i = 0; i < 5; i++) {

        const codigo =
            dados.daily.weather_code[i];

        const clima =
            interpretarClima(codigo);

        const maxima =
            Math.round(
                dados.daily.temperature_2m_max[i]
            );

        const minima =
            Math.round(
                dados.daily.temperature_2m_min[i]
            );


        const card = document.createElement("div");

        card.className = "dia";


        card.innerHTML = `
            <h3>${nomeDia(dados.daily.time[i], i)}</h3>

            <div class="icone-dia">
                ${clima.icone}
            </div>

            <div class="temperatura-dia">
                ${maxima}°C
            </div>

            <div class="minima">
                Mínima: ${minima}°C
            </div>

            <p>
                ${clima.descricao}
            </p>
        `;


        dias.appendChild(card);
    }
}


// ========================================
// BUSCAR CIDADE
// ========================================

async function buscarClima() {

    const nomeCidade =
        cidadeInput.value.trim();


    // Verifica campo vazio

    if (nomeCidade === "") {

        mostrarMensagem(
            "Digite o nome de uma cidade."
        );

        return;
    }


    try {

        btnBuscar.textContent = "Buscando...";
        btnBuscar.disabled = true;

        mensagem.style.display = "none";


        // ========================================
        // 1. BUSCAR COORDENADAS DA CIDADE
        // ========================================

        const urlGeocodificacao =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(nomeCidade)}&count=1&language=pt&format=json&countryCode=BR`;


        const respostaCidade =
            await fetch(urlGeocodificacao);


        if (!respostaCidade.ok) {

            throw new Error(
                "Erro ao pesquisar a cidade."
            );
        }


        const dadosCidade =
            await respostaCidade.json();


        if (
            !dadosCidade.results ||
            dadosCidade.results.length === 0
        ) {

            throw new Error(
                "Cidade não encontrada."
            );
        }


        const local =
            dadosCidade.results[0];


        const latitude =
            local.latitude;

        const longitude =
            local.longitude;


        // ========================================
        // 2. BUSCAR O CLIMA
        // ========================================

        const urlClima =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`;


        const respostaClima =
            await fetch(urlClima);


        if (!respostaClima.ok) {

            throw new Error(
                "Erro ao buscar os dados do clima."
            );
        }


        const dados =
            await respostaClima.json();


        console.log(dados);


        // ========================================
        // 3. ATUALIZAR CLIMA ATUAL
        // ========================================

        const climaAtual =
            interpretarClima(
                dados.current.weather_code
            );


        cidade.textContent =
            local.name;


        descricao.textContent =
            climaAtual.descricao;


        temperatura.textContent =
            `${Math.round(
                dados.current.temperature_2m
            )}°C`;


        umidade.textContent =
            `${Math.round(
                dados.current.relative_humidity_2m
            )}%`;


        vento.textContent =
            `${Math.round(
                dados.current.wind_speed_10m
            )} km/h`;


        sensacao.textContent =
            `${Math.round(
                dados.current.apparent_temperature
            )}°C`;


        icone.textContent =
            climaAtual.icone;


        // ========================================
        // 4. ATUALIZAR PREVISÃO DA SEMANA
        // ========================================

        mostrarPrevisao(dados);


    } catch (erro) {

        console.error(erro);

        mostrarMensagem(
            "Não foi possível encontrar essa cidade. Verifique o nome e tente novamente."
        );

    } finally {

        btnBuscar.textContent = "Buscar";

        btnBuscar.disabled = false;
    }
}


// ========================================
// MOSTRAR MENSAGEM DE ERRO
// ========================================

function mostrarMensagem(texto) {

    mensagem.textContent = texto;

    mensagem.style.display = "block";
}


// ========================================
// BOTÃO BUSCAR
// ========================================

btnBuscar.addEventListener(
    "click",
    buscarClima
);


// ========================================
// TECLA ENTER
// ========================================

cidadeInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            buscarClima();

        }

    }
);


// ========================================
// CARREGAR SUZANO AO ABRIR
// ========================================

window.addEventListener(
    "load",
    function () {

        buscarClima();

    }
);