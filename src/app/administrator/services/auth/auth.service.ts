import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../../services/utils/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === '123123') {
      this.localStorageService.setItem('user', { username });
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/admin']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
