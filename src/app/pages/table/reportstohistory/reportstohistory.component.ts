import { Component, OnInit } from '@angular/core';
import { Reportstohistory } from './reportstohistory.service';

@Component({
  selector: 'app-reportstohistory',
  templateUrl: './reportstohistory.component.html',
  styleUrls: ['./reportstohistory.component.less']
})
export class ReportstohistoryComponent  {



  constructor() { }
  data:Reportstohistory[]=[
    {
  No:1,
  ID:'xxxxxxxx',
  FirstName:'xxxxx',
  LastName:'xxxxx',
  AnimalID: 'xxxxxxxxx',
  EarNumber:'xxxxxxxxx',
  AnimalName:'xxxxx',
  Type:'xxxxx',
  Gender:'xxx',
  Color:'xxxxx',
  NotificationDate:'xx/xx/xx',
  ReferenceCode:'xxxxxxxxxxxxxxxxxxxxx',
  Actions:false
},
{
  No:2,
  ID:'xxxxxxxx',
  FirstName:'xxxxx',
  LastName:'xxxxx',
  AnimalID: 'xxxxxxxxx',
  EarNumber:'xxxxxxxxx',
  AnimalName:'xxxxx',
  Type:'xxxxx',
  Gender:'xxx',
  Color:'xxxxx',
  NotificationDate:'xx/xx/xx',
  ReferenceCode:'xxxxxxxxxxxxxxxxxxxxx',
  Actions:false
},
{
  No:3,
  ID:'xxxxxxxx',
  FirstName:'xxxxx',
  LastName:'xxxxx',
  AnimalID: 'xxxxxxxxx',
  EarNumber:'xxxxxxxxx',
  AnimalName:'xxxxx',
  Type:'xxxxx',
  Gender:'xxx',
  Color:'xxxxx',
  NotificationDate:'xx/xx/xx',
  ReferenceCode:'xxxxxxxxxxxxxxxxxxxxx',
  Actions:false
},
{
  No:4,
  ID:'xxxxxxxx',
  FirstName:'xxxxx',
  LastName:'xxxxx',
  AnimalID: 'xxxxxxxxx',
  EarNumber:'xxxxxxxxx',
  AnimalName:'xxxxx',
  Type:'xxxxx',
  Gender:'xxx',
  Color:'xxxxx',
  NotificationDate:'xx/xx/xx',
  ReferenceCode:'xxxxxxxxxxxxxxxxxxxxx',
  Actions:false
},
{
  No:5,
  ID:'xxxxxxxx',
  FirstName:'xxxxx',
  LastName:'xxxxx',
  AnimalID: 'xxxxxxxxx',
  EarNumber:'xxxxxxxxx',
  AnimalName:'xxxxx',
  Type:'xxxxx',
  Gender:'xxx',
  Color:'xxxxx',
  NotificationDate:'xx/xx/xx',
  ReferenceCode:'xxxxxxxxxxxxxxxxxxxxx',
  Actions:false
}
  ]
  
}


