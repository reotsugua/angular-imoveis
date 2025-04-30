import { Component, input } from '@angular/core';
import { HousingLocation } from '../../model/housing-location';

@Component({
  selector: 'app-housing-location',
  imports: [],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  housingLocation = input.required<HousingLocation>();
}
