import { Controller,  Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { CreateUserDto } from 'src/user/dto/register-user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  
  @ApiOperation({ summary: 'Registra un usuario' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'El usuario ha sido registrado exitosamente' })
  register(@Body() loginBody: CreateUserDto) {
    return this.authService.register(loginBody);
  }

  @Post('login')
  
  @ApiOperation({ summary: 'Inicio de sesión' })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({ status: 200, description: 'Inicio de sesión exitoso', type: String })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas' })
  login(@Body() loginBody: LoginUserDto) {
    return this.authService.login(loginBody);
  }
}
