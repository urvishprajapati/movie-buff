// Array of quotes
const quotes = [
    "May the Force be with you. - Star Wars",
    "Why so serious? - The Dark Knight",
    "I'll be back. - Terminator",
    // Add more quotes
];

// Display a random quote
function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-display").innerText = quotes[randomIndex];
}

// Call the function to display a quote on page load
window.onload = displayQuote;
// Correct answers mapping
const correctAnswers = {
    1: 'A',
    2: 'A',
    3: 'A',
    4: 'A',
    5: 'A',
    6: 'A',
    7: 'B',
    8: 'A'
};

// Function to check the selected answer
function checkAnswer(button, answer) {
    const questionNumber = button.parentElement.querySelector('h2').textContent.split('.')[0];
    
    if (correctAnswers[questionNumber] === answer) {
        button.style.backgroundColor = '#4CAF50'; // Green for correct
        button.innerHTML += ' ✔️';
    } else {
        button.style.backgroundColor = '#f44336'; // Red for wrong
        button.innerHTML += ' ❌';
    }

    // Disable all buttons for this question after selecting an answer
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
}