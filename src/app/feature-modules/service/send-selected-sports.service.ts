import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendSelectedSportsService {
  shareDataSubject = new Subject<any>();

  sendDataToOtherComponent(someData){
    this.shareDataSubject.next(someData)
  }



  
}
