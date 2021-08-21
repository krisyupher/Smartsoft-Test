import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../../Material/material.module';
import { SharedModule } from '../../shared/shared.module';

import { AddressFormComponent } from './address-form/address-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [AddressFormComponent, NavigationComponent, TableComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
  ],
})
export class AdminModule {}
