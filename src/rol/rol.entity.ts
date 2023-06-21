import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rol{
    @ApiProperty({ example: 1, description: 'ID del rol' })
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty({ example: 'administrador', description: 'Nombre del rol' })
    @Column({ length: 45 })
    nombre: string;
}