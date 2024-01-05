import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { ObraSocial } from './obra_social.schema';

@Schema({
  timestamps: true,
})
export class Turno extends Document {
  @Prop({
    type: String,
    required: true,
  })
  horario: string;

  @Prop({
    type: Date,
    required: true,
  })
  fecha: Date;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  user: User | Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'ObraSocial',
    required: true,
  })
  obraSocial: ObraSocial | Types.ObjectId;

  @Prop({
    type: String,
    required: true,
  })
  celularPaciente: string;
}

export const TurnoSchema = SchemaFactory.createForClass(Turno);
