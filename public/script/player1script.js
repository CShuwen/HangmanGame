let input = document.querySelector("input");

function sendWord() {
    const string = input.value;
    if (string.length === 0) {
        alert("input a word in the text frame");
    }
    localStorage.setItem("word", string);
    window.location.href = "/player1/game";
}