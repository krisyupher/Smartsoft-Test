import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormEditComponent } from './address-form-edit/address-form-edit.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'table',
      },
      {
        path: 'create',
        component: AddressFormComponent,
      },
      {
        path: 'edit/:id',
        component: AddressFormEditComponent,
      },
      {
        path: 'list',
        component: TableComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'create',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
