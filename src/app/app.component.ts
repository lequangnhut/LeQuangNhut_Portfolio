import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { FooterComponent } from './customers/components/footer/footer.component';
import { HeaderComponent } from './customers/components/header/header.component';
import { NavbarComponent } from './customers/components/navbar/navbar.component';
import { MainComponent } from './customers/components/main/main.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngx-init',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    RouterLink,
    RouterLinkActive,
    NgIf,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  showNavbar = true;
  showFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateVisibility(event.urlAfterRedirects);
      }
    });
  }

  updateVisibility(url: string) {
    if (url.startsWith('/admin')) {
      this.showNavbar = false;
      this.showFooter = false;
    } else {
      this.showNavbar = true;
      this.showFooter = true;
    }
  }
}
