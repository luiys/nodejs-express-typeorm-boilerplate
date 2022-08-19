# Etapas após baixar o boilerplate

- yarn

- dentro de others/commands.txt editar o comando de gerar o provider do prisma com o tipo de banco que será usado e depois executar o comando

- editar o DATABASE_URL que foi gerado no .env com as credenciais do banco

- npx prisma db pull

- npx prisma generate

- instanciar o prisma nas controllers

- em src/index.ts alterar o tipo de banco de dados na conexao na property "type"         

- em src/modules/acesso/UserController.ts alterar o diretorio da entidade da tabela de usuarios

- adicionar ao .env as variaveis que estao no .env.example tambem
