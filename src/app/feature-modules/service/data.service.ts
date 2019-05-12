import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 

  }
  getData(){

    let obs =  this.http.get("https://api.the-odds-api.com/v3/sports/?apiKey=9876ae80f035fbf0a1891c09d81e60cf",);
    obs.subscribe((response)=> console.log(response))

}
}
