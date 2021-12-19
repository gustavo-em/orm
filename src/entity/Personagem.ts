import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CategoriaPersonagem } from './CategoriaPersonagem';
import { Usuario } from './Usuario';

@Entity("personagem")
export class Personagem {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name: string;

    @ManyToOne(()=>Usuario, usuario => usuario.personagens)
    usuario: Usuario;

    @OneToOne(()=>CategoriaPersonagem)    
    @JoinColumn()
    categoria: CategoriaPersonagem;

}
