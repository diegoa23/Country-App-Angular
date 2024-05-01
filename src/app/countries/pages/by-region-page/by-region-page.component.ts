import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor( private countriesServices: CountriesService ) {}

  searchByRegion( region:string ): void {

    this.countriesServices.searchRegion( region )
      .subscribe( countries => {
        this.countries = countries;
      });

  }
}
