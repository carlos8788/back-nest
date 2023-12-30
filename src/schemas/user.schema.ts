import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ObraSocial } from './obra_social.schema';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop({
    required: true,
    trim: true,
  })
  name: string;

  @Prop({
    trim: true,
    required: true,
  })
  last_name: string;

  @Prop({
    isInteger: true,
    trim: true,
    required: true,
  })
  age: number;

  @Prop({
    isInteger: true,
    trim: true,
    required: true,
  })
  tel: string;

  @Prop({
    trim: true,
  })
  fecha_nac: string;

  @Prop({
    trim: true,
    required: true,
    type: Types.ObjectId,
    ref: 'ObraSocial',
  })
  obra_social: ObraSocial | Types.ObjectId;

  @Prop({
    trim: true,
  })
  comment: string;

  @Prop({
    required: true,
    unique: true,
  })
  dni: number;

  @Prop({
    default: 'user',
  })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
