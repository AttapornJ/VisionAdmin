import { Component, OnInit } from '@angular/core';
import {NoticeForSale} from './noticeforsale.service'
@Component({
  selector: 'app-noticeforsale',
  templateUrl: './noticeforsale.component.html',
  styleUrls: ['./noticeforsale.component.less']
})
export class NoticeforsaleComponent  {

 
  constructor() { }
  data:NoticeForSale[]=[
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
  Price_Rate: 10000,
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
  Price_Rate: 10000,
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
  Price_Rate: 10000,
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
  Price_Rate: 10000,
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
  Price_Rate: 10000,
  Actions:false
}
  ]
  
 
 
}
