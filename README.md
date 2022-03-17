# Crud com NodeJs e Sequelize

Cria uma api com <a href="https://nodejs.org/en/">NodeJS</a> e <a href="https://sequelize.org/">Sequelize</a> e salva dados em um banco de dados <a href="https://www.postgresql.org/">postgresql</a>.

Para utilizar basta baixar ou clonar o projeto e utilizar o comando:

yarn

Depois de instalar as dependências você deve configurar o arquivo .env na pasta principal. Com as seguintes variáveis ambientes do seu banco de dados:

DB_NAME=<br>
DB_PASS=<br>
DB_HOST=<br>

No caso do exemplo o nome do banco de dados eh o mesmo do usuario como esta configurado: <a href="https://github.com/PedroGontijo13/CrudNodeJs/blob/master/src/config/database.js">./src/config/database.js</a>.

Após isso basta utilizar o comando:

yarn dev

Esse comando irá iniciar a aplicação na url=<a href="http://localhost:5555">http://localhost:5555</a><br>

Após isso você pode salvar e utilizar dados em diferentes aplicações. Como por exemplo fazer um frontend que utiliza todas as funções da API criada. <br>

Exemplo de <a href="https://github.com/PedroGontijo13/ReactFrontCrudDB">FrontEnd</a>


# Crud with NodeJs and Sequelize

Create an api with <a href="https://nodejs.org/en/">NodeJS</a> and <a href="https://sequelize.org/">Sequelize</a> and save data in a <a href="https://www.postgresql.org/">postgresql</a> database.

To use it, just download or clone the project and use the command:

yarn

After installing the dependencies you must configure the .env file in the main folder. With the following environment variables from your database:

DB_NAME=<br>
DB_PASS=<br>
DB_HOST=<br>

In the case of the example, the database name is the same as the user as configured: <a href="https://github.com/PedroGontijo13/CrudNodeJs/blob/master/src/config/database.js">. /src/config/database.js</a>.

After that, just use the command:

yarn dev

This command will launch the application at url=<a href="http://localhost:5555">http://localhost:5555</a><br>

After that you can save and use data in different applications. For example, making a frontend that uses all the functions of the API created. <br>

Example of <a href="https://github.com/PedroGontijo13/ReactFrontCrudDB">FrontEnd</a>
