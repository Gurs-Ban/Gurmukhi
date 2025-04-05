// Data for characters
const consonants = [
    // Mātarā vāhakă (Vowels)
    { char: 'ੳ', romanized: 'ura', ipa: 'uːɽaː', group: 'mātarā vāhakă' },
    { char: 'ਅ', romanized: 'aira', ipa: 'ɛːɽaː', group: 'mātarā vāhakă' },
    { char: 'ੲ', romanized: 'iri', ipa: 'iːɽiː', group: 'mātarā vāhakă' },
    
    // Mūlă vargă (Fricatives)
    { char: 'ਸ', romanized: 'sassa', ipa: 'səsːaː', group: 'mūlă vargă' },
    { char: 'ਹ', romanized: 'haha', ipa: 'ɦaːɦaː', group: 'mūlă vargă' },
    
    // Kavargă ṭollī (Velars)
    { char: 'ਕ', romanized: 'kakka', ipa: 'kəkːaː', group: 'kavargă ṭollī' },
    { char: 'ਖ', romanized: 'khakha', ipa: 'kʰəkʰːaː', group: 'kavargă ṭollī' },
    { char: 'ਗ', romanized: 'gagga', ipa: 'gəgːaː', group: 'kavargă ṭollī' },
    { char: 'ਘ', romanized: 'kagga', ipa: 'kə̀gːaː', group: 'kavargă ṭollī' },
    { char: 'ਙ', romanized: 'nagna', ipa: 'ŋəŋːaː', group: 'kavargă ṭollī' },
    
    // Cavargă ṭollī (Affricates/Palatals)
    { char: 'ਚ', romanized: 'chacha', ipa: 't͡ʃət͡ʃːaː', group: 'cavargă ṭollī' },
    { char: 'ਛ', romanized: 'chhacha', ipa: 't͡ʃʰət͡ʃʰːaː', group: 'cavargă ṭollī' },
    { char: 'ਜ', romanized: 'jajja', ipa: 'd͡ʒəd͡ʒːaː', group: 'cavargă ṭollī' },
    { char: 'ਝ', romanized: 'chajja', ipa: 't͡ʃə̀d͡ʒːaː', group: 'cavargă ṭollī' },
    { char: 'ਞ', romanized: 'nanya', ipa: 'ɲəɲːaː', group: 'cavargă ṭollī' },
    
    // Ṭavargă ṭollī (Retroflexes)
    { char: 'ਟ', romanized: 'tainka', ipa: 'ʈɛŋkaː', group: 'ṭavargă ṭollī' },
    { char: 'ਠ', romanized: 'thatha', ipa: 'ʈʰəʈʰːaː', group: 'ṭavargă ṭollī' },
    { char: 'ਡ', romanized: 'dadda', ipa: 'ɖəɖːaː', group: 'ṭavargă ṭollī' },
    { char: 'ਢ', romanized: 'tadda', ipa: 'ʈə̀ɖːaː', group: 'ṭavargă ṭollī' },
    { char: 'ਣ', romanized: 'nana', ipa: 'naːɳaː', group: 'ṭavargă ṭollī' },
    
    // Tavargă ṭollī (Dentals)
    { char: 'ਤ', romanized: 'tatta', ipa: 't̪ət̪ːaː', group: 'tavargă ṭollī' },
    { char: 'ਥ', romanized: 'thatha', ipa: 't̪ʰət̪ʰːaː', group: 'tavargă ṭollī' },
    { char: 'ਦ', romanized: 'dadda', ipa: 'd̪əd̪ːaː', group: 'tavargă ṭollī' },
    { char: 'ਧ', romanized: 'tadda', ipa: 't̪ə̀d̪ːaː', group: 'tavargă ṭollī' },
    { char: 'ਨ', romanized: 'nanna', ipa: 'nənːaː', group: 'tavargă ṭollī' },
    
    // Pavargă ṭollī (Labials)
    { char: 'ਪ', romanized: 'pappa', ipa: 'pəpːaː', group: 'pavargă ṭollī' },
    { char: 'ਫ', romanized: 'phappa', ipa: 'pʰəpʰːaː', group: 'pavargă ṭollī' },
    { char: 'ਬ', romanized: 'babba', ipa: 'bəbːaː', group: 'pavargă ṭollī' },
    { char: 'ਭ', romanized: 'pabba', ipa: 'pə̀bːaː', group: 'pavargă ṭollī' },
    { char: 'ਮ', romanized: 'mamma', ipa: 'məmːaː', group: 'pavargă ṭollī' },
    
    // Antimă ṭollī (Sonorants)
    { char: 'ਯ', romanized: 'yayya', ipa: 'jəjːaː', group: 'antimă ṭollī' },
    { char: 'ਰ', romanized: 'rara', ipa: 'ɾaːɾaː', group: 'antimă ṭollī' },
    { char: 'ਲ', romanized: 'lalla', ipa: 'ləlːaː', group: 'antimă ṭollī' },
    { char: 'ਵ', romanized: 'vava', ipa: 'ʋaːʋaː', group: 'antimă ṭollī' },
    { char: 'ੜ', romanized: 'rara', ipa: 'ɽaːɽaː', group: 'antimă ṭollī' },

    // Navīnă ṭollī (Supplementary Consonants)
    { char: 'ਸ਼', romanized: 'sasse pairi bindi', ipa: 'səsːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' },
    { char: 'ਖ਼', romanized: 'khakhe pairi bindi', ipa: 'kʰəkʰːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' },
    { char: 'ਗ਼', romanized: 'gagge pairi bindi', ipa: 'gəgːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' },
    { char: 'ਜ਼', romanized: 'jajje pairi bindi', ipa: 'd͡ʒəd͡ʒːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' },
    { char: 'ਫ਼', romanized: 'phapphe pairi bindi', ipa: 'pʰəpʰːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' },
    { char: 'ਲ਼', romanized: 'lalle pairi bindi', ipa: 'ləlːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' }
];

