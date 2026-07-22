// ===============================
// Happy Birthday My Princess ❤️
// Premium Birthday Website Script
// ===============================

// Loading Animation
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Surprise Button
const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {

        alert("🎉 Happy Birthday My Princess Charishma ❤️\n\nMay your smile always shine brighter than the stars. I wish you endless happiness, love, success and beautiful memories. 💖");

        createHearts();
        createBalloons();
        launchFireworks();
    });
}

// Floating Hearts
function createHearts() {

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.zIndex = "9999";
        heart.style.pointerEvents = "none";
        heart.style.transition = "all 6s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform =
                `translateY(-120vh) rotate(${Math.random()*720}deg)`;
            heart.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}

// Floating Balloons
function createBalloons() {

    const colors = [
        "#ff4d6d",
        "#ff99cc",
        "#ff66b2",
        "#ffccff",
        "#ff3366"
    ];

    for (let i = 0; i < 20; i++) {

        const balloon = document.createElement("div");

        balloon.innerHTML = "🎈";

        balloon.style.position = "fixed";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.top = "100vh";
        balloon.style.fontSize = "40px";
        balloon.style.pointerEvents = "none";
        balloon.style.transition = "transform 8s linear";

        document.body.appendChild
