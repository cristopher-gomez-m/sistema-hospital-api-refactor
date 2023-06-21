import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCitaDto {
    @ApiProperty({ description: 'ID del usuario', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    userId: number;
  
    @ApiProperty({ description: 'ID del consultorio', example: 1 })
    @IsNotEmpty()
    @IsNumber()
    consultorioId: number;
  
    @ApiProperty({ description: 'Fecha de la cita', example: '2023-06-15' })
    @IsNotEmpty()
    @IsDateString()
    fecha: string;
  
    @ApiProperty({ description: 'Hora de la cita', example: '09:00 AM' })
    @IsNotEmpty()
    @IsString()
    hora: string;
  }
