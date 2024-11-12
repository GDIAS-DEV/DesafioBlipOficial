const { fetchRepositories } = require('../services/githubService');
const logger = require('../utils/logger');

// Controlador para listar repositórios
async function getRepositories(req, res) {
  try {
    const repos = await fetchRepositories();

    if (repos.length === 0) {
      // Retorna 404 caso não haja repositórios de C# encontrados
      logger.warn('Nenhum repositório C# encontrado.');
      return res.status(404).json({ message: 'Nenhum repositório C# encontrado.' });
    }

    // Formatação da mensagem de resposta
    const responseData = repos.map(repo => ({
      full_name: repo.full_name,
      description: repo.description,
      avatar_url: repo.owner.avatar_url,
      html_url: repo.html_url  // Adiciona a URL do repositório no GitHub
    }));

    // Retorna o JSON com código 200
    res.status(200).json(responseData);
  } catch (error) {
    // Retorna erro 500 e registra log
    logger.error('Erro ao buscar repositórios:', error);
    res.status(500).json({ error: 'Erro ao buscar repositórios' });
  }
}

module.exports = { getRepositories };
