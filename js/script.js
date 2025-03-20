// Data for characters
const consonants = [
    { char: 'ੳ', romanized: 'ura' },
    { char: 'ਅ', romanized: 'aira' },
    // TODO Add all consonants...
];

const vowels = [
    { char: 'ਾ', romanized: 'kanna (ā)' },
    { char: 'ਿ', romanized: 'sihari (i)' },
    // TODO Add all vowels...
];

// Selected characters for quiz
let selectedCharacters = [];

// Stats
let correctCount = 0;
let incorrectCount = 0;

// Current quiz state
let currentCharacter;
let correctAnswer;
let usedCharacters = [];


// Initialize page
function initPage() {
    // Populate selector grids
    populateSelectorGrid('consonant-selector', consonants);
    populateSelectorGrid('vowel-selector', vowels);
    
    // Select some default characters for the quiz
    selectBasicConsonants();
    updateQuizWithSelected();
}

function populateSelectorGrid(gridId, characters) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    
    characters.forEach(char => {
        const item = document.createElement('div');
        item.className = 'selector-item';
        item.dataset.char = char.char;
        item.dataset.romanized = char.romanized;
        
        item.innerHTML = `
            <div class="punjabi">${char.char}</div>
            <div class="romanized">${char.romanized.split(' ')[0]}</div>
        `;
        
        item.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
        
        grid.appendChild(item);
    });
}
function selectAllConsonants() {
    const items = document.querySelectorAll('#consonant-selector .selector-item');
    items.forEach(item => item.classList.add('selected'));
}

function selectAllVowels() {
    const items = document.querySelectorAll('#vowel-selector .selector-item');
    items.forEach(item => item.classList.add('selected'));
}

function deselectAll() {
    const items = document.querySelectorAll('.selector-item');
    items.forEach(item => item.classList.remove('selected'));
}

function selectBasicConsonants() {
    deselectAll();
    const basicConsonants = ['ਕ', 'ਖ', 'ਗ', 'ਘ', 'ਚ'];
    
    const items = document.querySelectorAll('#consonant-selector .selector-item');
    items.forEach(item => {
        if (basicConsonants.includes(item.dataset.char)) {
            item.classList.add('selected');
        }
    });
}

function updateQuizWithSelected() {
    selectedCharacters = [];
    
    const selectedItems = document.querySelectorAll('.selector-item.selected');
    selectedItems.forEach(item => {
        selectedCharacters.push({
            char: item.dataset.char,
            romanized: item.dataset.romanized
        });
    });
    
    // Reset stats
    correctCount = 0;
    incorrectCount = 0;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    
    // If no characters selected, select some defaults
    if (selectedCharacters.length === 0) {
        alert('Please select at least one character to practice.');
        selectBasicConsonants();
        updateQuizWithSelected();
        return;
    }
    
    // Reset used characters and start new quiz
    usedCharacters = [];
    nextQuestion();
}

function nextQuestion() {
    document.getElementById('result').textContent = '';
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Get a random character
    const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    currentCharacter = selectedCharacters[randomIndex];
    
    document.getElementById('current-character').textContent = currentCharacter.char;
    correctAnswer = currentCharacter.romanized;
    
    // Create answer options
    const correctOptionIndex = Math.floor(Math.random() * 4);
    const usedOptions = [correctAnswer];
    
    for (let i = 0; i < 4; i++) {
        const option = document.createElement('button');
        option.className = 'option';
        
        if (i === correctOptionIndex) {
            option.textContent = correctAnswer;
            option.onclick = function() { checkAnswer(correctAnswer); };
        } else {
            // Get a random wrong answer
            let wrongAnswer;
            do {
                const randomWrongIndex = Math.floor(Math.random() * selectedCharacters.length);
                wrongAnswer = selectedCharacters[randomWrongIndex].romanized;
            } while (usedOptions.includes(wrongAnswer) || wrongAnswer === correctAnswer);
            
            usedOptions.push(wrongAnswer);
            option.textContent = wrongAnswer;
            option.onclick = function() { checkAnswer(wrongAnswer); };
        }
        
        optionsContainer.appendChild(option);
    }
}

function checkAnswer(selectedAnswer) {
    const options = document.querySelectorAll('.option');
    const resultElement = document.getElementById('result');
    
    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else if (option.textContent === selectedAnswer && selectedAnswer !== correctAnswer) {
            option.classList.add('incorrect');
        }
        
        option.disabled = true;
    });
    
    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
        correctCount++;
        document.getElementById('correct-count').textContent = correctCount;
    } else {
        resultElement.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
        resultElement.style.color = 'red';
        incorrectCount++;
        document.getElementById('incorrect-count').textContent = incorrectCount;
    }
}
// Initialize the page when it loads
window.onload = initPage;