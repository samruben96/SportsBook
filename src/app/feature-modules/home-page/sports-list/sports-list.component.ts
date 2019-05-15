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
  public checkedSports =[]

 
  constructor(private _data: DataService, private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    this.getData()

 
  }
  public getData(){
    const sportData = this._data.loadData();
    sportData.subscribe(listData =>{
      this.sportsData = listData.data;
      for(var i =0; i<this.sportsData.length; i++){
        this.sportsData[i]['checked'] = false
      }
      console.log(this.sportsData)
      return this.sportsData
    })
   
  }
  // checkCheckBoxvalue(event){
   
  //   this.checkedSports.indexOf(event.target.value) === -1 ? this.checkedSports.push(event.target.value) : console.log("This item already exists");
  //   const index: number = this.checkedSports.indexOf(event.target.value)

  //   console.log(index)
    
  
  //   console.log(this.checkedSports)

  //   return this.checkedSports
  // }
  
  // submit(){

  //   console.log(this.checkedSports)
  // }




}
