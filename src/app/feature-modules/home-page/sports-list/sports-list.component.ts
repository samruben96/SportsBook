import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit {

  sportsData = []
  constructor(private data: DataService) { }

  ngOnInit() {
    this.getData()
 
  }
  public getData(){
    const sportData = this.data.loadData();
    sportData.subscribe(listData =>{
      this.sportsData = listData.data;
      console.log(this.sportsData)
      return this.sportsData
    })
   
  }

}
