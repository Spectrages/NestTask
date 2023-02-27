import { ApiProperty } from "@nestjs/swagger"
import { RoleEntity } from "../entities/role.entity"

export class createUserDto {
    @ApiProperty({ example: 'test@test.com', description: 'Email' })
    //@IsEmail(undefined, { message: 'Uncorrect email' })
    readonly email: string

    @ApiProperty({ example: '123456789', description: 'Password' })
    //@Length(6, 16, { message: 'Uncorrect length' })
    readonly password: string

    @ApiProperty({ example: 'SUPERADMIN/ADMIN/USER', description: 'User role' })
    readonly role: RoleEntity
}