const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

const pathArquives = '../arquives/ebooks';

const diretorioArquivos = path.join(__dirname, pathArquives);

app.use(cors()); // Use o middleware cors antes de definir as rotas

app.get('/arquivos',(req, res) => {
  fs.readdir(diretorioArquivos, (err,files) => {
    if(err){
      console.error('Erro ao ler diretório: ', err);
      return res.status(500).json({
        error: 'Erro ao listar os arquivos.'
      });
    }
    res.json({
      arquivos: files
    });
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Servidor rodando na porta ' + PORT);
});
