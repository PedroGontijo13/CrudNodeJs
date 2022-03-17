# Crud com NodeJs e Sequelize

Cria uma api com <a href="https://nodejs.org/en/">NodeJS</a> e <a href="https://sequelize.org/">Sequelize</a> e salva dados em um banco de dados <a href="https://www.postgresql.org/">postgresql</a>.

Para utilizar basta baixar ou clonar o projeto e utilizar o comando:

yarn

Depois de instalar as dependencias voce deve configurar o arquivo .env na pasta principal. Com as seguintes variaveis ambientes do seu banco de dados:

DB_NAME=<br>
DB_PASS=<br>
DB_HOST=<br>

No caso do exemplo o nome do banco de dados eh o mesmo do usuario como esta configurado: <a href="https://github.com/PedroGontijo13/CrudNodeJs/blob/master/src/config/database.js">./src/config/database.js</a>.

Apos isso basta utilizar o comando:

yarn dev

Esse comando ira iniciar a aplicacao na url=<a href="http://localhost:5555">http://localhost:5555</a><br>.

Apos isso voce pode salvar e utilizar dados em diferentes aplicacoes. Como por exemplo fazer um frontend que utiliza todas as funcoes da API criada. <br>

Exemplo de <a href="https://github.com/PedroGontijo13/ReactFrontCrudDB">FrontEnd</a>