/*
 * Vowel System in Gurmukhī
 * 
 * The Gurmukhī script has a rich system of vowel diacritics and subscript letters that modify the pronunciation
 * of consonants. Here's how it works:
 * 
 * 1. Subscript Letters (Duttă Akkhară):
 *    - Three main subscript letters: ਹ (ha), ਰ (ra), and ਵ (va)
 *    - These are used to create consonant clusters and modify tones
 *    - The subscript ਰ and ਵ create consonant clusters (e.g., ਪ੍ਰ- /prə-/)
 *    - The subscript ਹ introduces tone changes
 * 
 * 2. Vowel Diacritics:
 *    - Vowels can be written independently or as diacritics attached to consonants
 *    - The first three letters (ੳ, ਅ, ੲ) are vowel bearers
 *    - Vowel diacritics modify the pronunciation of the consonant they're attached to
 */

// Subscript Letters
const subscriptLetters = [
    { char: '੍ਰ', name: 'pairī̃ rārā', romanized: 'rārā', ipa: 'ɾaːɾaː', group: 'subscript', usage: 'Creates consonant clusters (e.g., ਪ੍ਰ- /prə-/)' },
    { char: '੍ਵ', name: 'pairī̃ vāvā', romanized: 'vāvā', ipa: 'ʋaːʋaː', group: 'subscript', usage: 'Creates /sʋə-/ clusters, mostly in Sanskrit loanwords' },
    { char: '੍ਹ', name: 'pairī̃ hāhā', romanized: 'hāhā', ipa: 'ɦaːɦaː', group: 'subscript', usage: 'Introduces tone changes in non-word-initial positions' }
];

