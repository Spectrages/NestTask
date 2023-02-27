import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/controllers/auth.controller';
import { UsersModule } from '..';
import { AuthService } from 'src/services';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    forwardRef(() =>  UsersModule),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET_KEY',
      signOptions: {
        expiresIn: '24h'
      }
    })
  ],
  exports: [
    AuthService,
    JwtModule
  ]
})
export class AuthModule {}