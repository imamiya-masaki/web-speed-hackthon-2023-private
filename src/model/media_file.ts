import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['filename', 'Width224Filename'])
export class MediaFile {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  filename!: string;

  @Column({nullable: true})
  Width224Filename!: string;
}