// Vowel Diacritics
const vowels = [

    { 
        char: 'ਆ',
        name: 'kanna',
        romanized: 'aa',
        ipa: 'aː~äː',
        group: 'vowel',
        english: 'like a in car'
    },
    { 
        char: 'ਇ',
        name: 'siari',
        romanized: 'i',
        ipa: 'ɪ',
        group: 'vowel',
        english: 'like i in it'
    },
    { 
        char: 'ਈ',
        name: 'biari',
        romanized: 'ee',
        ipa: 'iː',
        group: 'vowel',
        english: 'like i in litre'
    },
    { 
        char: 'ਉ',
        name: 'aunkar',
        romanized: 'u',
        ipa: 'ʊ',
        group: 'vowel',
        english: 'like u in put'
    },
    { 
        char: 'ਊ',
        name: 'dulainkar',
        romanized: 'oo',
        ipa: 'uː',
        group: 'vowel',
        english: 'like u in spruce'
    },
    { 
        char: 'ਏ',
        name: 'lan',
        romanized: 'e',
        ipa: 'eː',
        group: 'vowel',
        english: 'like e in Chile'
    },
    { 
        char: 'ਐ',
        name: 'dulavan',
        romanized: 'ai',
        ipa: 'ɛː~əi',
        group: 'vowel',
        english: 'like e in sell'
    },
    { 
        char: 'ਓ',
        name: 'hora',
        romanized: 'o',
        ipa: 'oː',
        group: 'vowel',
        english: 'like o in more'
    },
    { 
        char: 'ਔ',
        name: 'kanaura',
        romanized: 'au',
        ipa: 'ɔː~əu',
        group: 'vowel',
        english: 'like o in off'
    }
];

// Vowel Diacritics (Dependent Forms)
const vowelDiacritics = [
    { 
        char: 'ਾ',
        name: 'kannā',
        romanized: 'ā',
        ipa: 'aː~äː',
        group: 'diacritic',
        english: 'like a in car'
    },
    { 
        char: 'ਿ',
        name: 'siā̀rī',
        romanized: 'i',
        ipa: 'ɪ',
        group: 'diacritic',
        english: 'like i in it'
    },
    { 
        char: 'ੀ',
        name: 'biā̀rī',
        romanized: 'ī',
        ipa: 'iː',
        group: 'diacritic',
        english: 'like i in litre'
    },
    { 
        char: 'ੁ',
        name: 'auṅkaṛă',
        romanized: 'u',
        ipa: 'ʊ',
        group: 'diacritic',
        english: 'like u in put'
    },
    { 
        char: 'ੂ',
        name: 'dulaiṅkaṛă',
        romanized: 'ū',
        ipa: 'uː',
        group: 'diacritic',
        english: 'like u in spruce'
    },
    { 
        char: 'ੇ',
        name: 'lā̃/lāvā̃',
        romanized: 'ē',
        ipa: 'eː',
        group: 'diacritic',
        english: 'like e in Chile'
    },
    { 
        char: 'ੈ',
        name: 'dulāvā̃',
        romanized: 'ai',
        ipa: 'ɛː~əi',
        group: 'diacritic',
        english: 'like e in sell'
    },
    { 
        char: 'ੋ',
        name: 'hōṛā',
        romanized: 'ō',
        ipa: 'oː',
        group: 'diacritic',
        english: 'like o in more'
    },
    { 
        char: 'ੌ',
        name: 'kanauṛā',
        romanized: 'au',
        ipa: 'ɔː~əu',
        group: 'diacritic',
        english: 'like o in off'
    }
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

// Add a flag to track if the current character has been answered incorrectly
let currentCharacterIncorrect = false;

// Initialize page
function initPage() {
    // Populate selector grids
    populateSelectorGrid('consonant-selector', consonants);
    populateSelectorGrid('vowel-selector', vowels);
    
    // Set up input handling
    const inputField = document.getElementById('user-input');
    inputField.addEventListener('input', function(e) {
        const userInput = this.value.toLowerCase();
        const correctAnswerLower = correctAnswer.toLowerCase();
        
        // If the input matches the correct answer exactly
        if (userInput === correctAnswerLower) {
            // Only increment correct count if it wasn't previously incorrect
            if (!currentCharacterIncorrect) {
                correctCount++;
                document.getElementById('correct-count').textContent = correctCount;
            }
            document.getElementById('result').textContent = '';
            this.value = ''; // Clear input
            currentCharacterIncorrect = false; // Reset the flag
            nextQuestion();
        } 
        // If the input is incorrect and we haven't marked it incorrect yet
        else if (!correctAnswerLower.startsWith(userInput) && !currentCharacterIncorrect) {
            incorrectCount++;
            document.getElementById('incorrect-count').textContent = incorrectCount;
            document.getElementById('result').textContent = `Correct answer: ${correctAnswer}`;
            document.getElementById('result').style.color = 'red';
            currentCharacterIncorrect = true;
        }
        // If the input is partially correct
        else if (correctAnswerLower.startsWith(userInput)) {
            document.getElementById('result').textContent = '';
        }
    });
    
    // Handle Enter key to force check
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const userInput = this.value.toLowerCase();
            const correctAnswerLower = correctAnswer.toLowerCase();
            
            if (userInput === correctAnswerLower) {
                if (!currentCharacterIncorrect) {
                    correctCount++;
                    document.getElementById('correct-count').textContent = correctCount;
                }
                document.getElementById('result').textContent = '';
                currentCharacterIncorrect = false;
            } else if (!currentCharacterIncorrect) {
                incorrectCount++;
                document.getElementById('incorrect-count').textContent = incorrectCount;
                document.getElementById('result').textContent = `Correct answer: ${correctAnswer}`;
                document.getElementById('result').style.color = 'red';
                currentCharacterIncorrect = true;
            }
            
            this.value = ''; // Clear input
            nextQuestion();
        }
    });
    
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
    currentCharacterIncorrect = false; // Reset the flag for the new character
    
    // Get a random character
    const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
    currentCharacter = selectedCharacters[randomIndex];
    
    document.getElementById('current-character').textContent = currentCharacter.char;
    correctAnswer = currentCharacter.romanized;
}

