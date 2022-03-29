import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gamingexercise';
  oddNumbers: number[] = [];
  evenNumbers: number[]= [];

  onlyOdd = false;
  showText="Odd";
  oddNum = [1,3,5,7,9];
  evenNum = [2,4,6,8,10];

  onShow(){
    this.onlyOdd= !this.onlyOdd;
    this.showText= (this.showText==="Odd") ? "Even" : "Odd";
  }
  onIntervalFired(number:number){
    if(number % 2 ===0){
      this.evenNumbers.push(number);
    }
    else{
      this.oddNumbers.push(number);
    }
  }

}
