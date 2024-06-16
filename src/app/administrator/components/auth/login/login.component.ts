import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/admin/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
