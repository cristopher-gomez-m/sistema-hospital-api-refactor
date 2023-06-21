import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/register-user.dto';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Equal, In, Not } from 'typeorm';
import { HistorialClinico } from '../historial-clinico/entities/historial-clinico.entity';
import { HistorialClinicoService } from '../historial-clinico/historial-clinico.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateMedicoDto } from '../medicos/dto/update-medico.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
    private historialService: HistorialClinicoService,
    //private historialRepository: HistorialClinicoRepository
  ) {}
  async create(createUserDto: CreateUserDto) {
    
    const usuario = this.userRepository.create(createUserDto);
  
    const historialClinico = new HistorialClinico();
    await this.historialService.save(historialClinico);
    usuario.historial_clinico = historialClinico;
    await this.userRepository.save(usuario);
    return usuario;
    
  }

  findByUsername(email: string) {
    return this.userRepository.find({
      relations: ['rol'],
      where: { email },
    });
  }

  findById(id: number): Promise<User> {
    return this.userRepository.findOne({
      relations: ['rol','historial_clinico'],
      where: { id },
    });
  }

  findMedicoById(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id },
    });
  }

  findAllPacientes() {
    return this.userRepository.find({
      where: { rol:Equal(1) },
    });
  }

  findAllMedicos() {
    return this.userRepository.find({
      where: { rol: Equal(2) },
    });
  }
  
  async findUsuariosSinConsultorio(consultorioIds: number[]){
    return await this.userRepository.find({
      where: {
        id: Not(In(consultorioIds)),
        rol: Equal(2),
      },
    });
  }

  findOneByUsername(email: string) {
    return this.userRepository.findOne({ 
      relations: ['rol'],
      where: { email } });
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({ 
      relations: ['historial_clinico'],
      where: { id }
    });
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }
    await this.userRepository.remove(user);
    await this.historialService.remove(user.historial_clinico.id);
  }

 


  async updateNombreYApellido(user_id: number,updateUserDto:UpdateUserDto): Promise<User> {
    // Obtener el usuario de la base de datos
    const user = await this.userRepository.findOne(
      { 
        where: { id:user_id }
      }
    );

    // Realizar la actualización del nombre y apellido
    user.nombre = updateUserDto.nombre;
    user.apellido = updateUserDto.apellido;

    // Guardar los cambios en la base de datos
    const updatedUser = await this.userRepository.save(user);

    return updatedUser;
  }

  async updateMedico( id: number,updateMedicoDto: UpdateMedicoDto){
    return await this.userRepository.update(id,updateMedicoDto);
  }
}
