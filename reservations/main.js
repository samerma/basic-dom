const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const input = document.getElementById("input")
const answer = document.getElementById("para")

const checkReservation = function () {

    for (let name in reservations) {
        if (name === input.value) {
            if (reservations[name].claimed) {
                answer.innerText = "welcome"
            }
            else {
                answer.innerText = "go home"
            }
        }
        else {
            answer.innerText = "go home"
        }
    }

}