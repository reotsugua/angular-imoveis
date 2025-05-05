import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recomendacoes',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './recomendacoes.component.html',
  styleUrl: './recomendacoes.component.css'
})
export class RecomendacoesComponent {

}
