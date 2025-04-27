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
    "We are not human beings having a spiritual experience. We are spiritual beings, having a human experience. --Pierre Teilhard de Chardin.",
    "You do not need to work to become spiritual. You are spiritual; you need to remember that fact. --Gary Zukav",
    "The soul always knows what to do to heal itself. The challenge is to silence the mind. --Caroline Nyss",
    "The best and most beautiful things in the world cannot be seen or even touched- they must be felt with the heart. --Helen Keller",
    "When you realize nothing is lacking, the whole world belongs to you. --LAO TZU",
    "Have faith that things will work out. Maybe not how you planned, but how they were meant to be.",
    "The ego gets what it wants with words. The soul finds what it needs in silence.",
    "You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level. --Eckhart Tolle ",
    "The spiritual journey is not about becoming someone else. It is about becoming more of who you are.",
    "Every moment is a fresh beginning. --T.S. Eliot",
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
