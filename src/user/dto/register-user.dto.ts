import { IsEmail, IsNotEmpty } from "class-validator";
import { Rol } from '../../rol/rol.entity';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiProperty({ description: 'Nombre del usuario', example: 'jon@hotmail.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @ApiProperty({ description: 'Contraseña del usuario', example: 'secretpassword' })
    @IsNotEmpty()
    password: string;


    @ApiProperty({ description: 'Rol del usuario', example: '1'})
    @IsNotEmpty()
    rol: Rol;

    @ApiProperty({ description: 'Nombre del usuario', example: 'John' })
    @IsNotEmpty()
    nombre: string;

    @ApiProperty({ description: 'Cédula del usuario', example: '1234567890' })
    @IsNotEmpty()
    cedula: string;
  
    @ApiProperty({ description: 'Apellido del usuario', example: 'Doe' })
    @IsNotEmpty()
    apellido: string;
  
    @ApiProperty({ description: 'Dirección del usuario', example: '123 Main St' })
    @IsNotEmpty()
    direccion: string;
}
