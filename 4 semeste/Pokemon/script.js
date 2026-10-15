const input = document.getElementById("pokemonInput");
const botao = document.getElementById("buscar");

const imagem = document.getElementById("pokemonImagem");
const nome = document.getElementById("nome");
const numero = document.getElementById("numero");

const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const experiencia = document.getElementById("experiencia");

const tipos = document.getElementById("tipos");
const habilidades = document.getElementById("habilidades");

const mensagem = document.getElementById("mensagem");


async function buscarPokemon(pokemon) {

    if (pokemon === "") {
        mensagem.textContent = "Digite o nome ou número de um Pokémon.";
        return;
    }

    mensagem.textContent = "🔎 Procurando Pokémon...";

    try {

        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
        );

        if (!resposta.ok) {
            throw new Error("Pokémon não encontrado");
        }

        const dados = await resposta.json();

        imagem.src =
            dados.sprites.other["official-artwork"].front_default;

        imagem.alt = dados.name;

        nome.textContent = dados.name;

        numero.textContent =
            `#${String(dados.id).padStart(3, "0")}`;

        peso.textContent =
            `${(dados.weight / 10).toFixed(1)} kg`;

        altura.textContent =
            `${(dados.height / 10).toFixed(1)} m`;

        experiencia.textContent =
            dados.base_experience;


        tipos.innerHTML = "";

        dados.types.forEach(function(item) {

            const span = document.createElement("span");

            span.classList.add("tipo");

            span.textContent = item.type.name;

            tipos.appendChild(span);

        });


        habilidades.innerHTML = "";

        dados.abilities.forEach(function(item) {

            const span = document.createElement("span");

            span.classList.add("habilidade");

            span.textContent = item.ability.name;

            habilidades.appendChild(span);

        });


        mensagem.textContent = "";

    } catch (erro) {

        nome.textContent = "Pokémon não encontrado";

        imagem.src = "";

        numero.textContent = "#000";

        peso.textContent = "--";
        altura.textContent = "--";
        experiencia.textContent = "--";

        tipos.innerHTML = "";
        habilidades.innerHTML = "";

        mensagem.textContent =
            "❌ Pokémon não encontrado. Tente novamente.";

    }
}


botao.addEventListener("click", function() {

    const pokemon = input.value.trim();

    buscarPokemon(pokemon);

});


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const pokemon = input.value.trim();

        buscarPokemon(pokemon);

    }

});


buscarPokemon("pikachu");