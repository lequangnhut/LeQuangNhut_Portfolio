import { Component } from '@angular/core';

@Component({
  selector: 'ngx-slidebar-admin',
  templateUrl: './slidebar-admin.component.html',
  styleUrl: './slidebar-admin.component.scss'
})
export class SlidebarAdminComponent {
  activeLink: string | null = null;

  constructor() { }

  ngOnInit() { }

  setActiveLink(linkName: string) {
    this.activeLink = linkName;
  }
}
