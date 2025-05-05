import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RecomendacoesComponent } from "../../components/recomendacoes/recomendacoes.component";

@Component({
  selector: 'app-new-home',
  imports: [HeaderComponent, RecomendacoesComponent],
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.css'
})
export class NewHomeComponent {

}
