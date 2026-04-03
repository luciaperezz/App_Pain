import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formlogin = {
    user: "",
    password: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {}

  iniciarSesion() {
    const nombreUsuario = this.formlogin.user; // 👈 tomar del input del login

    // Navegar a Home enviando el nombre como queryParam
    this.router.navigate(['/home'], { queryParams: { userNombre: this.formlogin.user } });
  }


}