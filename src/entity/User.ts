import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({nullable:true})
    firstName: string;


}
