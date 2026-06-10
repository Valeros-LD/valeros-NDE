import { Component, computed, OnInit, signal } from '@angular/core';
import { IconType, NgIconComponent } from '@ng-icons/core';
import { featherMoon, featherStar, featherSun } from '@ng-icons/feather-icons';

interface Theme {
  id: string;
  name: string;
  icon: IconType;
}

@Component({
  selector: 'app-theme-switcher',
  imports: [NgIconComponent],
  templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent implements OnInit {
  protected readonly themes: Theme[] = [
    { id: 'valeros-light', name: 'Licht', icon: featherSun },
    { id: 'valeros-dark', name: 'Donker', icon: featherMoon },
    { id: 'valeros-purple', name: 'Paars', icon: featherStar },
  ];

  protected readonly currentThemeIndex = signal<number>(0);

  protected readonly currentTheme = computed(
    () => this.themes[this.currentThemeIndex()],
  );

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.applyTheme(this.currentTheme().id);
    }
  }

  protected selectNextTheme(): void {
    const nextIndex = (this.currentThemeIndex() + 1) % this.themes.length;
    this.currentThemeIndex.set(nextIndex);
    const theme = this.themes[nextIndex];
    this.applyTheme(theme.id);
  }

  private applyTheme(themeId: string): void {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', themeId);
    }
  }
}
