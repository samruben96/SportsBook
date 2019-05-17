import { Injectable } from '@angular/core';
import { SportsListComponent } from '../home-page/sports-list/sports-list.component';
import { Observable, Subject } from '../../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendSelectedSportsService {
  getSelectedSports$:Observable<any>;
  private selectSportCat = new Subject<any>();

  constructor() { 
    this.getSelectedSports$ = this.selectSportCat.asObservable();
  }

  serviceMethod(data){
    console.log(data)
    this.selectSportCat.next(data)
  }

  
}
