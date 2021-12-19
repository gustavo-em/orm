import { Router } from 'express';

import {
  createCategoriaPersonagemController,
} from '../useCases/CategoriaPersonagem/createCategoriaPersonagemController';
import {
  listCategoriaPersonagemController,
} from '../useCases/CategoriaPersonagem/listCategoriaPersonagemController';

const categoria_personagemRouter = Router()

categoria_personagemRouter.get('/', new listCategoriaPersonagemController().handle)
categoria_personagemRouter.post('/', new createCategoriaPersonagemController().handle)
export { categoria_personagemRouter };