import { Component, OnInit } from '@angular/core';

import { StateService } from './state.service';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Create Template Here</h2>
  `,
  providers: [ StateService]
})
export class AppComponent implements OnInit {
  states: any[];
  title: String;
  constructor(private stateService: StateService) {
    this.title = "Welcome"
   }

  getStates(): void {
    this.stateService.getStates().then(states => this.states = states);
  }

  ngOnInit(): void {
    this.getStates();
  }


}
