import { Body, Controller, Delete, Get, Param, Post, Put, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserEntity, createUserDto } from 'src/core';
import { UsersService } from 'src/services';

@ApiTags('Users')
@Controller('/users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @ApiOperation({ summary: "Creating user" })
    @ApiResponse({ status: 200, type: UserEntity })
    @Post()
    create(@Body() userDto: createUserDto) {
        return this.usersService.createUser(userDto);
    }

    // @Roles('admin', 'user')
    // @UseGuards(RoleGuard)
    @ApiOperation({ summary: "Getting users" })
    @ApiResponse({ status: 200, type: [UserEntity] })
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    //@Roles('admin')
    //@UseGuards(RoleGuard)
    @ApiOperation({ summary: "Getting user by id" })
    @ApiResponse({ status: 200, type: [UserEntity] })
    @Get('/:id')
    getOneById(@Param('id') id: string) {
        return this.usersService.getOneUserById(id);
    }

    //@Roles('admin')
    //@UseGuards(RoleGuard)
    @ApiOperation({ summary: "Getting user by email" })
    @ApiResponse({ status: 200, type: [UserEntity] })
    @Get('/:email')
    getOneByEmail(@Param('email') email: string) {
        return this.usersService.getUserByEmail(email);
    }

    //@Roles('admin')
    //@UseGuards(RoleGuard)
    @ApiOperation({ summary: "Deleting user" })
    @ApiResponse({ status: 200, type: [UserEntity] })
    @Delete('/:id')
    deleteOne(@Param('id') id: string) {
        return this.usersService.deleteOneUser(id);
    }

    //@Roles('Main admin')
    //@UseGuards(RoleGuard)
    //@ApiOperation({summary: "Adding role"})
    //@ApiResponse({status: 200})
    // @Put('/:id')
    // addRole(@Param('id') id: string, @Body() userDto: createUserDto) {
    //     return this.usersService.addRole(id, userDto);
    // }

    //@Roles('Main admin', 'admin')
    //@UseGuards(RoleGuard)
    //@ApiOperation({summary: "Ban user"})
    //@ApiResponse({status: 200})
    // @Put('/ban/:id')
    // addBan(@Param('id') id: string, @Body() reason: string) {
    //     return this.usersService.addBan(id, reason);
    // }
}
