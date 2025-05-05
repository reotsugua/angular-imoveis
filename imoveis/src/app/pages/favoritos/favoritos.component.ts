import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../model/housing-location';
import { HousingService } from '../../service/housing.service';
import { HousingLocationListComponent } from '../../components/housing-location-list/housing-location-list.component';

@Component({
  selector: 'app-favoritos',
  imports: [HousingLocationListComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css',
})
export class FavoritosComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  favoritesLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then(
        (housingLocationList: HousingLocation[]) =>
          (this.favoritesLocationList = housingLocationList.filter(
            ({ favorite }) => favorite
          ))
      );
  }
}
