import { ApiProperty } from '@nestjs/swagger';
import { Cita } from '../../cita/entities/cita.entity';
import { HistorialClinico } from '../../historial-clinico/entities/historial-clinico.entity';
import { Rol } from '../../rol/rol.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Email del usuario', example: 'jon@hotmail.com' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ description: 'Constraseña del usuario', example: '12345' })
  @Column()
  password: string;

  @ApiProperty({ description: 'Rol del usuario', example: '1' })
  @ManyToOne(() => Rol)
  @JoinColumn({ name: 'rol_id' })
  rol: Rol;
  @ApiProperty({ description: 'Nombre del usuario', example: 'Carlos' })
  @Column({ length: 50 })
  nombre: string;

  @ApiProperty({ description: 'Apellido del usuario', example: 'Soler' })
  @Column({ length: 50 })
  apellido: string;

  @ApiProperty({ description: 'Cédula del usuario', example: '0932304282' })
  @Column({ length: 10 })
  cedula: string;

  @ApiProperty({ description: 'Dirección del usuario', example: 'La Alborada' })
  @Column({ length: 70 })
  direccion: string;

  @ApiProperty({ description: 'Historial clínico del usuario' })
  @OneToOne(() => HistorialClinico, { cascade: true })
  @JoinColumn()
  historial_clinico: HistorialClinico;

  @ApiProperty({ description: 'Lista de citas del usuario' })
  @OneToMany(() => Cita, cita => cita.user)
  citas: Cita[]
}
