import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity, createUserDto } from 'src/core';
import { RolesService } from './role.service';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) 
    private readonly userRepository: Repository<UserEntity>,
    ) {}

    createUser = async (dto: createUserDto) => {
        const user = await this.userRepository.create(dto);
        return this.userRepository.save(user);
    }

    getAllUsers = async () => await this.userRepository.find();

    getOneUserById = async (id: string) => await this.userRepository.findOneBy({id});

    getUserByEmail = async (email: string) => await this.userRepository.findOneBy({email});

    deleteOneUser = async (id: string) => await this.userRepository.delete({id});

    // addRole = async (id: string, dto: createUserDto) => {
    //     const user = await this.userRepository.findOneBy({id});
    //     if(!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    //     user.role = dto.role;
    //     return this.userRepository.save(user);
    // }

    // addBan = async (id: string, reason: string) => {
    //     const user = await this.userRepository.findOneBy({id});
    //     if(!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    //     user.ban === false ? user.ban = true : user.ban = false;
    //     user.ban === true ? 
    //         user.banReason = Object.values(reason).toString() :
    //         user.banReason = '';
    //     return this.userRepository.save(user);
    // }
}
