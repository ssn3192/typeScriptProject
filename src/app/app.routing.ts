import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from "./app.component";
import {HomeComponent} from "./home.component";
import {ScreenTwoComponent} from "./screenTwo.component";




const routes: Routes = [
  { path: 'index', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index/home', component: HomeComponent},
  {path: 'index/next', component: ScreenTwoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule {}
