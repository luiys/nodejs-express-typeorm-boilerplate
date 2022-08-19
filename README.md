# Etapas após baixar o boilerplate

- yarn

- dentro de others/commands.txt editar o comando de gerar o provider do prisma com o tipo de banco que será usado e depois executar o comando

- editar o DATABASE_URL que foi gerado no .env com as credenciais do banco

- npx prisma db pull

- npx prisma generate

- instanciar o prisma nas controllers

- adicionar ao .env as variaveis que estao no .env.example tambem
