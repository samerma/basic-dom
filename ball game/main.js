const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
const ball = document.getElementById("block")
ball.style.backgroundColor = "yellow"

const moveRight = function () {
    let lastPosition = (parseInt(ball.style.left) || 0)
    if (lastPosition + 15 <= 390) {
        ball.style.left = lastPosition + 15 + "px"
    }
}
const moveLeft = function () {
    let lastPosition = (parseInt(ball.style.left) || 0)
    if (lastPosition - 15 >= 0) {
        ball.style.left = (lastPosition - 15) + "px"
    }
}
const moveDown = function () {
    let lastPosition = (parseInt(ball.style.bottom) || 0)
    if (lastPosition > -300) {
        ball.style.bottom = (lastPosition - 15) + "px"
    }
}
const moveUp = function () {
    let lastPosition = (parseInt(ball.style.bottom) || 0)
    if (lastPosition < 0) {
        ball.style.bottom = lastPosition + 15 + "px"
    }
}

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by : Samer"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)