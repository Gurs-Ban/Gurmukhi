// Data for characters
const consonants = [
    // Mātarā vāhakă (Vowels)
    { char: 'ੳ', romanized: 'ūṛā', ipa: 'uːɽaː', group: 'mātarā vāhakă' },
    { char: 'ਅ', romanized: 'aiṛā', ipa: 'ɛːɽaː', group: 'mātarā vāhakă' },
    { char: 'ੲ', romanized: 'īṛī', ipa: 'iːɽiː', group: 'mātarā vāhakă' },
    
    // Mūlă vargă (Fricatives)
    { char: 'ਸ', romanized: 'sassā', ipa: 'səsːaː', group: 'mūlă vargă' },
    { char: 'ਹ', romanized: 'hāhā', ipa: 'ɦaːɦaː', group: 'mūlă vargă' },
    
    // Kavargă ṭollī (Velars)
    { char: 'ਕ', romanized: 'kakkā', ipa: 'kəkːaː', group: 'kavargă ṭollī' },
    { char: 'ਖ', romanized: 'khakkhā', ipa: 'kʰəkʰːaː', group: 'kavargă ṭollī' },
    { char: 'ਗ', romanized: 'gaggā', ipa: 'gəgːaː', group: 'kavargă ṭollī' },
    { char: 'ਘ', romanized: 'kàggā', ipa: 'kə̀gːaː', group: 'kavargă ṭollī' },
    { char: 'ਙ', romanized: 'ṅaṅṅā', ipa: 'ŋəŋːaː', group: 'kavargă ṭollī' },
    
    // Cavargă ṭollī (Affricates/Palatals)
    { char: 'ਚ', romanized: 'caccā', ipa: 't͡ʃət͡ʃːaː', group: 'cavargă ṭollī' },
    { char: 'ਛ', romanized: 'chacchā', ipa: 't͡ʃʰət͡ʃʰːaː', group: 'cavargă ṭollī' },
    { char: 'ਜ', romanized: 'jajjā', ipa: 'd͡ʒəd͡ʒːaː', group: 'cavargă ṭollī' },
    { char: 'ਝ', romanized: 'càjjā', ipa: 't͡ʃə̀d͡ʒːaː', group: 'cavargă ṭollī' },
    { char: 'ਞ', romanized: 'ñaññā', ipa: 'ɲəɲːaː', group: 'cavargă ṭollī' },
    
    // Ṭavargă ṭollī (Retroflexes)
    { char: 'ਟ', romanized: 'ṭaiṅkā', ipa: 'ʈɛŋkaː', group: 'ṭavargă ṭollī' },
    { char: 'ਠ', romanized: 'ṭhaṭṭhā', ipa: 'ʈʰəʈʰːaː', group: 'ṭavargă ṭollī' },
    { char: 'ਡ', romanized: 'ḍaḍḍā', ipa: 'ɖəɖːaː', group: 'ṭavargă ṭollī' },
    { char: 'ਢ', romanized: 'ṭàḍḍā', ipa: 'ʈə̀ɖːaː', group: 'ṭavargă ṭollī' },
    { char: 'ਣ', romanized: 'nāṇā', ipa: 'naːɳaː', group: 'ṭavargă ṭollī' },
    
    // Tavargă ṭollī (Dentals)
    { char: 'ਤ', romanized: 'tattā', ipa: 't̪ət̪ːaː', group: 'tavargă ṭollī' },
    { char: 'ਥ', romanized: 'thatthā', ipa: 't̪ʰət̪ʰːaː', group: 'tavargă ṭollī' },
    { char: 'ਦ', romanized: 'daddā', ipa: 'd̪əd̪ːaː', group: 'tavargă ṭollī' },
    { char: 'ਧ', romanized: 'tàddā', ipa: 't̪ə̀d̪ːaː', group: 'tavargă ṭollī' },
    { char: 'ਨ', romanized: 'nannā', ipa: 'nənːaː', group: 'tavargă ṭollī' },
    
    // Pavargă ṭollī (Labials)
    { char: 'ਪ', romanized: 'pappā', ipa: 'pəpːaː', group: 'pavargă ṭollī' },
    { char: 'ਫ', romanized: 'phapphā', ipa: 'pʰəpʰːaː', group: 'pavargă ṭollī' },
    { char: 'ਬ', romanized: 'babbā', ipa: 'bəbːaː', group: 'pavargă ṭollī' },
    { char: 'ਭ', romanized: 'pàbbā', ipa: 'pə̀bːaː', group: 'pavargă ṭollī' },
    { char: 'ਮ', romanized: 'mammā', ipa: 'məmːaː', group: 'pavargă ṭollī' },
    
    // Antimă ṭollī (Sonorants)
    { char: 'ਯ', romanized: 'yayyā', ipa: 'jəjːaː', group: 'antimă ṭollī' },
    { char: 'ਰ', romanized: 'rārā', ipa: 'ɾaːɾaː', group: 'antimă ṭollī' },
    { char: 'ਲ', romanized: 'lallā', ipa: 'ləlːaː', group: 'antimă ṭollī' },
    { char: 'ਵ', romanized: 'vāvā', ipa: 'ʋaːʋaː', group: 'antimă ṭollī' },
    { char: 'ੜ', romanized: 'ṛāṛā', ipa: 'ɽaːɽaː', group: 'antimă ṭollī' },

    // Navīnă ṭollī (Supplementary Consonants)
    { char: 'ਸ਼', romanized: 'sassē pairĭ bindī', ipa: 'səsːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' },
    { char: 'ਖ਼', romanized: 'khakkhē pairĭ bindī', ipa: 'kʰəkʰːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' },
    { char: 'ਗ਼', romanized: 'gaggē pairĭ bindī', ipa: 'gəgːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' },
    { char: 'ਜ਼', romanized: 'jajjē pairĭ bindī', ipa: 'd͡ʒəd͡ʒːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' },
    { char: 'ਫ਼', romanized: 'phapphē pairĭ bindī', ipa: 'pʰəpʰːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' },
    { char: 'ਲ਼', romanized: 'lallē pairĭ bindī', ipa: 'ləlːeː pɛ:ɾɨ bɪn̪d̪iː', group: 'navīnă ṭollī' }
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
        char: 'ਅ',
        name: 'mukḁ̆tā',
        romanized: 'a',
        ipa: 'ə',
        group: 'vowel',
        english: 'like a in about'
    },
    { 
        char: 'ਆ',
        name: 'kannā',
        romanized: 'ā',
        ipa: 'aː~äː',
        group: 'vowel',
        english: 'like a in car'
    },
    { 
        char: 'ਇ',
        name: 'siā̀rī',
        romanized: 'i',
        ipa: 'ɪ',
        group: 'vowel',
        english: 'like i in it'
    },
    { 
        char: 'ਈ',
        name: 'biā̀rī',
        romanized: 'ī',
        ipa: 'iː',
        group: 'vowel',
        english: 'like i in litre'
    },
    { 
        char: 'ਉ',
        name: 'auṅkaṛă',
        romanized: 'u',
        ipa: 'ʊ',
        group: 'vowel',
        english: 'like u in put'
    },
    { 
        char: 'ਊ',
        name: 'dulaiṅkaṛă',
        romanized: 'ū',
        ipa: 'uː',
        group: 'vowel',
        english: 'like u in spruce'
    },
    { 
        char: 'ਏ',
        name: 'lā̃/lāvā̃',
        romanized: 'ē',
        ipa: 'eː',
        group: 'vowel',
        english: 'like e in Chile'
    },
    { 
        char: 'ਐ',
        name: 'dulāvā̃',
        romanized: 'ai',
        ipa: 'ɛː~əi',
        group: 'vowel',
        english: 'like e in sell'
    },
    { 
        char: 'ਓ',
        name: 'hōṛā',
        romanized: 'ō',
        ipa: 'oː',
        group: 'vowel',
        english: 'like o in more'
    },
    { 
        char: 'ਔ',
        name: 'kanauṛā',
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


// Initialize page
function initPage() {
    // Populate selector grids
    populateSelectorGrid('consonant-selector', consonants);
    populateSelectorGrid('vowel-selector', vowels);
    
    // Set up input handling
    const inputField = document.getElementById('user-input');
    inputField.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAnswer(this.value);
            this.value = ''; // Clear input after checking
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

// Initialize the page when it loads
window.onload = initPage;