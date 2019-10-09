import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {
  nb1:any;
  nb2:any;
  s;
onKeyUp(nb1:KeyboardEvent)
{
  
this.nb1 = (<HTMLInputElement>nb1.target).value;
console.log(this.nb1);
}
onKeyU(nb2:KeyboardEvent)
{
  
this.nb2 = (<HTMLInputElement>nb2.target).value;
console.log(this.nb2);
}
 carré(car){
car=this.nb1*this.nb1;
console.log(this.nb1);

 }
 onAffichersomme(){
  this.s= this.nb1+this.nb2;
return this.s;


 }
  constructor() { }

  ngOnInit() {
  }

}
