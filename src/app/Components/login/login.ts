import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Core/services/loginService/auth-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);

  username = '';
  password = '';


  onLogin(){
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => console.log('Login exitoso', res),
      error: (err) => console.error('Error', err),
    });
  }
}
