import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  cliente: Cliente = {
    id: '',
    nome: '',
    endereco: '',
    cnpj: '',
    telefone: '',
    email: '',
  };

  constructor(
    private clienteService: ClienteService,
    private router: Router,
  ) {}

  salvar() {
    this.clienteService.cadastrarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/listagem']);
    });
  }
}
