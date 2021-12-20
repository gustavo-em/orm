import 'reflect-metadata';

import { container } from 'tsyringe';
import { createConnection } from 'typeorm';

import { PersonagemRepository } from './repository/PersonagemRepository';

createConnection();

container.register("IPersonagemRepository",{useClass: PersonagemRepository})