const express = require('express');
const fs = require('fs/promises');
const bodyParser = require('body-parser');
const cors = require('cors'); // permite a requisição

const talker = require('./controller/talker');
const error = require('./middleware/error');
const auth = require('./middleware/auth');

const app = express();
app.use(cors(), bodyParser.json());
const PORT = 8000;

app.get('/secure/talker', auth, talker)
app.get('/talker', talker);

app.use(error);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));