// Function to fetch a new random dog image from the API
function fetchRandomDog() {
    fetch('https://random.dog/woof.json')
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            const dogImageElement = document.getElementById('dog-image');
            dogImageElement.src = data.url;  // Set the image URL
        })
        .catch(error => {
            console.error('Error fetching dog image:', error);
        });
}

// Initial fetch to load the first dog image when the page is loaded
window.onload = fetchRandomDog;

// Event listener to fetch a new dog image when the "Get New Dog" button is clicked
document.getElementById('get-new-dog').addEventListener('click', fetchRandomDog);
