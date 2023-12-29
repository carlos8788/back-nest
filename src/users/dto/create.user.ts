import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsNumber,
  MinLength,
  Equals,
} from 'class-validator';
import { UserRole } from '../roles';

export class CreateUserDTO {
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
  @IsOptional()
  @Equals(UserRole.USER)
  role?: string;
}
