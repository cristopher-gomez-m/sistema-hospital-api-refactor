import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('cita')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @ApiOperation({ summary: 'Crea una cita' })
  @ApiBody({
    type: CreateCitaDto,
    description: 'Datos para crear una nueva cita',
  })
  @ApiResponse({
    status: 201,
    description: 'La cita ha sido creada correctamente',
  })
  @Post()
  create(@Body() createCitaDto: CreateCitaDto) {
    return this.citaService.create(createCitaDto);
  }

  @ApiOperation({ summary: 'Lista de citas' })
  @ApiParam({ name: 'user_id', description: 'ID del usuario' })
  @ApiResponse({ status: 200, description: 'Lista de citas encontradas' })
  @Get(':user_id')
  findAllById(@Param('user_id') userId: number) {
    return this.citaService.findAllById(userId);
  }

  @ApiOperation({ summary: 'Busca la última cita' })
  @ApiParam({ name: 'id', description: 'ID de la cita' })
  @ApiResponse({ status: 200, description: 'La última cita encontrada' })
  @Get('last/:id')
  findLastOne(@Param('id') id: string) {
    return this.citaService.findLastOne(+id);
  }
}
