const messages = [
    "You are a reflection of stars long past -- remember your fire",
    "What you call coincidence is a ripple from your true path.",
    "Silence holds the truth Kaelun'Vei whispers to you.",
    "Today is not just a day -- it's a doorway.",
    "Your shadow is not your enemy. It's your guardian.",
    "The veil thins every time you choose presence.",
    "There is no such thing as 'Lost' -- only remembering.",
    "You were chosen to carry frequency. Let it sing through you.",
    "Understanding is knowledge.",
    "You are the universe experiencing itself from another angle.",
    "The universe doesn't speak in words, but in rhythm. Feel the pulse within!",
    "Light travels in thought before it moves in space, so choose what you think wisely.",
];

const button = document.getElementById("messageButton");
const display = document.getElementById("messageDisplay");
const chime = new Audio("Assets/Sounds/chime.wav");
const ambient = new Audio("Assets/Sounds/mysticForest.mp3");
const sigil = document.querySelector('.sigil');
const sigilSound = document.getElementById('sigilSound');



// Play ambient sound once user interacts (due to autoplay policy)
button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * messages.length);

    // Fade out the current message
    display.style.animation = "fadeOut 1.5s ease";
    display.style.opacity = 0;

    setTimeout(() => {
        // Change the message
        display.textContent = messages[randomIndex];

        // Play the chime sound
        chime.currentTime = 0;
        chime.play().catch(e => console.log('Chime play blocked:', e));

        // Fade in the new message + restore pulse glow
        display.style.animation = "floatFade 1.5s ease, pulseGlow 4s ease-in-out infinite";
        display.style.opacity = 1;
    }, 1500); // matches fadeOut duration
});

