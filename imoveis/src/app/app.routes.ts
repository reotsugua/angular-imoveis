import { Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { NewHomeComponent } from './pages/new-home/new-home.component';
import { ListaImoveisComponent } from './components/lista-imoveis/lista-imoveis.component';
import { CategoriaImovel } from './enums/categoria-imovel.enum';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: NewHomeComponent,
    title: 'LAR IDEAL',
    children: [
      { path: '', redirectTo: CategoriaImovel.Ofertas, pathMatch: 'full' },
      {
        path: CategoriaImovel.Ofertas,
        component: ListaImoveisComponent,
        title: 'Ofertas',
        data: { tipo: CategoriaImovel.Ofertas },
      },
      {
        path: CategoriaImovel.Novidades,
        loadComponent: () => import('./components/lista-imoveis/lista-imoveis.component').then(m => m.ListaImoveisComponent),
        title: 'Novidades',
        data: { tipo: CategoriaImovel.Novidades },
      },
      {
        path: CategoriaImovel.MaisBuscados,
        loadComponent: () => import('./components/lista-imoveis/lista-imoveis.component').then(m => m.ListaImoveisComponent),
        title: 'Mais buscados',
        data: { tipo: CategoriaImovel.MaisBuscados },
      },
    ],
  },
  { path: 'details/:id', component: DetailsComponent, title: 'Detalhes' },
  {
    path: 'alugar/:local/:tipoImovel',
    loadComponent: () => import('./pages/alugar/alugar.component').then(m => m.AlugarComponent),
    title: 'Alugar',
  },
];
