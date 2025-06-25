import { Injectable } from '@angular/core';
import { HousingLocation } from '../model/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // readonly url = 'http://localhost:3000/locations';
  readonly url = 'https://reotsugua.github.io/angular-imoveis/server/db.json';

  protected housingLocationList: HousingLocation[] = [];

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    // this.housingLocationList = (await data.json()) ?? [];

    const {locations} = (await data.json()) ?? [];
    
    this.housingLocationList = locations;
    
    return this.housingLocationList;
  }
  
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id == id);
  }


  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
