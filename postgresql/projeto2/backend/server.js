const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const { pool } = require('./database/conexao');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const caminhoFrontend = path.join(__dirname, '..', 'frontend');
app.use(express.static(caminhoFrontend));

app.get('/', (req, res) => {
 res.sendFile(path.join(caminhoFrontend, 'index.html'));
});

app.get('/api/teste/conexao', async (req, res) => {
 try {
  const resultado = await pool.query(
   'SELECT NOW() AS data_atual, current_database() AS banco_atual'
  );
  return res.status(200).json({
   sucesso: true,
   mensagem: 'Conexão com PostgreSQL realizada com sucesso!',
   data: resultado.rows[0]
  });
 } catch (erro) {
  console.error('Erro ao conectar com PostgreSQL:', erro);
  return res.status(500).json({
   sucesso: false,
   mensagem: 'Erro ao conectar com PostgreSQL.',
   erro: erro.message
  });
 }
});




// Rota produtos
app.get('/produtos', (req, res) => {
  res.sendFile(path.join(caminhoFrontend, 'produtos.html'));
});


app.get('/produto/novo', (req, res) => {
  res.sendFile(path.join(caminhoFrontend, 'produtosnovo.html'));
});


app.get('/clientes', (req, res) => {
  res.sendFile(path.join(caminhoFrontend, 'clientes.html'));
});


app.get('/usuarios', (req, res) => {
  res.sendFile(path.join(caminhoFrontend, 'usuarios.html'));
});


app.get('/produto/editar', (req, res) => {
  res.sendFile(path.join(caminhoFrontend, 'produtoeditar.html'));
});


app.get('/api/produtos', async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT 
        id,
        nome,
        preco,
        estoque,
        categoria
      FROM produtos
      ORDER BY id ASC
    `);

    return res.status(200).json(resultado.rows);

  } catch (erro) {
    console.error('Erro ao listar produtos:', erro);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao listar produtos.',
      erro: erro.message
    });
  }
});




app.delete('/api/produtos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const resultado = await pool.query(
      'DELETE FROM produtos WHERE id = $1 RETURNING *',
      [id]
    );

    if (resultado.rowCount === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Produto não encontrado.'
      });
    }

    return res.status(200).json({
      sucesso: true,
      mensagem: 'Produto excluído com sucesso.',
      produto: resultado.rows[0]
    });

  } catch (erro) {
    console.error('Erro ao excluir produto:', erro);

    return res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao excluir produto.',
      erro: erro.message
    });
  }
});


app.use((req, res) => {
 res.status(404).json({
  sucesso: false,
  mensagem: 'Rota não encontrada.'
 });
});
app.listen(PORT, () => {
 console.log(`Servidor rodando na porta ${PORT}`);
 console.log(`Acesse: http://localhost:${PORT}`);
});
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DATABASE:', process.env.DB_DATABASE);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD carregada:', process.env.DB_PASSWORD ? 'Sim' : 'Não');


