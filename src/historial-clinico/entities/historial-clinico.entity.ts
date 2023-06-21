import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HistorialClinico {


    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty({ example: 25, description: 'Edad del paciente', nullable: true })
    @Column({ nullable: true })
    edad: number;
  
    @ApiProperty({ example: 170, description: 'Altura del paciente', nullable: true })
    @Column({ nullable: true })
    altura: number;
  
    @ApiProperty({ example: 70, description: 'Peso del paciente', nullable: true })
    @Column({ nullable: true })
    peso: number;
  
    @ApiProperty({ example: 23, description: 'Masa corporal del paciente', nullable: true })
    @Column({ nullable: true })
    masa_corporal: number;
  
    @ApiProperty({ example: 37, description: 'Temperatura del paciente', nullable: true })
    @Column({ nullable: true })
    temperatura: number;
  
    @ApiProperty({ example: 18, description: 'Frecuencia respiratoria del paciente', nullable: true })
    @Column({ nullable: true })
    frecuencia_respiratoria: number;
  
    @ApiProperty({ example: 20, description: 'Presión arterial del paciente', nullable: true })
    @Column({ nullable: true })
    presion_arterial: number;
  
    @ApiProperty({ example: 70, description: 'Frecuencia cardíaca del paciente', nullable: true })
    @Column({ nullable: true })
    frecuencia_cardiaca: number;
  
    @ApiProperty({ example: true, description: 'Indicador de diabetes del paciente', nullable: true })
    @Column({ nullable: true })
    diabetes: boolean;
  
    @ApiProperty({ example: 'Descripción de diabetes', description: 'Descripción de diabetes del paciente', nullable: true })
    @Column({ nullable: true, type: "text" })
    diabetes_descripcion: string;
  
    @ApiProperty({ example: true, description: 'Indicador de afección tiroidea del paciente', nullable: true })
    @Column({ nullable: true })
    tiroideas: boolean;
  
    @ApiProperty({ example: 'Descripción de afección tiroidea', description: 'Descripción de afección tiroidea del paciente', nullable: true })
    @Column({ nullable: true, type: "text" })
    tiroideas_descripcion: string;
  
    @ApiProperty({ example: true, description: 'Indicador de hipertensión del paciente', nullable: true })
    @Column({ nullable: true })
    hipertension: boolean;
  
    @ApiProperty({ example: 'Descripción de hipertensión', description: 'Descripción de hipertensión del paciente', nullable: true })
    @Column({ nullable: true, type: "text" })
    hipertension_descripcion: string;
  
    @ApiProperty({ example: true, description: 'Indicador de cardiopatía del paciente', nullable: true })
    @Column({ nullable: true })
    cardiopatia: boolean;
  
    @ApiProperty({ example: 'Descripción de cardiopatía', description: 'Descripción de cardiopatía del paciente', nullable: true })
    @Column({ nullable: true, type: "text" })
    cardiopatia_descripcion: string;
  
    @ApiProperty({ example: true, description: 'Indicador de traumatismo del paciente', nullable: true })
    @Column({ nullable: true })
    traumatismo: boolean;
  
    @ApiProperty({ example: 'Descripción de traumatismo', description: 'Descripción de traumatismo del paciente', nullable: true })
    @Column({ nullable: true, type: "text" })
    traumatismo_descripcion: string;
  
    @ApiProperty({ example: true, description: 'Indicador de cáncer del paciente', nullable: true })
    @Column({ nullable: true })
    cancer: boolean;
  
    @ApiProperty({ example: 'Descripción de cáncer', description: 'Descripción de cáncer del paciente', nullable: true })
    @Column({ nullable: true, type: "text" })
    cancer_descripcion: string;
  
    @ApiProperty({ example: true, description: 'Indicador de otros problemas del paciente', nullable: true })
    @Column({ nullable: true })
    otros: boolean;
  
    @ApiProperty({ example: 'Descripción de otros problemas', description: 'Descripción de otros problemas del paciente', nullable: true })
    @Column({ nullable: true, type: "text" })
    otros_descripcion: string;
}
