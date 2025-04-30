import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../../model/housing-location';
import { HousingService } from '../../service/housing.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocationId: number = Number(this.route.snapshot.params['id']);

  housingLocation: HousingLocation | undefined = this.housingService.getHousingLocationById(this.housingLocationId);
}
