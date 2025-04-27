// horoscope.js

const horoscopes = {
    aries: "Today, Aries, your energy is unstoppable. Embrace new challenges.",
    taurus: "Taurus, patience will bring you the reward you seek today.",
    gemini: "Gemini, your wit and charm will open unexpected doors.",
    cancer: "Cancer, trust your intuition when making important decisions.",
    leo: "Leo, shine bright but don't overpower those around you.",
    virgo: "Virgo, attention to detail will pay off more than you expect.",
    libra: "Libra, balance your heart and mind for the best outcomes today.",
    scorpio: "Scorpio, hidden truths will surface—be ready to act wisely.",
    sagittarius: "Sagittarius, an adventure is closer than you realize.",
    capricorn: "Capricorn, your hard work is about to be recognized.",
    aquarius: "Aquarius, innovation will be your greatest strength today.",
    pisces: "Pisces, creativity and dreams are your superpowers right now."
};

document.getElementById('getHoroscope').addEventListener('click', function() {
    const sign = document.getElementById('zodiacSign').value.toLowerCase();
    const display = document.getElementById('horoscopeDisplay');

    if (sign && horoscopes[sign]) {
        display.innerText = horoscopes[sign];
        display.style.display = 'block'; // make sure it's visible
        display.style.opacity = 1;       // animate if you want later
    } else {
        display.innerText = "Please select a valid zodiac sign!";
        display.style.display = 'block';
        display.style.opacity = 1;
    }
});
