import { IsEmail, IsNotEmpty } from "class-validator";
import { Rol } from "../../rol/rol.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateMedicoDto {
    @ApiProperty({ description: 'Email del medico', example: 'example@gmail.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @ApiProperty({ description: 'Contraseña', example: 'password123' })
    @IsNotEmpty()
    password: string;
  
    @ApiProperty({ description: 'Rol del medico', example: 'admin' })
    @IsNotEmpty()
    rol: Rol;
  
    @ApiProperty({ description: 'Nombre del medico', example: 'John' })
    @IsNotEmpty()
    nombre: string;
  
    @ApiProperty({ description: 'Cedula del medico', example: '1234567890' })
    @IsNotEmpty()
    cedula: string;
  
    @ApiProperty({ description: 'Apellido del medico', example: 'Doe' })
    @IsNotEmpty()
    apellido: string;
  
    @ApiProperty({ description: 'Dirección del medico', example: '123 Street' })
    @IsNotEmpty()
    direccion: string;
}
