const sky = document.getElementById("sky");
const line = document.querySelector("line");
const button = document.getElementById("revealBtn");

let currentLine = 0;

// Create 50 random stars
for ( i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    sky.appendChild(star);
}

sky.appendChild(line);

//Star.addEventListener("click",revealLine);)

}
// Button also reveals lines for accessibility
button.addEventListener("click", revealLine);

function revealLine() {

    if (currentLine < lines.length) {

        lines[currentLine].classList.add("show");

        currentLine++;

    }else{
        button.textContent = "All Memories revealed ✨";
    }
}
