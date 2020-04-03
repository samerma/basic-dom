const container = document.getElementById("container")

const getRandomColor = function () {
    const niceColors = ["#8e44ad", "#3498db", "#c0392b",
        "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50",
        "#7f8c8d", "#8A2BE2", "#006400", "#FFD700", "#FF69B4",
        "#FFFFF0", "#808000", "#E0FFFF", "#FF7F50", "#FF8C00"]

    const randomPosition = Math.floor(Math.random() * niceColors.length);
    return niceColors[randomPosition];
}

for (let i = 0; i < 6; i++) {
    const box = document.createElement("div")

    box.style.backgroundColor = getRandomColor()
    box.setAttribute("class", "box")
    box.onmouseenter = function () {
        box.style.backgroundColor = getRandomColor()
    }
    container.appendChild(box)
}

