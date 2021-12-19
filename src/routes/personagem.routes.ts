import { Router } from 'express';

import {
  createPersonagemController,
} from '../useCases/Personagem/createPersonagem/createPersonagemController';
import {
  listPersonagemController,
} from '../useCases/Personagem/listPersonagens/listPersonagensController';

let personagemRouter = Router();

personagemRouter.post('/', new createPersonagemController().handle)
personagemRouter.get('/', new listPersonagemController().handle)

export { personagemRouter };