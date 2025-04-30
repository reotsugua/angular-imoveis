import { Component, input } from '@angular/core';
import { HousingLocation } from '../../model/housing-location';
import { HousingLocationComponent } from "../housing-location/housing-location.component";

@Component({
  selector: 'app-housing-location-list',
  imports: [HousingLocationComponent],
  templateUrl: './housing-location-list.component.html',
  styleUrl: './housing-location-list.component.css'
})
export class HousingLocationListComponent {
  housingLocationList  = input.required<HousingLocation[]>();
}
