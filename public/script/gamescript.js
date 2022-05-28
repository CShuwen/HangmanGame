const rightguess = document.getElementById('rightguess');
const wrongGuess = document.getElementById('wrongguess');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const head = document.querySelector(".manhead");
const arm1 = document.querySelector(".manarm1");
const arm2 = document.querySelector(".manarm2");
const leg1 = document.querySelector(".manleg1");
const leg2 = document.querySelector(".manleg2");
const body = document.querySelector(".manbody");

const hangmanParts = [head, body, arm1, arm2, leg1, leg2];

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

//Show hidden word
function lettersDisplay(){
    rightguess.innerHTML = `
    ${selectedWord.split('').map(
        letter =>`
        <span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>
        `
    )
    .join('')}`;
    const innerWord = rightguess.innerText.replace(/\n/g, '');

    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You won! 😃';
        popup.style.display= 'flex';
    }
}

// Update the wrong letters
function wrongGuessDisplay(){
    //Display wrong letters
    wrongGuess.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    const wrongNumber = wrongLetters.length;
    for (i = 0; i < hangmanParts.length; i++) {
        if(i < wrongNumber) {
            hangmanParts[i].style.display = 'block';
        } else{
            hangmanParts[i].style.display = 'none';
        }
    };
 
    if(wrongLetters.length === hangmanParts.length){
        finalMessage.innerText = 'Unfortunately you lost. 😕';
        popup.style.display = 'flex';
    }
}

//Show notification
function showNotification(){
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

//Keydown letter press
window.addEventListener('keydown', e =>{
    if(e.keyCode >= 65 && e.keyCode <=90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                lettersDisplay();
            } else{
                showNotification();
            }
        } else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);

                wrongGuessDisplay();
            } else{
                showNotification();
            }
        }
    }
});

//Restart game and play again
playAgainBtn.addEventListener('click', () => {
    //Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    lettersDisplay();

    wrongGuessDisplay();

    popup.style.display = 'none';
});

lettersDisplay();