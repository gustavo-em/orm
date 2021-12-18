import './connect_typeorm';

import * as express from 'express';

import createUserController from './useCases/createuser/createUserControler';

const app = express();

app.post('/teste', new createUserController().handle)


app.listen(3333)