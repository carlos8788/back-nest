import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

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
    default: false,
  })
  age: number;

  @Prop({
    trim: true,
    required: true,
  })
  tel: string;

  @Prop({
    trim: true,
    required: true,
  })
  fecha_nac: string;

  @Prop({
    trim: true,
    required: true,
  })
  obra_social: string;

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
