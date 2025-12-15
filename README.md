📚 Pokedéx – Projeto Simples

Este projeto é uma implementação básica de uma Pokedéx utilizando Angular no front-end e Spring Boot no back-end, com fins educacionais e de estudo.

💻 Tecnologias Utilizadas

Spring Boot 3

Angular 14

Node.js 16

🧩 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

Node.js
 (versão 16 ou superior)

Angular CLI

Java JDK
 para Spring Boot

IDE de sua preferência (VS Code, IntelliJ, etc.)

⚡ Como Executar
1. Back-end (Spring Boot)

Abra o projeto Spring Boot na sua IDE.

Execute a aplicação. Por padrão, ela rodará em:

http://localhost:8080/


Para acessar o banco de dados H2 (console web):

http://localhost:8080/h2-console/


Dica: Usuário e senha padrão podem ser configurados no application.properties.

2. Front-end (Angular)

Abra o terminal na pasta do projeto Angular.

Instale as dependências:

npm install


Execute o projeto:

ng serve


Acesse a aplicação no navegador:

http://localhost:4200/

📝 Observações

Este projeto é apenas para fins de estudo.

Certifique-se de que o Spring Boot esteja rodando antes de iniciar o Angular, pois a aplicação front-end depende do back-end para consumir a API.

A pasta node_modules/ e a pasta dist/ não devem ser commitadas no Git.