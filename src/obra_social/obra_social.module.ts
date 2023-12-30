import { Module } from '@nestjs/common';
import { ObraSocialService } from './obra_social.service';
import { ObraSocialController } from './obra_social.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ObraSocial, ObraSocialSchema } from 'src/schemas/obra_social.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ObraSocial.name, schema: ObraSocialSchema },
    ]),
  ],
  providers: [ObraSocialService],
  controllers: [ObraSocialController],
})
export class ObraSocialModule {}
