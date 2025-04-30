import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../model/housing-location';
import { HousingService } from '../../service/housing.service';
import { HousingLocationListComponent } from "../../components/housing-location-list/housing-location-list.component";


@Component({
  selector: 'app-home',
  imports: [HousingLocationListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.allHousingLocations;
  }
}
