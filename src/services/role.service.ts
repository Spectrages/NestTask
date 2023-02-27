import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto, RoleEntity } from 'src/core';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {

    constructor(@InjectRepository(RoleEntity) private readonly roleRepository: Repository<RoleEntity>) {}

    async createRole(dto: CreateRoleDto) {
        const role = await this.roleRepository.create(dto);
        return this.roleRepository.save(role);
    }

    async getRoleByValue(value: string) {
        const role = await this.roleRepository.findOne({where: {value}})
        return role;
    }

}