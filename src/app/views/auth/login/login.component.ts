import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  FormLogin = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(event: Event): void {
    event.preventDefault();
    if (this.FormLogin.valid) {
      let aux = this.authService.AuthUser(
        this.FormLogin.value.email,
        this.FormLogin.value.password
      );
      if (aux) {
        this.router.navigate(['./home']);
      } else {
        alert('No es valido');
      }
    }
  }
}
