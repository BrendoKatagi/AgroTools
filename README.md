# AgroTools
Aplicação criada para o teste técnico da empresa AgroTools

## Requisitos

1º Construir um sistema web responsivo, que deverá:

Criar questionário (Visto que cada usuário pode configurar um ou mais questionários para serem respondidos)
Responder um questionário


2º Telas

Ao clicar sobre o questionário respondido, listar as respectivas perguntas e respostas realizadas
Tela de responder questionário
Tela de criar um questionário


3º Observações:

Criar o backend de ao menos uma rota. As demais chamadas podem ser utilizado mock
Não é necessário realizar o acesso ao banco. Pode configurar um arquivo json (ou algo que o valha) para massa de dados de exemplo.
Um questionário deverá apresentar apenas perguntas com respostas do tipo texto.
Para o frontend, idealmente, não utilizar tecnologias como Vue.js React e outros.


4º Estruturas a serem consideradas:

Questionário: Título, Usuário, Data de cadastro
Resposta: Resposta, Data de cadastro, Localização Atual - LAT e LONG

## Rodando aplicação:

#### Requisitos:
- Node.js

#### clonar dependencias
    $ git clone https://github.com/brendokatagi/AgroTools
    $ cd AgroTools
#### instalando:
  ```sh
  npm install
  ```
  ```sh
$npm install -g nodemon
  ```
#### iniciando aplicação com nodemon:  

 ```sh
$ nodemon app.js
  ```
  
#### Acesso:
Acessar http://localhost:300/ no browser
