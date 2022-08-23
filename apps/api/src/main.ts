import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { DBHelper } from './app/helpers/db.helper';

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

DBHelper.init()
