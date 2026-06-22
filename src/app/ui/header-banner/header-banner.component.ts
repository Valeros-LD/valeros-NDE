import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  imports: [],
})
export class HeaderBannerComponent {
  private router = inject(Router);
  hideSubtitle = input(false);

  goToHome(): void {
    this.router.navigate(['/'], {
      queryParams: {},
    });
  }
}
