import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '@nestjs/common';
import { createUserDto, UserEntity } from 'src/core';
import { UsersService } from './users.service';
const bcrypt = require('bcrypt')

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService,
                private userService: UsersService ) {}

    async login(userDto: createUserDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }

    async register( userDto: createUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if(candidate) {
            throw new HttpException('User exist', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = bcrypt.hashSync(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword});
        return this.generateToken(user);
    }

    private async generateToken(user: UserEntity) {
    const payload = {email: user.email, id: user.id/*, role: user.role*/};
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: createUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if(user && passwordEquals) {
            return user;
        } else {
            throw new UnauthorizedException({message: 'Uncorrect login or password'})
        }
    }

}
