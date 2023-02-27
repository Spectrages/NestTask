import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';


@Entity()
export class RoleEntity {

  @ApiProperty({ example: 1, description: 'Unique param' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({example: 'ADMIN', description: 'Role Unique Value'})
  @PrimaryColumn({ unique: true })
  value: string;

  @ApiProperty({ example: 'Administrator', description: 'Role Description' })
  @Column({ default: false })
  description: string;

  @ManyToOne(() => UserEntity, user => user.role)
  user: UserEntity;
}