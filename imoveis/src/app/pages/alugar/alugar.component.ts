import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../model/housing-location';
import { HousingService } from '../../service/housing.service';
import { HousingLocationListComponent } from '../../components/housing-location-list/housing-location-list.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-alugar',
  imports: [HousingLocationListComponent, SearchComponent],
  templateUrl: './alugar.component.html',
  styleUrl: './alugar.component.css'
})
export class AlugarComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string){
    if (!text)  {
      this.filteredLocationList = this.housingLocationList;
      return;
    };

    this.filteredLocationList = this.housingLocationList.filter(({city}) => 
      city.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
  }
}
