import {
  Request,
  Response,
} from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../entity/User';

require('uuid')
export default class createUserController {
    async handle(req: Request, res: Response){
        
        
        const repoUser = getRepository(User);

        const user = new User();
        user.firstName = 'gustavo';
        user.id = 1

        const userReturn = await repoUser.save(user)
        
      
        res.send(userReturn)
        
    }
}