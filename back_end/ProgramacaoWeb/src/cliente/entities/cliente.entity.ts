export class Cliente {
  id: string;
  nome: string;
  endereco: string;
  cnpj: string;
  telefone: string;
  email: string;

  constructor(
    id: string,
    nome: string,
    endereco: string,
    cnpj: string,
    telefone: string,
    email: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    this.cnpj = cnpj;
    this.telefone = telefone;
    this.email = email;
  }
  
}
