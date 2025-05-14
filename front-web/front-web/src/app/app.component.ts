import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListagemComponent } from './cliente/listagem/listagem.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front-web';
}
