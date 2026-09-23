function showScreen(number) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById("screen" + number).classList.add("active");
}

function nextScreen(number) {
    showScreen(number);
}


// READY QUESTION
function readyYes() {
    document.getElementById("readyReaction").textContent =
        "Good. Mujhe pata tha aap sensible ho. 😂";

    setTimeout(() => {
        showScreen(3);
    }, 3000);
}

function readyNo() {
    document.getElementById("readyReaction").textContent =
        "Nice try... ye option sirf decoration ke liye tha. 😭";

    setTimeout(() => {
        document.getElementById("readyReaction").textContent =
            "Chaliye, dobara try kijiye. 👀";
    }, 3000);
}


// HEADPHONES QUESTION
function headphoneYes() {
    document.getElementById("headphoneReaction").textContent =
        "Perfect. Ab experience thoda aur better hoga. 🎧";

    setTimeout(() => {
        showScreen(4);
    }, 3000);
}

function headphoneNo() {
    document.getElementById("headphoneReaction").textContent =
        "Technically allowed hai... lekin music aur cinematic dialogues ka maza aadha reh jayega. 😭";

    setTimeout(() => {
        document.getElementById("headphoneReaction").textContent =
            "Ek baar headphones ka soch lijiye... 😌";
    }, 3000);
}


// START JOURNEY
function startJourney() {

    showScreen(5);

    const videoFrame = document.getElementById("birthdayVideo");

    videoFrame.src =
        "https://drive.google.com/file/d/1tGzmhKDt3WGydPV_bE5XymIn23qd1MMu/preview";
}


// FINAL MESSAGE
function showFinalMessage() {
    document.getElementById("finalReaction").textContent =
        "I hope you enjoyed this little journey. ❤️";
}