import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  nom="mouna";
  age =15;

infos()
{ return this.nom +" a pour âge " + this.age; }
actif =true ;


  constructor() { }

  ngOnInit() {
  }

}
