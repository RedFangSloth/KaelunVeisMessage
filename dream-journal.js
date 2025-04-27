document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.getElementById('saveButton');
    const clearButton = document.getElementById('clearButton');
    const savedDreamsContainer = document.getElementById('savedDreams');

    // Format the date to MM/DD/YYYY
    function formatDate(date) {
        const month = date.getMonth() + 1; // getMonth() returns 0-11
        const day = date.getDate();
        const year = date.getFullYear();
        return `${month}/${day}/${year}`;
    }

    // Check if there are saved dreams in localStorage
    function loadSavedDreams() {
        const savedDreams = JSON.parse(localStorage.getItem('dreams')) || [];
        
        // Clear current displayed dreams
        savedDreamsContainer.innerHTML = '';

        if (savedDreams.length === 0) {
            // Show "No dreams recorded yet" message if no dreams are saved
            const noDreamsMessage = document.createElement('p');
            noDreamsMessage.id = 'noDreamsMessage';
            noDreamsMessage.textContent = 'No dreams recorded yet';
            savedDreamsContainer.appendChild(noDreamsMessage);
        } else {
            // Otherwise, display the saved dreams with timestamps
            savedDreams.forEach(dream => {
                const dreamElement = document.createElement('div');
                const dreamContent = document.createElement('div');
                const timestampText = document.createElement('span');
                const dreamText = document.createElement('p');
                
                // Format the timestamp
                timestampText.textContent = formatDate(new Date(dream.timestamp));
                dreamText.textContent = dream.text;
                
                // Add timestamp and dream text to the container
                dreamContent.appendChild(timestampText);
                dreamContent.appendChild(dreamText);
                dreamElement.appendChild(dreamContent);

                savedDreamsContainer.appendChild(dreamElement);
            });
        }
    }

    // Save a new dream to localStorage
    function saveDream() {
        const dreamInput = document.getElementById('dreamInput').value;

        if (dreamInput.trim() === '') {
            alert('Please write a dream before saving!');
            return;
        }

        const savedDreams = JSON.parse(localStorage.getItem('dreams')) || [];
        const newDream = {
            text: dreamInput,
            timestamp: new Date().toISOString() // Capture the current date and time
        };
        savedDreams.push(newDream);
        localStorage.setItem('dreams', JSON.stringify(savedDreams));

        // Clear the input field after saving
        document.getElementById('dreamInput').value = '';

        // Reload the saved dreams
        loadSavedDreams();
    }

    // Clear all saved dreams
    function clearDreams() {
        localStorage.removeItem('dreams');
        loadSavedDreams();
    }

    // Event listeners for saving and clearing dreams
    saveButton.addEventListener('click', saveDream);
    clearButton.addEventListener('click', clearDreams);

    // Load saved dreams on page load
    loadSavedDreams();

    // In dream-journal.js or a separate JS file

let mediaRecorder;
let audioChunks = [];

// Get the start and stop buttons
const startRecordingButton = document.getElementById('startRecording');
const stopRecordingButton = document.getElementById('stopRecording');

// Event listener to start recording
startRecordingButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();

            // Disable the start button and enable the stop button
            startRecordingButton.disabled = true;
            stopRecordingButton.disabled = false;

            // Collect audio data as it's recorded
            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            // When recording stops, create a Blob from the audio data
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                
                // You can now save the audio URL in the saved dreams or upload it
                saveAudioRecording(audioUrl);
                
                // Reset the audioChunks array for the next recording
                audioChunks = [];
            };
        })
        .catch((err) => {
            console.log('Error accessing the microphone: ', err);
        });
});

// Event listener to stop recording
stopRecordingButton.addEventListener('click', () => {
    mediaRecorder.stop();

    // Disable the stop button and enable the start button
    startRecordingButton.disabled = false;
    stopRecordingButton.disabled = true;
});

// Function to save the audio recording (or display it as a link)
function saveAudioRecording(audioUrl) {
    // Create an audio element to preview the recording or save it as a link
    const audioElement = document.createElement('audio');
    audioElement.controls = true;
    audioElement.src = audioUrl;

    // Save the audio with the current timestamp or dream entry
    const savedDreamsContainer = document.getElementById('savedDreams');
    const audioEntry = document.createElement('div');
    const timestamp = new Date().toLocaleString();
    audioEntry.innerHTML = `<strong>Audio Dream - ${timestamp}</strong><br />`;
    audioEntry.appendChild(audioElement);
    savedDreamsContainer.appendChild(audioEntry);
}

});
