README

# TakeNet API - Consulta de Repositórios

Esta API permite consultar informações sobre os 5 repositórios de linguagem C# mais antigos da organização Takenet no GitHub, ordenados do mais antigo para o mais novo. A API retorna detalhes como o nome completo do repositório, descrição, URL do avatar e URL do repositório.

## Índice

* [Visão Geral](#visão-geral)
* [Instalação](#instalação)
* [Configuração](#configuração)
* [Executando a API](#executando-a-api)
* [Endpoints](#endpoints)
* [Exemplo de Uso](#exemplo-de-uso)
* [Tratamento de Erros](#tratamento-de-erros)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Visão Geral

A API consulta os repositórios da organização Takenet no GitHub, filtra os repositórios de linguagem C#, e retorna os cinco repositórios mais antigos. Cada repositório inclui informações úteis, como nome completo, descrição e URL do avatar.

## Instalação

1. Clone o repositório para sua máquina local:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd TakeNetAPIBlipTest

2. Instale as dependências necessárias:

bash
Copiar código
npm install
Configuração
Antes de iniciar a API, é necessário configurar uma chave de acesso à API do GitHub para evitar limites de requisições.

Crie um token de acesso pessoal no GitHub:
Acesse GitHub Developer Settings.
Crie um token com permissões para acessar repositórios públicos.
Defina o token como uma variável de ambiente:
Crie um arquivo .env na raiz do projeto e adicione a seguinte linha:
plaintext
Copiar código
GITHUB_TOKEN=seu_token_de_acesso_aqui
Nota: Certifique-se de manter o token seguro e nunca o exponha em repositórios públicos.

Executando a API
Para iniciar a API localmente, execute o comando abaixo:

bash
Copiar código
npm start
A API será executada na URL http://localhost:3000.

Endpoints
GET /api/repositories
Retorna uma lista dos 5 repositórios mais antigos de linguagem C# da Takenet.

URL: /api/repositories
Método: GET
Resposta: JSON com informações sobre cada repositório.
Exemplo de Resposta
json
Copiar código
[
  {
    "full_name": "takenet/library.data",
    "description": "Provides a simple abstraction for implementing the repository and unit of work patterns for data-enabled applications",
    "avatar_url": "https://avatars.githubusercontent.com/u/4369522?v=4",
    "html_url": "https://github.com/takenet/library.data"
  },
  ...
]
Exemplo de Uso
Para testar a API com Postman ou outro cliente HTTP:

Inicie o servidor local (npm start).
Envie uma requisição GET para:
plaintext
Copiar código
http://localhost:3000/api/repositories
Caso esteja utilizando o ngrok para expor a API, use a URL pública gerada, por exemplo:

plaintext
Copiar código
https://abcd1234.ngrok.io/api/repositories
Tratamento de Erros
A API retorna mensagens de erro apropriadas para diferentes situações:

* 401 Unauthorized: Quando o token de acesso do GitHub está incorreto ou ausente.
* 403 Forbidden: Quando o limite de requisições da API do GitHub é atingido.
* 404 Not Found: Quando o recurso solicitado não é encontrado.
* 500 Internal Server Error: Quando ocorre um erro no servidor.
* Esses erros são tratados e uma mensagem amigável é retornada ao cliente.

Tecnologias Utilizadas
* Node.js: Ambiente de execução JavaScript.
* Express: Framework para criação de servidores web.
* node-fetch: Biblioteca para fazer requisições HTTP.
* dotenv: Carrega variáveis de ambiente a partir de um arquivo .env.
