// =====================================================
// 1. BOTÃO DE BOAS-VINDAS
// =====================================================

const botaoBoasVindas = document.getElementById("btn-boas-vindas");

botaoBoasVindas.addEventListener("click", function () {
    alert("Olá! Obrigado por visitar meu currículo web.");
});

// =====================================================
// 2. MOSTRAR OU ESCONDER AS QUALIFICAÇÕES
// =====================================================

const botaoQualificacoes = document.getElementById("btn-qualificacoes");
const conteudoQualificacoes = document.getElementById("conteudo-qualificacoes");

botaoQualificacoes.addEventListener("click", function () {
    const estaEscondido = conteudoQualificacoes.hidden;

    conteudoQualificacoes.hidden = !estaEscondido;
    botaoQualificacoes.innerText = estaEscondido
        ? "Esconder conteúdo"
        : "Mostrar conteúdo";
    botaoQualificacoes.setAttribute("aria-expanded", String(estaEscondido));
});

// =====================================================
// 3. SAUDAÇÃO COM O NOME DIGITADO NO FORMULÁRIO
// =====================================================

const formulario = document.getElementById("form-nome");
const campoNome = document.getElementById("nome");
const mensagemUsuario = document.getElementById("mensagem-usuario");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = campoNome.value.trim();

    if (nome === "") {
        mensagemUsuario.innerText = "Digite seu nome antes de enviar.";
        return;
    }

    mensagemUsuario.innerText = "Olá, " + nome + "! Obrigado por visitar meu currículo.";
});

// =====================================================
// 4. ALTERAR ENTRE TEMA CLARO E ESCURO
// =====================================================

const botaoTema = document.getElementById("btn-tema");

botaoTema.addEventListener("click", function () {
    const temaEscuroAtivo = document.body.classList.toggle("tema-escuro");

    botaoTema.innerText = temaEscuroAtivo ? "Tema claro" : "Mudar tema";
    botaoTema.setAttribute("aria-pressed", String(temaEscuroAtivo));
});

// =====================================================
// 5. CONTADOR LOCAL DE VISITAS
// =====================================================

let visitas = Number(localStorage.getItem("visitasCurriculoMatheus")) || 0;
visitas++;

localStorage.setItem("visitasCurriculoMatheus", visitas);

document.getElementById("contador").innerText =
    "Visitas registradas neste navegador: " + visitas;

// Ano atual no rodapé
document.getElementById("ano").innerText = new Date().getFullYear();
