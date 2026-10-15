const senha = document.getElementById("senha");
const tamanho = document.getElementById("tamanho");
const valorTamanho = document.getElementById("valorTamanho");
const gerar = document.getElementById("gerar");
const copiar = document.getElementById("copiar");
const mensagem = document.getElementById("mensagem");
const textoForca = document.getElementById("textoForca");
const barraForca = document.getElementById("barraForca");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

const grupos = [
    { campo: maiusculas, caracteres: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    { campo: minusculas, caracteres: "abcdefghijklmnopqrstuvwxyz" },
    { campo: numeros, caracteres: "0123456789" },
    { campo: simbolos, caracteres: "!@#$%&*+-_=?" }
];

tamanho.addEventListener("input", () => {
    valorTamanho.textContent = tamanho.value;
});

function numeroSeguro(maximo) {
    const limite = Math.floor(256 / maximo) * maximo;
    const numero = new Uint8Array(1);

    do {
        crypto.getRandomValues(numero);
    } while (numero[0] >= limite);

    return numero[0] % maximo;
}

function escolherCaracteres(texto) {
    return texto[numeroSeguro(texto.length)];
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = numeroSeguro(i + 1);
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }

    return lista;
}

function avaliarForca(valor, quantidadeTipos) {
    let pontos = 0;

    if (valor.length >= 8) pontos++;
    if (valor.length >= 12) pontos++;
    if (valor.length >= 16) pontos++;
    if (quantidadeTipos >= 3) pontos++;
    if (quantidadeTipos === 4) pontos++;

    let nivel;
    let porcentagem;
    let cor;

    if (pontos <= 1) {
        nivel = "Fraca";
        porcentagem = 25;
        cor = "#ff647c";
    } else if (pontos <= 2) {
        nivel = "Média";
        porcentagem = 50;
        cor = "#ffbd59";
    } else if (pontos <= 3) {
        nivel = "Boa";
        porcentagem = 75;
        cor = "#54d6a0";
    } else {
        nivel = "Forte";
        porcentagem = 100;
        cor = "#54d6a0";
    }

    textoForca.textContent = nivel;
    textoForca.style.color = cor;
    barraForca.style.width = porcentagem + "%";
    barraForca.style.background = cor;
}

function gerarSenha() {
    const selecionados = grupos.filter(grupo => grupo.campo.checked);

    if (selecionados.length === 0) {
        senha.value = "";
        textoForca.textContent = "Nenhuma";
        textoForca.style.color = "#a5afc8";
        barraForca.style.width = "0%";
        mensagem.textContent = "Selecione pelo menos um tipo de caractere.";
        return;
    }

    const comprimento = Number(tamanho.value);
    const caracteresDisponiveis = selecionados
        .map(grupo => grupo.caracteres)
        .join("");

    // Garante pelo menos um caractere de cada tipo selecionado.
    const resultado = selecionados.map(grupo =>
        escolherCaracteres(grupo.caracteres)
    );

    // Completa a senha até atingir o tamanho escolhido.
    while (resultado.length < comprimento) {
        resultado.push(escolherCaracteres(caracteresDisponiveis));
    }

    senha.value = embaralhar(resultado).join("");

    avaliarForca(senha.value, selecionados.length);
    mensagem.textContent = "Sua nova senha foi criada com sucesso!";
    copiar.textContent = "📋";
}

gerar.addEventListener("click", gerarSenha);

copiar.addEventListener("click", async () => {
    if (!senha.value) {
        mensagem.textContent = "Gere uma senha antes de copiar.";
        return;
    }

    try {
        await navigator.clipboard.writeText(senha.value);
        copiar.textContent = "✅";
        mensagem.textContent = "Senha copiada com sucesso!";
    } catch (erro) {
        senha.select();
        const copiou = document.execCommand("copy");

        if (copiou) {
            copiar.textContent = "✅";
            mensagem.textContent = "Senha copiada com sucesso!";
        } else {
            mensagem.textContent = "Selecione e copie a senha manualmente.";
        }
    }
});

// Atualiza a força quando as opções forem alteradas.
grupos.forEach(grupo => {
    grupo.campo.addEventListener("change", () => {
        if (senha.value) {
            gerarSenha();
        }
    });
});

// Já abre com uma senha gerada.
gerarSenha();