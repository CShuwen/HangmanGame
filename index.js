const PORT = process.env.PORT || 4000;
const express = require('express');
const app = express();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

