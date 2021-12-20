import {
  getRepository,
  Repository,
} from 'typeorm';

import { Personagem } from '../entity/Personagem';

export class PersonagemRepository {
    private repoPersonagem: Repository<Personagem>
    constructor() {
        this.repoPersonagem = getRepository(Personagem)
    }

    async todos_personagens(){

        let personagens = await this.repoPersonagem.find()

        return personagens;
    }
}