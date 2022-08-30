
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Notificationofchangeofownership{
    No:number,
    OwnershipID:string,
    OwnershipFirstName:string,
    OwnershipLastName:string,
    AnimalID:string,
    EarNumber:string,
    AnimalName:string,
    Type:string,
    Gender:string,
    Color:string,
    NotificationDate:string,
    OwnerID:string,
    OwnerFirstName:string,
    OwnerLastName:string,
    Actions:boolean
}

@Injectable()
export class notificationofchangeofownershipServince {
    constructor(private http :HttpClient){ }

}