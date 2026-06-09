import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  imports: [],
})
export class HeaderBannerComponent {
  private router = inject(Router);

  goToHome(): void {
    this.router.navigate(['/search'], {
      queryParams: {},
    });
  }
}
