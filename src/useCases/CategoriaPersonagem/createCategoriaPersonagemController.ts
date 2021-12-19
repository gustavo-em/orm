import {
  Request,
  Response,
} from 'express';
import { getRepository } from 'typeorm';

import { CategoriaPersonagem } from '../../entity/CategoriaPersonagem';

export class createCategoriaPersonagemController {
    async handle(req: Request, res: Response){
        const { name } = req.body

        const repoCategoriaPersonagem = getRepository(CategoriaPersonagem)

        const categoria = new CategoriaPersonagem()
        categoria.name = name;


        const back = await repoCategoriaPersonagem.save(categoria)
    
        return res.send(back)
    }
}