// Importação usando require, compatível com CommonJS
const express = require('express');
const { getRepositories } = require('./controllers/repositoriesController');
const logger = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Rota principal da API
app.get('/api/repositories', getRepositories);

// Inicia o servidor e registra log de inicialização
app.listen(PORT, () => {
  logger.info(`Servidor rodando na porta ${PORT}`);
});
