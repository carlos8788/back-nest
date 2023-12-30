import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class ObraSocialDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @MinLength(8)
  tel: string;
  @IsNotEmpty()
  address: string;
}
