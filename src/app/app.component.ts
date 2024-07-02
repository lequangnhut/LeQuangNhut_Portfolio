import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'ngx-init',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showNavbar = true;
  showHeader = true;
  showSlideBar = true;
  showFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateVisibility(event.urlAfterRedirects);
      }
    });
  }

  updateVisibility(url: string) {
    if (url.startsWith('/admin/')) {
      this.showHeader = true;
      this.showSlideBar = true;
      this.showNavbar = false;
      this.showFooter = false;
    } else if (url === '/admin') {
      this.showNavbar = false;
      this.showFooter = false;
      this.showHeader = false;
      this.showSlideBar = false;
    } else {
      this.showNavbar = true;
      this.showFooter = true;
      this.showHeader = false;
      this.showSlideBar = false;
    }
  }
}
