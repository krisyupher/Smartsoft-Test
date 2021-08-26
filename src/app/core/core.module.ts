import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesService } from './services/countries/countries.service';
import { StoreService } from './services/store/store.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [CountriesService, StoreService, AuthService],
})
export class CoreModule {}
