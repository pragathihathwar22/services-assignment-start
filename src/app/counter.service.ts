import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor() { }

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log("Set from Active To Inactive: "+this.activeToInactiveCounter);
  }
  incrementInactiveToActive(){
    this.inactiveToActiveCounter++;
    console.log("Set from Inactive To Active: "+this.inactiveToActiveCounter);
  }


}
