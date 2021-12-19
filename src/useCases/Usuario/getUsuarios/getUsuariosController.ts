import {
  Request,
  Response,
} from 'express';
import { getRepository } from 'typeorm';

import { Usuario } from '../../../entity/Usuario';

export class getUsuariocontroller {
    async handle(req: Request, res: Response){
        const repoUsuario = getRepository(Usuario)

        const usuario = await repoUsuario.find({
          relations: ['personagens']
        })

        return res.json(usuario)
    }
}