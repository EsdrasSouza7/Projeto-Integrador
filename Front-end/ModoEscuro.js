const btn = document.getElementById("tema");
const lnk = document.querySelector("link[href='../style.css']");
const stlcss = new URL("../style.css", window.location)

//Quando Clicar no Botão
btn.addEventListener("click", function () {
    if (lnk.href == stlcss.href) {
        lnk.href = "../ModoEscuro.css";
    } else {
        lnk.href = "../style.css";
    }
});

const B3 = document.getElementById("barras3")
const Barra = document.getElementById("offcanvasScrolling")
const conteudo = document.getElementById("Conteudo")
const B3F = document.getElementById("barras3F")

B3.addEventListener("click", function () {
    conteudo.style.left = "224px";
    conteudo.style.width = "74%";
})
B3F.addEventListener("click", function () {
    conteudo.style.left = "2%";
    conteudo.style.width = "95%";
})

console.log(window.screen.width)
if (window.screen.width < 500) {
    Barra.classList.remove("show")
    conteudo.style.left = "2%";
    conteudo.style.width = "95%";
}



// const thema = document.querySelector('.js-sair')

// console.log(thema)
// Cookies.set("Nome", "Esdras")

// thema.addEventListener("click", function () {
//     if (btn.checked == true) {
//         Cookies.set('dark', true)
//         console.log("True")
//     }
//     else {
//         Cookies.set('dark', false)
//         console.log("True")
//     }
// })


// //Vindo de outro parte do site
// if (Cookies.get('dark')) {
//     function ativarCheckbox(el) {
//         el.checked = true;
//     }
//     ativarCheckbox(btn);
//     lnk.href = "../ModoEscuro.css";
// }




