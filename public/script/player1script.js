// let btn = document.querySelector("button");
let input = document.querySelector("input");

// let words = [];
// let currenPlayer = 1;


// btn.addEventListener('click', () => {
//     words.unshift(input.value);
// });

function sendWord() {
    const string = input.value;
    if (string.length === 0) {
        alert("input a word in the text frame");
    }
    localStorage.setItem("word", string);
    window.location.href = "/player1/game";
}