import './connect_typeorm';

import * as express from 'express';

import { usuarioRouter } from './routes/usuario.routes';

const app = express();
app.use(express.json());
//app.post('/teste', new createUserController().handle)

app.use('/usuario', usuarioRouter)

//app.post('/usuario', new createUsuarioController().handle)

app.listen(3333)