import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinTable, JoinColumn, ManyToMany } from 'typeorm';
import { RoleEntity } from './role.entity';


@Entity()
export class UserEntity {

  @ApiProperty({ example: 1, description: 'Unique param' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'test@test.com', description: 'Email' })
  @PrimaryColumn({ unique: true })
  email: string;

  @ApiProperty({ example: '123456789', description: 'Password' })
  @PrimaryColumn()
  password: string;

  @ApiProperty({ example: "true", description: 'Ban' })
  @Column({ default: false })
  ban: boolean;

  @ApiProperty({ example: "Crime", description: 'Ban reason' })
  @Column({ default: '' })
  banReason: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => RoleEntity, role => role.user)
  @JoinColumn({
    name: 'role'
  })
  role: RoleEntity;
}