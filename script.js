
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

    ];
    const button=
    document.getElementById("messageButton");
    const display=
    document.getElementById("messageDisplay");
    const chime= new Audio("Assets/Sounds/chime.wav");
    const ambient= new Audio("Assets/Sounds/mysticForest.mp3");


    button.addEventListener("click",() => {
        ambient.play();
        const randomIndex=Math.floor(Math.random()*messages.length);

        display.style.opacity=0;//Reset Opacity
        display.style.animation="none";

        setTimeout(()=>{
            display.textContent=messages[randomIndex];
            display.style.opacity=1;//Trigger Fade-in
            display.style.animation="glow 1.5s ease";
            chime.currentTime=0;//Rewind to start
            chime.play();
        
        },200);
        
    });