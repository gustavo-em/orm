import {
  Request,
  Response,
} from 'express';
import { container } from 'tsyringe';

import { listPersonagensUseCase } from './listPersonagensUseCase';

export class listPersonagemController{
    async handle(req: Request, res: Response){

        //injeção de dependencia no service
        const pers = container.resolve(listPersonagensUseCase)

        //Service chamando repositorio
        let a = await pers.execute()

        /* const personagens = await repoPersonagem.find({
         
            relations: ['categoria', 'usuario']
        }); */

        return res.send(a)
    }
}