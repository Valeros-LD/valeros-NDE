import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherBook, featherGithub } from '@ng-icons/feather-icons';
import { SearchBarComponent } from '../search/search-page/search-bar/search-bar.component';
import { HeaderBannerComponent } from '../ui/header-banner/header-banner.component';

@Component({
  selector: 'app-home-page',
  imports: [HeaderBannerComponent, SearchBarComponent, NgIcon],
  templateUrl: './home-page.component.html',
  viewProviders: [provideIcons({ featherBook, featherGithub })],
})
export class HomePageComponent {}
