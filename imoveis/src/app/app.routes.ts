import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
import { HousingLocationListComponent } from './components/housing-location-list/housing-location-list.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details',
      },
    {
        path: 'location',
        component: HousingLocationComponent,
        title: 'HousingLocationComponent'
    },
    {
        path: 'list',
        component: HousingLocationListComponent,
        title: 'HousingLocationListComponent'
    }
];
