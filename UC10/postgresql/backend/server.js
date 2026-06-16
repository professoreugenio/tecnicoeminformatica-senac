const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const porta = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ mensagem: 'API funcionando corretamente!' });
});

app.get('/produtos', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM produtos ORDER BY id DESC');
        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ erro: 'Erro ao listar produtos' });
    }
});

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});