import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { createUserDto } from 'src/core';
import { AuthService } from 'src/services';


@ApiTags('Authorisation')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService,
        private jwtService: JwtService) { }

    @Post('/login')
    login(@Body() dto: createUserDto) {
        console.log(dto)
        return this.authService.login(dto);
    }

    @Post('/registration')
    register(@Body() dto: createUserDto) {
        return this.authService.register(dto);
    }
}