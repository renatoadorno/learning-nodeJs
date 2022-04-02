const express = require('express');

const CustomerRouters  = require('./routers/customer');
const fs = require('fs').promises;

const app = express();
const PORT = 3001;

/*
[x] Só deve existir um CPF por usuário. Quando um usuário ja estiver cadastrado infomar uma mensagem "Usuário já cadastrado!"
[ ] Ao tentar Editar um usuário que não existe, deve informar "Usuário não cadastrado!"
[x] Enviar um email após cadastrar o usuário com a mensagem "Olá, [nome]! Concluímos o seu cadastro."
[ ] Enviar um email após editar um usuário com a mensagem "Olá, [nome]! seu cadastro foi atualizado."
 */

app.use(express.json());

app.use('/customers', CustomerRouters);

app.use((err, req, res, next) => res.status(500).json({ message: 'Erro no servidor'}))


app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
