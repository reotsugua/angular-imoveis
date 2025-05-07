import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { RecomendacoesComponent } from "../../components/recomendacoes/recomendacoes.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { SectionComponent } from '../../components/section/section.component';

@Component({
  selector: 'app-new-home',
  imports: [HeaderComponent, RecomendacoesComponent, FooterComponent, SectionComponent],
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.css'
})
export class NewHomeComponent {

}
