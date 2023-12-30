import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsNumber,
  MinLength,
  Equals,
  IsMongoId,
} from 'class-validator';
import { UserRole } from '../roles';
import { Types } from 'mongoose';

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
  @IsOptional()
  fecha_nac?: string;
  @IsNotEmpty()
  @IsMongoId()
  obra_social: string | Types.ObjectId;
  @IsOptional()
  comment?: string;
  @IsNotEmpty()
  dni: number;
  @IsOptional()
  @Equals(UserRole.USER)
  role?: string;
}
