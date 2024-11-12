const logger = require('../utils/logger');

// Função para buscar os repositórios de C# mais antigos
async function fetchRepositories() {
  // Importação dinâmica do node-fetch, compatível com CommonJS
  const fetch = (await import('node-fetch')).default;

 try {
    // Faz a requisição para a API do GitHub buscando repositórios da Takenet
    const response = await fetch('https://api.github.com/orgs/takenet/repos?per_page=100', {
      headers: {
        'Authorization': `Bearer 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`
      }
    });


    if (!response.ok) {
      // Retorna erro caso a resposta não seja bem-sucedida
      throw new Error(`Erro na requisição ao GitHub: ${response.statusText}`);
    }

    const repos = await response.json();

    // Filtra os repositórios de C#
    const csharpRepos = repos.filter(repo => repo.language === 'C#');

    // Ordena do mais antigo para o mais novo
    csharpRepos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

    // Retorna os 5 repositórios mais antigos
    return csharpRepos.slice(0, 5);
  } catch (error) {
    logger.error('Erro ao buscar repositórios do GitHub:', error);
    throw error;
  }
}

module.exports = { fetchRepositories };
