import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  ConflictException,
  HttpCode,
} from '@nestjs/common';
import { ObraSocialService } from './obra_social.service';
import { ObraSocialDTO } from './dto/obra_social';

@Controller('obra-social')
export class ObraSocialController {
  constructor(private obService: ObraSocialService) {}

  @Get()
  async findAll() {
    return await this.obService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const obraSocial = await this.obService.findOne(id);
    if (!obraSocial) throw new NotFoundException('Obra social not found');
    return obraSocial;
  }

  @Post()
  async create(@Body() obraSocial: ObraSocialDTO) {
    try {
      return await this.obService.create(obraSocial);
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException(
          'Error creating Obra social: Obra social already exists',
        );
      }
      throw error;
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() obraSocial: ObraSocialDTO) {
    const obraSocialEdit = await this.obService.update(id, obraSocial);
    if (!obraSocialEdit) throw new NotFoundException('Obra social not found');
    return obraSocialEdit;
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const obraSocial = await this.obService.delete(id);
    if (!obraSocial) throw new NotFoundException('Obra social not found');
    return obraSocial;
  }
}
