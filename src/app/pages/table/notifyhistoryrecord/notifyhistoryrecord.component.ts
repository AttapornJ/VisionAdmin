import { Notify } from './notifyhistoryrecord.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-notifyhistoryrecord',
  templateUrl: './notifyhistoryrecord.component.html',
  styleUrls: ['./notifyhistoryrecord.component.less']
})
export class NotifyhistoryrecordComponent  {

  constructor() { }
  data:Notify[]=[
    {
  No:1,
  ID_Register:'xxxxxxxx',
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
  ID_Register:'xxxxxxxx',
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
  ID_Register:'xxxxxxxx',
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
  ID_Register:'xxxxxxxx',
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
  ID_Register:'xxxxxxxx',
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