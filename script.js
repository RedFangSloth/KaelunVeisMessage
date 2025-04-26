const messages = [
    "You are a reflection of stars long past -- remember your fire",
    "What you call coincidence is a ripple from your true path.",
    "Silence holds the truth Kaelun'Vei whispers to you.",
    "Today is not just a day -- its a doorway.",
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

sigil.addEventListener('mouseenter', () => {
    sigilSound.volume = 0.3; // Set a soft volume
    sigilSound.play().catch(e => console.log('Sound play blocked:', e)); // Handle autoplay issues
});

sigil.addEventListener('mouseleave', () => {
    sigilSound.pause();
    sigilSound.currentTime = 0; // Reset sound position to start fresh
});

button.addEventListener("click", () => {
    ambient.pause();
    ambient.currentTime = 0;
    ambient.play();

    const randomIndex = Math.floor(Math.random() * messages.length);

    display.style.opacity = 0; // Prepare for fade-out effect
    display.style.animation = "fadeOut 1.5s ease";

    setTimeout(() => {
        display.textContent = messages[randomIndex];
        display.style.opacity = 1; // Trigger fade-in
        display.style.animation = "fadeIn 1.5s ease"; // Apply fade-in animation

        chime.currentTime = 0; // Rewind the chime sound
        chime.play();  // Play the chime sound
    }, 1500); // Delay to match fade-out duration
});
