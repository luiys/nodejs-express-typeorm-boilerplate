# Etapas após baixar o boilerplate

- yarn (como de costume)

- dentro de others/commands.txt editar o comando de gerar entidades com as credencias do banco de dados que será usado na API

- rodar o comando e colocar as entidades geradas dentro da pasta src/entity/

- chamar as entidades dentro da src/index.ts onde é criada a conexao com bd na property "entities"

- em src/index.ts alterar o tipo de banco de dados na conexao na property "type"         

- em src/modules/acesso/UserController.ts alterar o diretorio da entidade da tabela de usuarios

- criar um .env com os seguintes campos: 

```
-----BEGIN .ENV-----
PORT=3333

DB_HOST=db_host
DB_NAME=db_name
DB_USER=db_user
DB_PASSWORD=db_password
DB_PORT=3306

LOG_LABEL=label_do_log

HASH_SECRET_KEY=chave_da_util_crypto

EMAIL_USER=email_user
EMAIL_SENHA=email_senha
EMAIL_HOST=email_host
EMAIL_PORT=email_port

CLIENT_ID=client_id
CLIENT_SECRET=client_secret
REDIRECT_URI=https://developers.google.com/oauthplayground
REFRESH_TOKEN=refresh_token
-----END .ENV-----
```

