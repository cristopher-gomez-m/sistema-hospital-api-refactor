import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { UserService } from '../user/user.service';
import { HistorialClinicoService } from 'src/historial-clinico/historial-clinico.service';
import { hash } from 'bcrypt';
import { Rol } from "../rol/rol.entity";

@Injectable()
export class MedicosService {
  constructor(
    private userService: UserService,
    //private asd:HistorialClinicoService
  ){}
 async create(createMedicoDto: CreateMedicoDto) {
    const { email,password } = createMedicoDto;
      const usersExist = await this.userService.findOneByUsername(email);
      if (usersExist) throw new HttpException('El correo ya existe', HttpStatus.CONFLICT);
      const plainToHash = await hash(password, 10);
      const rol: Rol = { id: 2, nombre: 'medico' };
      createMedicoDto = { ...createMedicoDto, password: plainToHash,rol}; 
      return this.userService.create(createMedicoDto);
  }

  async findAll() {
    return await this.userService.findAllMedicos();
  }

  async findOne(id: number) {
    return await this.userService.findMedicoById(id);
  }

  async update(id: number, updateMedicoDto: UpdateMedicoDto) {
    try{
      let medico = await this.userService.findById(id);
      if (medico.rol.id !== 2) {
        throw new BadRequestException('Esa cuenta no pertenece a un medico');
      }
      Object.assign(medico, updateMedicoDto);
      return this.userService.updateMedico(id,medico);
      }catch(error){
        if (error.code === '23505') {
          throw new BadRequestException('El consultorio ya existe');
        }
      }
  }

  async remove(id: number) {
    let medico = await this.userService.findById(id);
    if (!medico) {
      throw new NotFoundException('Historial clínico no encontrado');
    }
    return this.userService.remove(id);
  }
}
