import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from '../../models/userInterface.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private Users: UserInterface[] = [
    {
      company: 'ETB',
      firstName: 'Juan',
      lastName: 'Rodriguez',
      country: 'Andorra',
      city: 'Sispony',
    },
    {
      company: 'Teams',
      firstName: 'Pedro',
      lastName: 'Sanchez',
      country: 'Dominica',
      city: 'Saint Patrick',
    },
  ];
  constructor(private router: Router) {}
  createUser(userInterface: UserInterface) {
    this.Users.push(userInterface);
    this.router.navigate(['./admin/list']);
  }
  getAllUsers() {
    return this.Users;
  }
  deleteUser(id: string) {
    this.Users.splice(parseInt(id), 1);
  }
  getUser(id: string) {
    return this.Users[parseInt(id)];
  }
  updateUser(id: string, userPartial: UserInterface) {
    this.Users[parseInt(id)] = userPartial;
    this.router.navigate(['./admin/list']);
  }
}
