const btn = document.getElementById("tema");
const lnk = document.querySelector("link[href='../style.css']");
const stlcss = new URL("../style.css", window.location)
const thema = document.querySelector('.js-sair')


console.log(thema)
Cookies.set("Nome", "Esdras")

thema.addEventListener("click", function () {
    if (btn.checked == true) {
        Cookies.set('dark', true)
        console.log("True")
    }
    else {
        Cookies.set('dark', false)
        console.log("True")
    }
})


//Vindo de outro parte do site
if (Cookies.get('dark')) {
    function ativarCheckbox(el) {
        el.checked = true;
    }
    ativarCheckbox(btn);
    lnk.href = "../ModoEscuro.css";
}



//Quando Clicar no Botão
btn.addEventListener("click", function () {
    if (lnk.href == stlcss.href) {
        lnk.href = "../ModoEscuro.css";
    } else {
        lnk.href = "../style.css";
    }
});
