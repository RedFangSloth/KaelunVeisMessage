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
});
