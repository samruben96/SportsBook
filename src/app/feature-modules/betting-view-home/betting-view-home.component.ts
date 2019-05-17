import { Component, OnInit } from '@angular/core';
import { SendSelectedSportsService } from '../service/send-selected-sports.service';

@Component({
  selector: 'app-betting-view-home',
  templateUrl: './betting-view-home.component.html',
  styleUrls: ['./betting-view-home.component.css']
})
export class BettingViewHomeComponent implements OnInit {
  public data: Array<any>;

  constructor(private selectSport: SendSelectedSportsService) { 
    
  }

  ngOnInit() {

    this.selectSport.getSelectedSports$.subscribe((data)=>{
      this.data = data;
      console.log(this.data)

    })
  }

}
