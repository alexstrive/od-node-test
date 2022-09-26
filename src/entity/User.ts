import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Length } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @Column()
  @Length(1, 100)
  email: string;

  @Column()
  @Length(8, 100)
  password: string; // password: должен содержать как минимум одну цифру, одну заглавную и одну строчную буквы

  @Column()
  @Length(1, 30)
  nickname: string;
}
