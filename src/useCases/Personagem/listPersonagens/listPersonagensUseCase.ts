import {
  inject,
  injectable,
} from 'tsyringe';

import {
  IPersonagemRepository,
} from '../../../repository/interfaces/IPersonagemRepository';

@injectable()
export class listPersonagensUseCase {
    constructor(@inject('IPersonagemRepository') private repository: IPersonagemRepository){}

    async execute(){
        let personagens = await this.repository.todos_personagens()

        return personagens
    }
}