var objetivoParrafo = document.getElementById("objetivos")
var iconolinkedin = document.getElementById("iconolinkedin")
var iconoistagram = document.getElementById("iconoinstagram")
var textolink = document.getElementById("link-linkedin")
var textolink2 = document.getElementById("link-instagram")




objetivoParrafo.addEventListener("mouseover", beautyObjectives)
objetivoParrafo.addEventListener("mouseleave", unbeautyObjectives)
objetivoParrafo.addEventListener("click", showMessage)
textolink.addEventListener("mouseleave", hiddenIconLinkedin)
textolink.addEventListener("mouseover",showiconLinkedin)
textolink2.addEventListener("mouseleave", hiddenIconInstagram)
textolink2.addEventListener("mouseover",showiconInstagram)




function beautyObjectives() {
    objetivoParrafo.style.color = "rgb(147,130,126)"
    objetivoParrafo.style.borderStyle = "dashed"
    objetivoParrafo.style.textAlign = "center"
    objetivoParrafo.style.padding = "15px"

}

function unbeautyObjectives() {
    objetivoParrafo.style.color = "black"
    objetivoParrafo.style.borderStyle = "none"
    objetivoParrafo.style.textAlign = "left"
    objetivoParrafo.style.padding = "0px"

}

function showMessage() {
    alert("Vea más en mi perfil de linkedin")

}

function showiconLinkedin() {
    iconolinkedin.style.visibility = "visible"
}

function hiddenIconLinkedin() {
    iconolinkedin.style.visibility = "hidden"
}
function showiconInstagram() {
    iconoinstagram.style.visibility = "visible"
}

function hiddenIconInstagram() {
    iconoinstagram.style.visibility = "hidden"
}