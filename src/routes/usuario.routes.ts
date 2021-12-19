import { Router } from 'express';

import {
  createUsuarioController,
} from '../useCases/Usuario/createUsuario/createUsuarioController';
import {
  getUsuariocontroller,
} from '../useCases/Usuario/getUsuarios/getUsuariosController';

const usuarioRouter = Router();


usuarioRouter.post('/', new createUsuarioController().handle)
usuarioRouter.get('/', new getUsuariocontroller().handle)
export { usuarioRouter };