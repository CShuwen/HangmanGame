const PORT = process.env.PORT || 4000;
const express = require('express');
const res = require('express/lib/response');
const app = express();
app.use(express.static(__dirname +'/public'));


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/player1", (req, res) => {
    res.sendFile(__dirname + "/player1.html");
});

app.get("/player1/game", (req, res) => {
    res.sendFile(__dirname + "/game.html");
});

