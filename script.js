let box = document.getElementyById("box")

let posX = 0
let speedX = 2

function moveBox() {
    posX += speedX

    box.style.left = posX + "px"

    if (posX + 50 > window.innetWidth || posX < 0 ) {
        speedX = -speedX
    }
}