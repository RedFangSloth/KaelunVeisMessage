<link rel="stylesheet" href="Assets/style.css">
    
document.addEventListener('DOMContentLoaded', function() {
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
    "Trust your intuition. It is the voice of your soul.",
    "The answers you seek lie within. Still the mind and listen.",
    "Follow the quiet whispers of your heart; they will guide you true.",
    "Your inner compass always points you in the right direction, even when the path ahead is unclear.",
    "The soul knows the way, even when the mind is lost.",
    "Faith is not knowing what the future holds, but knowing who holds the future.",
    "Trust the process of life; everything unfolds in divine timing.",
    "When you surrender to the flow, guidance will naturally arise.",
    "Have faith in the journey, even when you cannot see the destination.",
    "The present moment is where your guidance resides. Be fully here.",
    "In the stillness, you will hear the gentle voice of guidance.",
    "Pay attention to the small moments; they often hold profound direction.",
    "When you are present, you are open to receive.",
    "Guidance often comes in the quiet moments, not the frantic ones.",
    "Every challenge is an opportunity for spiritual growth and deeper understanding.",
    "Embrace the lessons along the path; they are guiding you towards your higher self.",
    "Transformation often requires us to step outside our comfort zone, trusting that we will be guided.",
    "The journey inward is the journey towards true guidance.",
    "Allow youurself to be guided by love, not fear.",
    "We are all interconnected, and guidance can often come through others.",
    "Seek wisdom from those who walk with light and love.",
    "Remember that you are never truly alone; guidance is always available.",
    "The universe conspires to guide you when your heart is open.",
    "Through connection, we find clarity and shared wisdom.",
    "Ask, and it will be given to you; seek, and you will find; knock, and the door will be open to you.",
    "Be open to recieving guidance in unexpected forms.",
    "The more you seek, the clearer the path becomes.",
    "Be patient and trust that guidance will come when the time is right.",
    "Gratitude for guidance received opens the door for more.",
        // You can add more messages here!
    ];

    const messageDisplay = document.getElementById('messageDisplay');
    const messageButton = document.getElementById('messageButton');

    function refreshMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);

        // Fade out
        messageDisplay.style.opacity = 0;

        setTimeout(() => {
            // Update message
            messageDisplay.innerHTML = `<p>${messages[randomIndex]}</p>`;

            // Fade back in
            messageDisplay.style.opacity = 1;
        }, 500); // Wait half a second
    }

    // Attach the refresh to the button
    messageButton.addEventListener('click', refreshMessage);

    // Navigation to switch sections
    window.showSection = function(sectionId) {
        const sections = document.querySelectorAll('.page-section');
        sections.forEach(section => {
            section.style.display = (section.id === sectionId) ? 'block' : 'none';
        });
    };
});
