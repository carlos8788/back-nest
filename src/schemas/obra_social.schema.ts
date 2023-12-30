import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class ObraSocial {
  @Prop({
    required: true,
    trim: true,
    unique: true,
  })
  name: string;

  @Prop({
    trim: true,
  })
  address: string;

  @Prop({
    trim: true,
  })
  tel: string;
}

const ObraSocialSchema = SchemaFactory.createForClass(ObraSocial);
export { ObraSocial, ObraSocialSchema };
