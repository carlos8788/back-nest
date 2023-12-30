import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObraSocial } from '../schemas/obra_social.schema'; // Asegúrate de que la ruta sea correcta
import { ObraSocialDTO } from './dto/obra_social';

@Injectable()
export class ObraSocialService {
  constructor(
    @InjectModel(ObraSocial.name) private obraSocialModel: Model<ObraSocial>,
  ) {}

  findAll() {
    return this.obraSocialModel.find();
  }

  async create(createObraSocial: ObraSocialDTO): Promise<ObraSocial> {
    const newObraSocial = new this.obraSocialModel(createObraSocial);
    return newObraSocial.save();
  }

  async findOne(id: string) {
    return this.obraSocialModel.findById(id);
  }

  async delete(id: string) {
    return this.obraSocialModel.findByIdAndDelete(id);
  }

  async update(
    id: string,
    updateObraSocial: ObraSocialDTO,
  ): Promise<ObraSocial> {
    return this.obraSocialModel.findByIdAndUpdate(id, updateObraSocial, {
      new: true,
    });
  }
}
