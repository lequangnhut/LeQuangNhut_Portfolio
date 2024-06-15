import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FooterComponent } from './customers/components/footer/footer.component';
import { HeaderComponent } from './customers/components/header/header.component';
import { NavbarComponent } from './customers/components/navbar/navbar.component';
import { MainComponent } from './customers/components/main/main.component';

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
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
