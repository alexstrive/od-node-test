import { DataSource } from 'typeorm';
import { Tag } from './entity/Tag';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'outside_digital',
  synchronize: true,
  logging: true,
  entities: [Tag, User],
  subscribers: [],
  migrations: [],
});
