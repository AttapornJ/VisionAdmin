
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface NoticeForSale{
    No:number,
    ID:string,
    FirstName:string,
    LastName:string,
    AnimalID:string,
    EarNumber:string,
    AnimalName:string,
    Type:string,
    Gender:string,
    Color:string,
    NotificationDate:string,
    Price_Rate:number,
    Actions:boolean
}

@Injectable()
export class NoticeforsaleServince {
    constructor(private http :HttpClient){ }

}