import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userStatus: boolean = false;

  constructor() {}

  AuthUser(email: string, password: string) {
    if (email === 'user' && password === '123456') {
      this.userStatus = true;
    }
    return this.userStatus;
  }
  logOut() {
    this.userStatus = false;
    return this.userStatus;
  }
  hasUser() {
    return this.userStatus;
  }
}
