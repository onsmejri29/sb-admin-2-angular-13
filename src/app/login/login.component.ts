import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password!: string;
  username!: string;

  admin: Admin = new Admin();

  constructor(
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loginService.logout();
  }

  login() {
    this.admin.email = this.username;
    this.admin.password = this.password;

    if (!this.username) {
      Swal.fire({
        icon: 'error',
        title: 'Veulliez saisir votre username !',
        timer: 1500,
        showConfirmButton: false,
      })
    } else if (!this.password) {
      Swal.fire({
        icon: 'error',
        title: 'Veulliez saisir votre Mot de passe !',
        timer: 1500,
        showConfirmButton: false,
      })
    } else {
      this.authService.login(this.admin).subscribe(

        async (res) => {
    
          this.loginService.login();
          this.router.navigate(['/']);
          
          return true;
        },

     error => {
        Swal.fire('error', 'Vérifier vos données !', 'error');
      })
    }

  }

}
