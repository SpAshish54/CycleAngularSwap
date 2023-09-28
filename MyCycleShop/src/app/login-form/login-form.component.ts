import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private authService: AuthService) {}

  login(username: any, password: any) : void {
    this.authService.login(username, password).subscribe();
    window.location.href = "http://localhost:4200";
  }
}
