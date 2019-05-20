import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, ControlContainer, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportsListComponent } from './feature-modules/home-page/sports-list/sports-list.component';
import { HomePageComponent } from './feature-modules/home-page/home-page.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { NavComponent } from './feature-modules/nav/nav.component';
import { BettingViewHomeComponent } from './feature-modules/betting-view-home/betting-view-home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    SportsListComponent,
    HomePageComponent,
    NavComponent,
    BettingViewHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
