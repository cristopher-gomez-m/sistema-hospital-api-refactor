import { Controller, Get, Post, Body,Param, Delete, Put } from '@nestjs/common';
import { HistorialClinicoService } from './historial-clinico.service';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { HistorialClinico } from './entities/historial-clinico.entity';

@Controller('historial-clinico')
export class HistorialClinicoController {
  constructor(private readonly historialClinicoService: HistorialClinicoService) { }

  @ApiOperation({ summary: 'Crear un historial clínico' })
  @ApiBody({ type: CreateHistorialClinicoDto })
  @ApiResponse({ status: 201, description: 'El historial clínico ha sido creado exitosamente', type: HistorialClinico })
  @Post()
  create(@Body() createHistorialClinicoDto: CreateHistorialClinicoDto) {
    return this.historialClinicoService.create(createHistorialClinicoDto);
  }

  @ApiOperation({ summary: 'Obtener todos los historiales clínicos' })
  @ApiResponse({ status: 200, description: 'Lista de todos los historiales clínicos', type: HistorialClinico })
  @Get()
  findAll() {
    return this.historialClinicoService.findAll();
  }
  @ApiOperation({ summary: 'Obtener un historial clínico por su ID' })
  @ApiParam({ name: 'id', description: 'ID del historial clínico' })
  @ApiResponse({ status: 200, description: 'El historial clínico encontrado', type: HistorialClinico })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historialClinicoService.findOne(+id);
  }
  @ApiOperation({ summary: 'Actualizar un historial clínico' })
  @ApiParam({ name: 'id', description: 'ID del historial clínico' })
  @ApiBody({ type: UpdateHistorialClinicoDto })
  @ApiResponse({ status: 200, description: 'El historial clínico ha sido actualizado exitosamente', type: HistorialClinico })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateHistorialClinicoDto: UpdateHistorialClinicoDto) {
    return this.historialClinicoService.update(+id, updateHistorialClinicoDto);
  }

  @ApiOperation({ summary: 'Eliminar un historial clínico' })
  @ApiParam({ name: 'id', description: 'ID del historial clínico' })
  @ApiResponse({ status: 200, description: 'El historial clínico ha sido eliminado exitosamente' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historialClinicoService.remove(+id);
  }
}
