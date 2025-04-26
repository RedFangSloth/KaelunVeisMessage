// Save the dream to localStorage and display it on the page
function saveDream() {
    const dreamInput = document.getElementById('dreamEntry');
    const dreamText = dreamInput.value.trim();

    if (dreamText) {
        // Get saved dreams from localStorage
        let savedDreams = JSON.parse(localStorage.getItem('dreams')) || [];

        // Add new dream to the array
        savedDreams.push(dreamText);

        // Save the updated array back to localStorage
        localStorage.setItem('dreams', JSON.stringify(savedDreams));

        // Update the display
        displaySavedDreams(savedDreams);

        // Clear the text input after saving
        dreamInput.value = '';
    } else {
        alert('Please write something before saving!');
    }
}

// Display the saved dreams on the page
function displaySavedDreams(dreams) {
    const savedDreamsContainer = document.getElementById('savedDreams');

    // Clear the current list of saved dreams
    savedDreamsContainer.innerHTML = '';

    // If there are no dreams saved, show a message
    if (dreams.length === 0) {
        savedDreamsContainer.innerHTML = '<p>No dreams saved yet.</p>';
    } else {
        // Otherwise, display all saved dreams
        dreams.forEach(dream => {
            const dreamElement = document.createElement('p');
            dreamElement.textContent = dream;
            savedDreamsContainer.appendChild(dreamElement);
        });
    }
}

// Clear the saved dreams from both localStorage and the page
function clearSavedDreams() {
    // Clear saved dreams in localStorage
    localStorage.removeItem('dreams');

    // Clear the display on the page
    const savedDreamsContainer = document.getElementById('savedDreams');
    savedDreamsContainer.innerHTML = '<p>No dreams saved yet.</p>';

    // Optional: You can display a confirmation message or alert
    alert("Saved dreams cleared.");
}

// Load saved dreams from localStorage when the page loads
window.onload = function() {
    const savedDreams = JSON.parse(localStorage.getItem('dreams')) || [];
    displaySavedDreams(savedDreams);
};

// Add event listener to the clear button
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearSavedDreams);
