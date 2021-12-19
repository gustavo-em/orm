import './connect_typeorm';

import * as express from 'express';

import {
  categoria_personagemRouter,
} from './routes/categoria_personagem.routes';
import { personagemRouter } from './routes/personagem.routes';
import { usuarioRouter } from './routes/usuario.routes';

const app = express();
app.use(express.json());

app.use('/personagem', personagemRouter)
app.use('/usuario', usuarioRouter)
app.use('/categoria_personagem', categoria_personagemRouter)

app.listen(3333)