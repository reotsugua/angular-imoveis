import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { HousingLocationListComponent } from './components/housing-location-list/housing-location-list.component';
import { DetailsComponent } from './components/details/details.component';
import { NewHomeComponent } from './pages/new-home/new-home.component';
import { ListaImoveisComponent } from './components/lista-imoveis/lista-imoveis.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: NewHomeComponent, title: 'LAR IDEAL',
    children: [
      { path: '', redirectTo: 'ofertas', pathMatch: 'full' },
      { path: 'ofertas', component: ListaImoveisComponent, title: 'Ofertas' },
      { path: 'novidades', component: ListaImoveisComponent, title: 'Novidades'},
      { path: 'mais-buscados', component: ListaImoveisComponent, title: 'Mais buscados'}
    ],
  },
  { path: 'details/:id', component: DetailsComponent, title: 'Detalhes' },
  { path: 'alugar/:local/:tipoImovel', component: DetailsComponent, title: 'Alugar' },
];
