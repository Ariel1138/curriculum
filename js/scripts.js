var objetivoParrafo = document.getElementById("objetivos")
var iconolinkedin = document.getElementById("iconolinkedin")
var textolink = document.getElementById("link-linkedin")
var textolink2 = document.getElementById("link-instagram")



objetivoParrafo.addEventListener("mouseover", beautyObjectives)
objetivoParrafo.addEventListener("mouseleave", unbeautyObjectives)
objetivoParrafo.addEventListener("click", showMessage)
textolink.addEventListener("mouseleave", hidden)
textolink.addEventListener("mouseover",showicon)
textolink2.addEventListener("mouseleave", hidden)
textolink2.addEventListener("mouseover",showicon)




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

function showicon() {
    iconolinkedin.style.visibility = "visible"
}

function hidden() {
    iconolinkedin.style.visibility = "hidden"
}
function showicon() {
    iconoistagram.style.visibility = "visible"
}

function hidden() {
    iconoistagram.style.visibility = "hidden"
}