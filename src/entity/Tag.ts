import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  creator: string;

  @Column()
  name: string;

  @Column()
  sortOrder: number;
}
