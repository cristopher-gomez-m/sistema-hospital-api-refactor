import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MedicosService } from './medicos.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

@Controller('medicos')
export class MedicosController {
  constructor(private readonly medicosService: MedicosService) { }

  @ApiOperation({ summary: 'Crear un nuevo médico' })
  @ApiBody({ type: CreateMedicoDto })
  @ApiResponse({ status: 201, description: 'Médico creado exitosamente', type: User })
  @Post()
  create(@Body() createMedicoDto: CreateMedicoDto) {
    return this.medicosService.create(createMedicoDto);
  }

  @ApiOperation({ summary: 'Obtener todos los médicos' })
  @ApiResponse({ status: 200, description: 'Médicos encontrados', type: User })
  @Get()
  findAll() {
    return this.medicosService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un médico por ID' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Médico encontrado', type: User })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicosService.findOne(+id);
  }
  @ApiOperation({ summary: 'Actualizar un médico' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiBody({ type: UpdateMedicoDto })
  @ApiResponse({ status: 200, description: 'Médico actualizado exitosamente' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateConsultorioDto: UpdateMedicoDto) {
    return this.medicosService.update(+id, updateConsultorioDto);
  }

  @ApiOperation({ summary: 'Eliminar un médico' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiResponse({ status: 200, description: 'Médico eliminado exitosamente' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicosService.remove(+id);
  }
}