function checkAnswer(userAnswer) {
    const resultElement = document.getElementById('result');
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
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
    
    // Move to next question after a short delay
    setTimeout(nextQuestion, 1500);
}

function resetStats() {
    correctCount = 0;
    incorrectCount = 0;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('incorrect-count').textContent = incorrectCount;
    document.getElementById('result').textContent = '';
    
    // Get currently selected characters
    selectedCharacters = [];
    const selectedItems = document.querySelectorAll('.selector-item.selected');
    selectedItems.forEach(item => {
        selectedCharacters.push({
            char: item.dataset.char,
            romanized: item.dataset.romanized
        });
    });
    
    // If no characters are selected, select basic consonants
    if (selectedCharacters.length === 0) {
        selectBasicConsonants();
        updateQuizWithSelected();
    } else {
        // Reset the quiz with currently selected characters
        currentCharacterIncorrect = false;
        nextQuestion();
    }
}

function toggleOptions() {
    const controls = document.querySelector('.selector-controls');
    const consonantGrid = document.getElementById('consonant-selector');
    const vowelGrid = document.getElementById('vowel-selector');
    const toggleBtn = document.querySelector('.toggle-btn');
    
    if (controls.style.display === 'none') {
        controls.style.display = 'flex';
        consonantGrid.style.display = 'grid';
        vowelGrid.style.display = 'grid';
        toggleBtn.textContent = 'Hide Options';
    } else {
        controls.style.display = 'none';
        consonantGrid.style.display = 'none';
        vowelGrid.style.display = 'none';
        toggleBtn.textContent = 'Show Options';
    }
}

// Initialize the page when it loads
window.onload = initPage;