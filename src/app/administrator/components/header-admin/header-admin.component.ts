import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngx-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss'
})
export class HeaderAdminComponent implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit() {
    const toggleSidebarBtn = this.elementRef.nativeElement.querySelector('.toggle-sidebar-btn');
    if (toggleSidebarBtn) {
      this.renderer.listen(toggleSidebarBtn, 'click', (event) => {
        document.body.classList.toggle('toggle-sidebar');
      });
    }
  }

  signOut() {
    window.location.href = '/admin';
  }
}
