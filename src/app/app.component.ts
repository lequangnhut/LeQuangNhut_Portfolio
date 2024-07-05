import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'ngx-init',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showNavbar = true;
  showFooter = true;
  showHeaderAdmin = true;
  showSlideBarAdmin = true;
  showFooterAdmin = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateVisibility(event.urlAfterRedirects);
      }
    });
  }

  updateVisibility(url: string) {
    if (url.startsWith('/admin/')) {
      this.showHeaderAdmin = true;
      this.showSlideBarAdmin = true;
      this.showFooterAdmin = true;
      this.showNavbar = false;
      this.showFooter = false;
    } else if (url === '/admin') {
      this.showNavbar = false;
      this.showFooter = false;
      this.showHeaderAdmin = false;
      this.showSlideBarAdmin = false;
      this.showFooterAdmin = false;
    } else {
      this.showNavbar = true;
      this.showFooter = true;
      this.showHeaderAdmin = false;
      this.showSlideBarAdmin = false;
      this.showFooterAdmin = false;
    }
  }
}
