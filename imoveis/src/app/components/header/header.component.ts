import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private router: Router = inject(Router);

  formValido = false;

  buscar(local: string, tipoImovel: string) {
    this.router.navigate(['/alugar', local, tipoImovel]);
  }

  checkValid(inputValue: string, SelectValue: string) {    
    this.formValido = !!inputValue && !!SelectValue;
  }
}
