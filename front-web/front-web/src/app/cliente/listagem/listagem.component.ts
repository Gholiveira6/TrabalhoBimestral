import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class ListagemComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private ClienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarCliente();
  }

  carregarCliente(): void {
    this.ClienteService.listarClientes().subscribe((res) => {
      this.clientes = res;
    });
  }
}
