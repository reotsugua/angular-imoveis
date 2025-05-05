import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { HousingLocationListComponent } from './components/housing-location-list/housing-location-list.component';
import { DetailsComponent } from './components/details/details.component';
import { NewHomeComponent } from './pages/new-home/new-home.component';

export const routes: Routes = [
    {
        path: '',
        component: NewHomeComponent,
        title: 'LAR IDEAL'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Detalhes',
    },
    {
        path: 'alugar/:local/:tipoImovel',
        component: DetailsComponent,
        title: 'Alugar',
    }
];
