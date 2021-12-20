import { Personagem } from '../../entity/Personagem';

export interface IPersonagemRepository {

    todos_personagens(): Promise<Personagem[]>
}