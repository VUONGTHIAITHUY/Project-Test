import { Component } from '@angular/core';
import { BART_CATEGORY_CONSTANTS, DM_CATEGORY_CONSTANTS } from 'src/app/shared/constants';
import { TriggerEventService } from 'src/app/shared/services/trigger-event.service';

@Component({
  selector: 'app-right-layout',
  templateUrl: './right-layout.component.html',
  styleUrls: ['./right-layout.component.scss']
})
export class RightLayoutComponent {
  DM_CATEGORY_CONSTANTS = DM_CATEGORY_CONSTANTS;

  /**
   *
   */
  constructor(private triggerEventService: TriggerEventService) {
  }
  
  toggleSidebar() {
    this.triggerEventService.setTriggerEvent();
  }
}
