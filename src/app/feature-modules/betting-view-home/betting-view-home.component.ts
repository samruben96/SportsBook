import { Component, OnInit } from '@angular/core';
import { SendSelectedSportsService } from '../service/send-selected-sports.service';
import { SportListDataService } from '../service/sport-list-data.service';

@Component({
  selector: 'app-betting-view-home',
  templateUrl: './betting-view-home.component.html',
  styleUrls: ['./betting-view-home.component.css']
})
export class BettingViewHomeComponent implements OnInit {
  public data;
  public showTheseSports = []
  public getSports = []
  constructor(private selectSport: SendSelectedSportsService, private _data: SportListDataService) { 
    this.selectSport.shareDataSubject.subscribe(recievedData =>{
      
      this.cleanDataAndRunAPI(recievedData)
     
    })
this.getSports=[]
  }

  ngOnInit() {
   


  }
  cleanDataAndRunAPI(list){
    console.log(list)
    for(var i = 0; i<list.length; i++){
      const selectedData = this._data.loadData(list[i])
      selectedData.subscribe(listData =>{
        this.selectSport = listData.data;
        this.showTheseSports = listData.data
        this.getSports.push(listData.data)
 
      })
    
    
    }
    console.log(this.getSports)
  }

    
    

  }



