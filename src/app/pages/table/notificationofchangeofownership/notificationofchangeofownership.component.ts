import { Component, OnInit } from '@angular/core';
import { Notificationofchangeofownership } from './notificationofchangeofownership.service';

@Component({
  selector: 'app-notificationofchangeofownership',
  templateUrl: './notificationofchangeofownership.component.html',
  styleUrls: ['./notificationofchangeofownership.component.less']
})
export class NotificationofchangeofownershipComponent{

  constructor() { }
  data:Notificationofchangeofownership[]=[
    {
  No:1,
  OwnershipID:'xxxxxxxx',
  OwnershipFirstName:'xxxxx',
  OwnershipLastName:'xxxxx',
  AnimalID: 'xxxxxxxxx',
  EarNumber:'xxxxxxxxx',
  AnimalName:'xxxxx',
  Type:'xxxxx',
  Gender:'xxx',
  Color:'xxxxx',
  NotificationDate:'xx/xx/xx',
  OwnerID:'xxxxxxxx',
    OwnerFirstName:'xxxxx',
    OwnerLastName:'xxxxx',
  Actions:false
},
{
  No:2,
  OwnershipID:'xxxxxxxx',
  OwnershipFirstName:'xxxxx',
  OwnershipLastName:'xxxxx',
  AnimalID: 'xxxxxxxxx',
  EarNumber:'xxxxxxxxx',
  AnimalName:'xxxxx',
  Type:'xxxxx',
  Gender:'xxx',
  Color:'xxxxx',
  NotificationDate:'xx/xx/xx',
  OwnerID:'xxxxx',
  OwnerFirstName:'xxxxx',
  OwnerLastName:'xxxxx',
  Actions:false
},
{
  No:3,
  OwnershipID:'xxxxxxxx',
  OwnershipFirstName:'xxxxx',
  OwnershipLastName:'xxxxx',
  AnimalID: 'xxxxxxxxx',
  EarNumber:'xxxxxxxxx',
  AnimalName:'xxxxx',
  Type:'xxxxx',
  Gender:'xxx',
  Color:'xxxxx',
  NotificationDate:'xx/xx/xx',
  OwnerID:'xxxxx',
    OwnerFirstName:'xxxxx',
    OwnerLastName:'xxxxx',
  Actions:false
},
{
  No:4,
  OwnershipID:'xxxxxxxx',
  OwnershipFirstName:'xxxxx',
  OwnershipLastName:'xxxxx',
  AnimalID: 'xxxxxxxxx',
  EarNumber:'xxxxxxxxx',
  AnimalName:'xxxxx',
  Type:'xxxxx',
  Gender:'xxx',
  Color:'xxxxx',
  NotificationDate:'xx/xx/xx',
  OwnerID:'xxxxx',
  OwnerFirstName:'xxxxx',
  OwnerLastName:'xxxxx',
  Actions:false
},
{
  No:5,
  OwnershipID:'xxxxxxxx',
  OwnershipFirstName:'xxxxx',
  OwnershipLastName:'xxxxx',
  AnimalID: 'xxxxxxxxx',
  EarNumber:'xxxxxxxxx',
  AnimalName:'xxxxx',
  Type:'xxxxx',
  Gender:'xxx',
  Color:'xxxxx',
  NotificationDate:'xx/xx/xx',
  OwnerID:'xxxxx',
    OwnerFirstName:'xxxxx',
    OwnerLastName:'xxxxx',
  Actions:false
}
  ]
  
 
}
