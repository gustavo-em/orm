import {
  Request,
  Response,
} from 'express';
import { getRepository } from 'typeorm';

import { CategoriaPersonagem } from '../../../entity/CategoriaPersonagem';
import { Personagem } from '../../../entity/Personagem';
import { Usuario } from '../../../entity/Usuario';

export class createPersonagemController{
    async handle(req: Request, res: Response){
        const { name } = req.body
        const { id_usuario } = req.headers

        const repoPersonagem = getRepository(Personagem)
        const repoUsuario = getRepository(Usuario)
        const usuario = await repoUsuario.findOne({
            where: { id: id_usuario},
        })

        const repoCategoriaPersonagem = getRepository(CategoriaPersonagem)
        const categoria = await repoCategoriaPersonagem.findOne({
            where: {name: "Anime"}
        })


        let personagem = new Personagem();
        personagem.name = name;
        personagem.categoria = categoria
        personagem.usuario = usuario;
        let back = await repoPersonagem.save(personagem)
        

        return res.send(back)

    }
}