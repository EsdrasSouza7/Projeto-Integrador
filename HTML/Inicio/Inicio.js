const btnGrade = document.getElementById("grid");
const btnColuna = document.getElementById("coluna");
const Conteudo = document.getElementById("todoConteudo");

function Coluna() {
    if (Conteudo.classList.contains("grid")) {
        Conteudo.classList.remove("grid");
        Conteudo.classList.add("column");
    }
}

function Grade() {
    if (Conteudo.classList.contains("column")) {
        Conteudo.classList.remove("column");
        Conteudo.classList.add("grid");
    }
}

btnColuna.addEventListener("click", function () { Coluna() })
btnGrade.addEventListener("click", function () { Grade() })