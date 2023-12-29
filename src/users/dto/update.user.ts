import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsNumber,
  MinLength,
} from 'class-validator';

export class UpdateUserDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  last_name: string;
  @IsNumber()
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  @MinLength(8)
  tel: string;
  @IsNotEmpty()
  fecha_nac: string;
  @IsNotEmpty()
  obra_social: string;
  @IsOptional()
  comment?: string;
  @IsNotEmpty()
  dni: number;
}
