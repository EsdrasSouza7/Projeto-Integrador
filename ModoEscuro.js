const btn = document.getElementById("tema");
const lnk = document.querySelector("link[href='../style.css']");
const stlcss = new URL("../style.css", window.location)

btn.addEventListener("click", function () {
    if (lnk.href == stlcss.href) {
        lnk.href = "../ModoEscuro.css";
    } else {
        lnk.href = "../style.css";
    }
});