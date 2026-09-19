// ========================================
// BETWEEN THE LINES
// MAIN JAVASCRIPT
// ========================================


// ========================================
// STARS
// ========================================

const starsContainer = document.querySelector(".stars");

if (starsContainer) {
    for (let i = 0; i < 300; i++) {
        const star = document.createElement("span");

        star.classList.add("star");

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 5 + "s";

        star.style.animationDuration =
            1.5 + Math.random() * 3 + "s";

        starsContainer.appendChild(star);
    }
}


// ========================================
// MILKY WAY DUST
// ========================================

const galaxyDust = document.querySelector(".galaxy-dust");

if (galaxyDust) {
    for (let i = 0; i < 800; i++) {
        const dust = document.createElement("span");

        dust.classList.add("dust-star");

        const x = Math.random() * 120 - 10;

        const centerY = 85 - (x * 0.65);

        const spread =
            (Math.random() - 0.5) * 32;

        const y = centerY + spread;

        dust.style.left = x + "%";
        dust.style.top = y + "%";

        const size =
            0.4 + Math.random() * 1.4;

        dust.style.width = size + "px";
        dust.style.height = size + "px";

        dust.style.opacity =
            0.15 + Math.random() * 0.65;

        dust.style.animationDelay =
            Math.random() * 5 + "s";

        dust.style.animationDuration =
            2 + Math.random() * 4 + "s";

        galaxyDust.appendChild(dust);
    }
}


// ========================================
// CINEMATIC GLINT STARS
// ========================================

const glintContainer =
    document.querySelector(".glint-stars");

if (glintContainer) {
    for (let i = 0; i < 30; i++) {
        const glint =
            document.createElement("span");

        glint.classList.add("glint");

        glint.style.left =
            Math.random() * 100 + "%";

        glint.style.top =
            Math.random() * 90 + 5 + "%";

        glint.style.animationDelay =
            Math.random() * 8 + "s";

        glint.style.animationDuration =
            3 + Math.random() * 4 + "s";

        glintContainer.appendChild(glint);
    }
}


// ========================================
// LETTER READER
// ========================================

function openLetter(id) {
    const letter = document.getElementById(id);

    if (!letter) return;

    letter.classList.add("open");
    document.body.style.overflow = "hidden";
    letter.scrollTop = 0;
}


function closeLetter(id) {
    const letter = document.getElementById(id);

    if (!letter) return;

    letter.classList.remove("open");
    document.body.style.overflow = "";
}


// ========================================
// THINGS I COULDN'T SAY
// ========================================

function uncoverThought(id) {
    const thought = document.getElementById(id);

    if (!thought) return;

    thought.classList.add("open");
    document.body.style.overflow = "hidden";
}

function coverThought(id) {
    const thought = document.getElementById(id);

    if (!thought) return;

    thought.classList.remove("open");
    document.body.style.overflow = "";
}

// ========================================
// HOW I SEE HER
// ========================================

function openHerPiece(id) {
    const piece = document.getElementById(id);

    if (!piece) return;

    piece.classList.add("open");
    piece.scrollTop = 0;
    document.body.style.overflow = "hidden";
}

function closeHerPiece(id) {
    const piece = document.getElementById(id);

    if (!piece) return;

    piece.classList.remove("open");
    document.body.style.overflow = "";
}

// ========================================
// READING MUSIC
// ========================================

function getReadingMusic() {
    return document.getElementById(
        "reading-music"
    );
}


function startReadingMusic() {

    const music = getReadingMusic();

    if (!music) return;

    music.volume = 0.18;

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log(
                "Music could not start:",
                error
            );
        });
    }
}


function stopReadingMusic() {

    const music = getReadingMusic();

    if (!music) return;

    music.pause();

    music.currentTime = 0;
}

const pageParams = new URLSearchParams(window.location.search);

if (pageParams.get("music") === "1") {
    const music = document.getElementById("reading-music");

    if (music) {
        music.volume = 0.18;

        music.play().catch(error => {
            console.log("Music autoplay blocked:", error);
        });
    }
}