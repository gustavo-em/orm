import {
  Request,
  Response,
} from 'express';
import { getRepository } from 'typeorm';

import { Usuario } from '../../../entity/Usuario';

export class createUsuarioController {
    async handle(req: Request, res: Response){
        const { name } = req.body
        

         const repoUsuario = getRepository(Usuario)

        const usuario = new Usuario();
        usuario.name = name;

        const back = await repoUsuario.save(usuario)

        return res.json(back)

        
    }   
}