import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'my-homepage',
  templateUrl: 'home.component.html'
})

export  class HomeComponent{

  constructor(private router: Router) {}
  name: string = "";
   btnClick =  function () {

     this.router.navigateByUrl(['index/next']);
   };

}
