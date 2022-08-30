
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Notify{
    No:number,
    ID_Register:string,
    FirstName:string,
    LastName:string,
    AnimalID:string,
    EarNumber:string,
    AnimalName:string,
    Type:string,
    Gender:string,
    Color:string,
    NotificationDate:string,
    ReferenceCode:string,
    Actions:boolean
}

@Injectable()
export class NotifyhistoryrecordServince {
    constructor(private http :HttpClient){ }

}