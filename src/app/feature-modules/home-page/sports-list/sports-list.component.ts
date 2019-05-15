import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../service/data.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit {
  form: FormGroup
  public sportsData = []

 
  constructor(private _data: DataService, private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    this.getData()

 
  }
  public getData(){
    const sportData = this._data.loadData();
    sportData.subscribe(listData =>{
      this.sportsData = listData.data;
      console.log(this.sportsData)
      return this.sportsData
    })
   
  }




}
