import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './feature-modules/home-page/home-page.component';
import { BettingViewHomeComponent } from './feature-modules/betting-view-home/betting-view-home.component';

const routes: Routes = [{path:"",component:HomePageComponent},
                        {path:"bets",component:BettingViewHomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
