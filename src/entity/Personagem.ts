import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Usuario } from './Usuario';

@Entity("personagem")
export class Personagem {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name: string;

    @ManyToOne(()=>Usuario, usuario => usuario.personagens)
    usuario: Usuario;

}
