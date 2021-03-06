import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from '../../../core/services/countries/countries.service';
import { StoreService } from '../../../core/services/store/store.service';
@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    country: [null, Validators.required],
    city: [null, Validators.required],
  });

  countryAndCity: any = {};
  countryList: string[] = [];
  cityList: string[] = [];

  constructor(
    private countriesService: CountriesService,
    private storeService: StoreService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.countriesService.getAllCountries().subscribe(
      (data: any) => {
        console.log(data);
        this.countryAndCity = data;
        this.listCountry();
      },
      (err) => {
        console.error(err);
      }
    );
  }
  listCountry() {
    this.countryList = this.countryAndCity.data.map((country: any) => {
      return country.country;
    });
  }
  listCities(i: any) {
    this.addressForm.controls['city'].setValue(null);
    this.cityList = this.countryAndCity.data[i].cities;
  }
  onSubmit(): void {
    if (this.addressForm.valid) {
      this.storeService.createUser(this.addressForm.value);
    }
  }
}
