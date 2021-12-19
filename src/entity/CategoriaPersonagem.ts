import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity("categoria_personagem")
export class CategoriaPersonagem {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name: string;

}