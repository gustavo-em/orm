import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Personagem } from './Personagem';

@Entity("usuario")
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(()=> Personagem, personagem=>personagem.usuario)
    personagens: Personagem[];

}
