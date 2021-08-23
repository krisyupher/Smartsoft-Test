import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CountriesService } from '../../../core/services/countries/countries.service';
import { StoreService } from '../../../core/services/store/store.service';
@Component({
  selector: 'app-address-form-edit',
  templateUrl: './address-form-edit.component.html',
  styleUrls: ['./address-form-edit.component.scss'],
})
export class AddressFormEditComponent implements OnInit {
  addressForm = this.fb.group({
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    country: [null, Validators.required],
    city: [null, Validators.required],
  });
  id: string = '';
  countryAndCity: any = {};
  countryList: string[] = [];
  cityList: string[] = [];

  constructor(
    private countriesService: CountriesService,
    private storeService: StoreService,
    private fb: FormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}
  ngOnInit() {
    this.countriesService.getAllCountries().subscribe(
      (data: any) => {
        this.countryAndCity = data;
        this.listCountry();
      },
      (err) => {
        console.error(err);
      }
    );
    this.activeRouter.params.subscribe((params: Params) => {
      this.id = params.id;
      this.addressForm.patchValue(this.storeService.getUser(this.id));
    });
  }
  listCountry() {
    this.countryList = this.countryAndCity.data.map((country: any) => {
      return country.country;
    });
    this.cityList.push(this.addressForm.get('city')?.value);
  }
  listCities(i: any) {
    this.addressForm.controls['city'].setValue(null);
    this.cityList = this.countryAndCity.data[i].cities;
  }
  onSubmit(): void {
    this.storeService.updateUser(this.id, this.addressForm.value);
  }
}
