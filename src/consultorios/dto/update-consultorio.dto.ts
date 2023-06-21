import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateConsultorioDto  {
    @ApiProperty({ example: 'Especialidad del consultorio', description: 'Especialidad del consultorio', required: true })
    @IsNotEmpty({ message: 'La especialidad no debe estar vacía' })
    especialidad: string;
  
    @ApiProperty({ example: 1, description: 'ID del médico', required: true })
    @IsNotEmpty({ message: 'El médico no debe estar vacío' })
    medico_id: number;
  }