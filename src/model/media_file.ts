import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { string } from 'zod';

@Entity()
@Unique(['filename', 'Width224Filename'])
export class MediaFile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  filename!: string;

  @Column({nullable: true})
  Width224Filename!: string;

  @Column({nullable: true})
  Width1024Filename!: string;
}
