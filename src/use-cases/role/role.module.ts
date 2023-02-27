import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from 'src/controllers';
import { RoleEntity, UserEntity} from 'src/core';
import { RolesService } from 'src/services';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    TypeOrmModule.forFeature([RoleEntity, UserEntity])
  ],
  exports: [
    RolesService
  ]
})
export class RolesModule {}