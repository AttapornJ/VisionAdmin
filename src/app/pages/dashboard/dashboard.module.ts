import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ShareZorro } from '../sharezorro.module';



@NgModule({
  imports: [DashboardRoutingModule,...ShareZorro],
  declarations: [
    AnalyticsComponent
  ],
  exports: [AnalyticsComponent,...ShareZorro]
})
export class DashboardModule { }
