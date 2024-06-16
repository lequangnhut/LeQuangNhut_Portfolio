import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'ngx-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @ViewChild('navLinks', { static: true }) navLinks: ElementRef | undefined;
  navbarVisible = false;
  navbarFixed = false;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  onNavLinkClick(event: Event, sectionId: string): void {
    event.preventDefault();
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      this.scrollTo(targetElement);
    }
    this.hideNavbar();
  }

  scrollTo(element: HTMLElement): void {
    const yOffset = -60; // Offset tùy chỉnh
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    this.renderer.setProperty(document.documentElement, 'scrollTop', y);
    this.renderer.setProperty(document.body, 'scrollTop', y);
  }

  toggleNavbar(): void {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('ul.nav');

    if (navToggle && navLinks) {
      navToggle.classList.toggle('is-active');
      navLinks.classList.toggle('show');
      this.navbarVisible = !this.navbarVisible; // Cập nhật trạng thái của navbar
    }
  }

  hideNavbar(): void {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('ul.nav');

    if (navToggle && navLinks) {
      navToggle.classList.remove('is-active');
      navLinks.classList.remove('show');
      this.navbarVisible = false; // Đảm bảo rằng navbar là ẩn đi
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollOffset > 20) {
      this.renderer.addClass(
        this.elementRef.nativeElement.querySelector('.custom-navbar'),
        'affix'
      );
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement.querySelector('.custom-navbar'),
        'affix'
      );
    }
  }
}
