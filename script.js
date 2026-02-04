// State variables
let noCount = 0;
let yesPressed = false;

// Elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const questionScreen = document.getElementById('questionScreen');
const successScreen = document.getElementById('successScreen');

// No button text phrases
const phrases = [
    "No",
    "Are you sure?",
    "What if I asked really nicely?",
    "Pretty please",
    "With a chocolate rice cake on top",
    "What about a matcha frostie",
    "PLEASE POOKIE",
    "But :*(",
    "I am going to die",
    "Yep im dead",
    "ok ur talking to nathan's ghost",
    "please babe",
    ":((((",
    "PRETTY PLEASE",
    "Estoy muerto",
    "No :(",
];

// Get no button text based on count
function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
}

// Handle Yes button click
yesBtn.addEventListener('click', function() {
    yesPressed = true;
    questionScreen.style.display = 'none';
    successScreen.style.display = 'flex';
});

// Handle No button click
noBtn.addEventListener('click', function() {
    noCount++;
    
    // Update button text
    noBtn.textContent = getNoButtonText();
    
    // Increase Yes button size
    const newSize = noCount * 20 + 16;
    yesBtn.style.fontSize = newSize + 'px';
    yesBtn.style.padding = (newSize * 0.5) + 'px ' + (newSize * 1) + 'px';
});