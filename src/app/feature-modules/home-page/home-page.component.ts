import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { async } from '../../../../node_modules/@angular/core/testing';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 
  constructor(private _data: DataService) { 
  }
  ngOnInit() {
  
    
  }
 
  


}
