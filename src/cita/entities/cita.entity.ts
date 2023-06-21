import { User } from "../../user/entities/user.entity";
import { Consultorio } from "../../consultorios/entities/consultorio.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Cita {
    @ApiProperty({ description: 'ID de la cita', example: 1 })
    @PrimaryGeneratedColumn()
    id: number;
  
    @ApiProperty({ type: () => [Consultorio], description: 'Lista de consultorios asociados a la cita' })
    @ManyToMany(() => Consultorio)
    @JoinTable()
    consultorios: Consultorio[];
  
    @ApiProperty({ description: 'Fecha de la cita', example: '2023-06-15' })
    @Column({ type: 'varchar' })
    fecha: string;
  
    @ApiProperty({ description: 'Hora de la cita', example: '09:00 AM' })
    @Column({ type: 'varchar' })
    hora: string;
  
    @ApiProperty({ type: () => User, description: 'Usuario asociado a la cita' })
    @ManyToOne(() => User, user => user.citas)
    @JoinColumn({ name: 'user_id' })
    user: User;
  }