// Define an array with the filenames of the ASCII art files
const asciiFiles = ['ascii1.txt', 'ascii2.txt', 'ascii3.txt'];

// Function to fetch and display a random ASCII art file
function displayRandomAsciiArt() {
    // Select a random file from the list
    const randomIndex = Math.floor(Math.random() * asciiFiles.length);
    const randomFile = asciiFiles[randomIndex];

    // Fetch the content of the selected ASCII art file
    fetch(randomFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Return the content as text
        })
        .then(asciiArt => {
            // Display the fetched ASCII art in the HTML element
            document.getElementById('ascii-container').textContent = asciiArt;
        })
        .catch(error => {
            console.error('Error fetching ASCII art:', error);
            document.getElementById('ascii-art').textContent = 'Error loading ASCII art.';
        });
}

// Call the function to display random ASCII art when the page loads
document.addEventListener('DOMContentLoaded', displayRandomAsciiArt);
