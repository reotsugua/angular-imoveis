import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../model/housing-location';
import { HousingService } from '../../service/housing.service';
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: 'app-lista-imoveis',
  imports: [HousingLocationComponent],
  templateUrl: './lista-imoveis.component.html',
  styleUrl: './lista-imoveis.component.css'
})
export class ListaImoveisComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
    });
  }
}
