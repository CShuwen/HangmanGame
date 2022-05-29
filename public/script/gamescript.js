const rightguess = document.getElementById('rightguess');
const wrongGuess = document.getElementById('wrongguess');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const showWord = document.getElementById('show-word');

const head = document.querySelector(".manhead");
const arm1 = document.querySelector(".manarm1");
const arm2 = document.querySelector(".manarm2");
const leg1 = document.querySelector(".manleg1");
const leg2 = document.querySelector(".manleg2");
const body = document.querySelector(".manbody");

const hangmanParts = [head, body, arm1, arm2, leg1, leg2];

let selectedWord = localStorage.getItem("word");
let show = 'The Word is' + selectedWord;

const correctLetters = [];
const wrongLetters = [];

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
        finalMessage.innerText = 'Congratulations! Player2 won!';
        showWord.innerText = show;
        popup.style.display= 'flex';
    }
}

function wrongGuessDisplay(){
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
        finalMessage.innerText = 'Congratulations! Player1 Won!';
        
        showWord.innerText = show;
        popup.style.display = 'flex';
    }
}

function showNotification(){
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

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

playAgainBtn.addEventListener('click', () => {
    window.location.href = "/player1"
});

lettersDisplay();