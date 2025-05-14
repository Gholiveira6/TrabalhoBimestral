import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'prisma/prisma.service';
import { NotFoundError } from 'rxjs';
import { Cliente } from '@prisma/client';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(cliente: any): Cliente {
    return {
      id: cliente.id,
      nome: cliente.nome,
      endereco: cliente.endereco,
      cnpj: cliente.cnpj,
      telefone: cliente.telefone,
      email: cliente.email,
    };
  }

  async create(createClienteDto: CreateClienteDto) {
    const cliente = await this.prisma.cliente.create({
      data: {
        nome: createClienteDto.nome,
        endereco: createClienteDto.endereco,
        cnpj: createClienteDto.cnpj,
        telefone: createClienteDto.telefone,
        email: createClienteDto.email,
      },
    });
    return this.mapToEntity(cliente);
  }

  async findAll() {
    return this.prisma.cliente.findMany();
  }

  async findOne(id: string) {
    return this.prisma.cliente.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const clienteExistente = await this.prisma.cliente.findUnique({
      where: { id },
    });

    if (!clienteExistente) {
      throw new NotFoundException(`Cliente com ID ${id} não encontrado`);
    }

    const clienteAtualizado = await this.prisma.cliente.update({
      where: { id },
      data: {
        nome: updateClienteDto.nome,
        endereco: updateClienteDto.endereco,
        cnpj: updateClienteDto.cnpj,
        telefone: updateClienteDto.telefone,
        email: updateClienteDto.email,
      },
    });

    return this.mapToEntity(clienteAtualizado);
  }

  async remove(id: string) {
    return this.prisma.cliente.delete({
      where: { id },
    });
  }
}
