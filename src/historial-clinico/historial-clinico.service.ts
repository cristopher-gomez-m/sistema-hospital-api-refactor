import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HistorialClinico } from './entities/historial-clinico.entity';
import { HistorialClinicoRepository } from './historial-clinico.repository';
//import { UserService } from 'src/user/user.service';

@Injectable()
export class HistorialClinicoService {
  constructor(
    @InjectRepository(HistorialClinico)
    private historialRepository: HistorialClinicoRepository,
    //private asd: UserService
  ) {}
  create(createHistorialClinicoDto: CreateHistorialClinicoDto) {
    return 'This action adds a new historialClinico';
  }

  findAll() {
    return `This action returns all historialClinico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historialClinico`;
  }

  async update(id: number, updatedData: Partial<HistorialClinico>) {
    const historialClinico = await this.historialRepository.findOne(
      {
        where: { id }
      }
    );
    if (!historialClinico) {
      throw new NotFoundException('Historial clínico no encontrado');
    }
    Object.assign(historialClinico, updatedData);
    return this.historialRepository.save(historialClinico);
  }

  async remove(id: number) {
    const historialClinico = await this.historialRepository.findOne({
      where: { id }
    });
    if (!historialClinico) {
      throw new NotFoundException('Historial clínico no encontrado');
    }
    return this.historialRepository.remove(historialClinico);
  }

  async save(historial:CreateHistorialClinicoDto){
     await this.historialRepository.save(historial);
  }
}
