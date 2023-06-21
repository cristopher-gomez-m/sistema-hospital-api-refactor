import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class LoginUserDto {
    @ApiProperty({ description: 'Correo electrónico del usuario', example: 'johndoe@example.com' })
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @ApiProperty({ description: 'Contraseña del usuario' })
    @IsNotEmpty()
    password: string;
}