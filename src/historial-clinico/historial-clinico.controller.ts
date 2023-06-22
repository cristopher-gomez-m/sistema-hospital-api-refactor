import { Controller, Get, Body, Param, Delete, Put } from '@nestjs/common';
import { HistorialClinicoService } from './historial-clinico.service';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { HistorialClinico } from './entities/historial-clinico.entity';

@Controller('historial-clinico')
export class HistorialClinicoController {
  constructor (private readonly historialClinicoService: HistorialClinicoService) { }


  @ApiOperation({ summary: 'Obtener un historial clínico por su ID' })
  @ApiParam({ name: 'id', description: 'ID del historial clínico' })
  @ApiResponse({ status: 200, description: 'El historial clínico encontrado', type: HistorialClinico })
  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.historialClinicoService.findOne(+id);
  }

  @ApiOperation({ summary: 'Actualizar un historial clínico' })
  @ApiParam({ name: 'id', description: 'ID del historial clínico' })
  @ApiBody({ type: UpdateHistorialClinicoDto })
  @ApiResponse({ status: 200, description: 'El historial clínico ha sido actualizado exitosamente', type: HistorialClinico })
  @Put(':id')
  update (@Param('id') id: string, @Body() updateHistorialClinicoDto: UpdateHistorialClinicoDto) {
    return this.historialClinicoService.update(+id, updateHistorialClinicoDto);
  }

  @ApiOperation({ summary: 'Eliminar un historial clínico' })
  @ApiParam({ name: 'id', description: 'ID del historial clínico' })
  @ApiResponse({ status: 200, description: 'El historial clínico ha sido eliminado exitosamente' })
  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.historialClinicoService.remove(+id);
  }
}
