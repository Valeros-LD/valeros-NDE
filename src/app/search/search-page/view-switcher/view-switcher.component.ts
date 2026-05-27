import { Component, inject, input, output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { getIcon } from '../../../config/icon.registry';
import { ViewType } from '../../views/types/view-type';
import { ViewService } from '../../views/view.service';

@Component({
  selector: 'app-view-switcher',
  imports: [NgIconComponent],
  templateUrl: './view-switcher.component.html',
})
export class ViewSwitcherComponent {
  private viewService = inject(ViewService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  currentView = input.required<ViewType>();
  viewChange = output<ViewType>();

  protected readonly availableViews = this.viewService.getAllViewMappings();
  protected readonly getIcon = getIcon;

  onViewChange(viewType: ViewType): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { view: viewType },
      queryParamsHandling: 'merge',
    });
  }
}
