const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;
const data = require("./data.json");

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/membres', (req, res) => {
    res.send(data);
});

app.get('/download/data.json', (req, res) => {
    res.download("./data.json");
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
