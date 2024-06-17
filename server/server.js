const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let itensEnviados = [];

app.get('/itens', (req, res) => {
    res.json(itensEnviados);
});

app.post('/itens', (req, res) => {
    itensEnviados = req.body;
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});