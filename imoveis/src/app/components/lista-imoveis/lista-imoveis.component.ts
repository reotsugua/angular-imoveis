import { Component, inject, OnInit } from '@angular/core';
import { HousingLocation } from '../../model/housing-location';
import { HousingService } from '../../service/housing.service';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-imoveis',
  imports: [HousingLocationComponent],
  templateUrl: './lista-imoveis.component.html',
  styleUrl: './lista-imoveis.component.css'
})
export class ListaImoveisComponent implements OnInit{
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredListByCategory: HousingLocation[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  category: string = this.route.snapshot.data['tipo'];

  listClasses = 'd-flex overflow-auto gap-4 my-3 justify-content-center';


  ngOnInit(): void {
    // 1. Carrega os dados uma vez
    this.housingService.getAllHousingLocations().then(locations => {
      this.housingLocationList = locations;

      // 2. Depois, escuta mudanças na rota (caso mude)
      this.route.data.subscribe(data => {
        const category = data['tipo'];
        this.filteredListByCategory = this.housingLocationList.filter(
          (imovel) => imovel.categoria === category
        ).slice(0, 4);
      });


    });
  }


}
