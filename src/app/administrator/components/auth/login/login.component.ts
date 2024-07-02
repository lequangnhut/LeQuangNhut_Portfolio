import {Router} from '@angular/router';
import {Component} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {AlertService} from "../../../../services/utils/alert.service";

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
  ) {
  }

  /**
   * Submit login
   */
  onSubmit(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/admin/dashboard']);
      this.alertService.showToast('success', 'Login successfully !');
    } else {
      this.alertService.showAlert('error', 'Login Failed', 'Invalid username or password');
    }
  }
}
