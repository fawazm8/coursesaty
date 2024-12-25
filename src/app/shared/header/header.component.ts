import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="logo">
        <img src="assets/logo.png" alt="Logo" />
        <span>Coursesaty</span>
      </div>
      <nav class="nav-links">
        <a href="#">Features</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
        <a href="#">Support</a>
      </nav>
      <div class="actions">
        <button>My School</button>
        <button class="primary">Get Started Free</button>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
