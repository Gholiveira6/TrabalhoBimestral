import { isString, IsString } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  id: string;
  @IsString()
  nome: string;
  @IsString()
  endereco: string;
  @IsString()
  cnpj: string;
  @IsString()
  telefone: string;
  @IsString()
  email: string;
}
