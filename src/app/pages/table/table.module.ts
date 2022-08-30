import { NotifydetailComponent } from './notifyhistoryrecord/notifydetail/notifydetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule ,Type} from '@angular/core';

import {ShareZorro} from '../sharezorro.module';
import { TableRoutingModule } from './table-routing.module';
import { NotifyhistoryrecordComponent } from './notifyhistoryrecord/notifyhistoryrecord.component';
import { NoticeforsaleComponent } from './noticeforsale/noticeforsale.component';
import { NotificationofchangeofownershipComponent } from './notificationofchangeofownership/notificationofchangeofownership.component';
import { ReportstohistoryComponent } from './reportstohistory/reportstohistory.component';




@NgModule({
  imports: [TableRoutingModule, 
            FormsModule, 
            ReactiveFormsModule ,
            ...ShareZorro,

          
          ],
  declarations: [
    NotifyhistoryrecordComponent,
    NoticeforsaleComponent,
    NotificationofchangeofownershipComponent,
    ReportstohistoryComponent,
    NotifydetailComponent
    
  ],
  exports: [NotifyhistoryrecordComponent,...ShareZorro,NoticeforsaleComponent,
    NotificationofchangeofownershipComponent,
    ReportstohistoryComponent,
    NotifydetailComponent]
})
export class TableModule {}
