import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../service/data.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { SendSelectedSportsService } from '../../service/send-selected-sports.service';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit {
  form: FormGroup
  sportsData = []
  public checkedSports =[]
  public indexVals = []
 
  constructor(private _data: DataService, private formBuilder: FormBuilder, private sendSport:SendSelectedSportsService) { 
    this.form = this.formBuilder.group({
      sportsData: new FormArray([])
    });
    this.getData()
  }

  // private addCheckboxes(){
  //   this.sportsData.map(o,i)
  // }

  ngOnInit() {
  

 
  }
  public getData(){
    const sportData = this._data.loadData();
    sportData.subscribe(listData =>{
      this.sportsData = listData.data;
      for(var i =0; i<this.sportsData.length; i++){
        this.sportsData[i]['checked'] = false
      }
      console.log(this.sportsData)
      this.sportsData.map((o,i)=>{
        const control = new FormControl(i === 0);
        (this.form.controls.sportsData as FormArray).push(control)

      })
    })
   
  }
  submit(){
    let checkVal = this.form.value.sportsData;
    console.log(checkVal.indexOf(true))
    for(var i = 0; i<checkVal.length; i++){
      if(checkVal[i]==true){
        // this.indexVals.push(i)
        this.checkedSports.push(this.sportsData[i].key)
      }
     
    }
    console.log(this.checkedSports)
    this.sendSport.serviceMethod(this.checkedSports)

    return this.checkedSports;

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
