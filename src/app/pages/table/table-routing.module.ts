import { NotifydetailComponent } from './notifyhistoryrecord/notifydetail/notifydetail.component';
import { ReportstohistoryComponent } from './reportstohistory/reportstohistory.component';
import { NotificationofchangeofownershipComponent } from './notificationofchangeofownership/notificationofchangeofownership.component';
import { NoticeforsaleComponent } from './noticeforsale/noticeforsale.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotifyhistoryrecordComponent } from './notifyhistoryrecord/notifyhistoryrecord.component';



const routes: Routes = [
  { path: '', 
    children:[
    {
      path:'notifyhistoryrecord',
      component:NotifyhistoryrecordComponent
    },{
      path:'notifydetail',
      component:NotifydetailComponent
    },
    {
      path:'noticeforsale',
      component:NoticeforsaleComponent
    },
    {
      path:'notificationofchangeofownership',
      component:NotificationofchangeofownershipComponent
    },
    {
      path:'reportstohistory',
      component:ReportstohistoryComponent
    }
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
