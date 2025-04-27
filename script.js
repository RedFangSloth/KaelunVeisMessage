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

// Get the elements
const messageButton = document.getElementById("messageButton");
const messageDisplay = document.getElementById("messageDisplay");
const chime = new Audio("Assets/Sounds/chime.wav");
const ambient = new Audio("Assets/Sounds/mysticForest.mp3");
const sigil = document.querySelector('.sigil');
const sigilSound = document.getElementById('sigilSound');

// Play ambient sound once user interacts (due to autoplay policy)
let ambientPlayed = false;

messageButton.addEventListener("click", () => {
    // When the button is clicked, display the message box
    messageDisplay.style.display = "inline-block";  // or "block" depending on your preference

    // Play the ambient sound only once
    if (!ambientPlayed) {
        ambient.play().catch(e => console.log('Ambient play blocked:', e));
        ambientPlayed = true;
    }

    // Play the sigil sound immediately
    sigilSound.play().catch(e => console.log('Sigil sound play blocked:', e));

    const randomIndex = Math.floor(Math.random() * messages.length);

    // Fade out the current message
    messageDisplay.style.animation = "fadeOut 1.5s ease";
    messageDisplay.style.opacity = 0;

    setTimeout(() => {
        // Change the message
        messageDisplay.textContent = messages[randomIndex];

        // Play the chime sound
        chime.currentTime = 0;
        chime.play().catch(e => console.log('Chime play blocked:', e));

        // Fade in the new message + restore pulse glow
        messageDisplay.style.animation = "floatFade 1.5s ease, pulseGlow 4s ease-in-out infinite";
        messageDisplay.style.opacity = 1;

        // Sigil animation for glow and pulse
        sigil.style.animation = "pulseGlow 2s ease-in-out infinite";

    }, 1500); // matches fadeOut duration
});
