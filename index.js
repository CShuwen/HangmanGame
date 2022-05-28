const PORT = process.env.PORT || 4000;
const express = require('express');
const res = require('express/lib/response');
const app = express();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/game", (req, res) => {
    res.sendFile(__dirname + "/game.html");
});

