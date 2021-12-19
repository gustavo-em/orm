import {
  Request,
  Response,
} from 'express';
import { getRepository } from 'typeorm';

import { Personagem } from '../../../entity/Personagem';

export class listPersonagemController{
    async handle(req: Request, res: Response){
        const repoPersonagem = getRepository(Personagem)


        const personagens = await repoPersonagem.find({
         
            relations: ['categoria', 'usuario']
        });

        return res.send(personagens)
    }
}