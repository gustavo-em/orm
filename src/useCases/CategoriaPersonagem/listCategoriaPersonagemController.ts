import {
  Request,
  Response,
} from 'express';
import { getRepository } from 'typeorm';

import { CategoriaPersonagem } from '../../entity/CategoriaPersonagem';

export class listCategoriaPersonagemController {
      async handle(req: Request, res: Response){

  
          const repoCategoriaPersonagem = getRepository(CategoriaPersonagem)
          const categorias = await repoCategoriaPersonagem.find();
          console.log(categorias)

          return res.send(categorias)

      }
  }