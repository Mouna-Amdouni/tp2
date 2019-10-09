import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie2',
  templateUrl: './partie2.component.html',
  styleUrls: ['./partie2.component.css']
})
export class Partie2Component implements OnInit {
 nom:string="mouna";
 contenu:string ="sss";
onAfficher()
{

console.log(this.nom);
}
onKeyUp(event:KeyboardEvent)
{
  
this.contenu = 'Bonjour '+(<HTMLInputElement>event.target).value;
console.log(this.contenu);
}
onAfficherContenu(val:string)
{
console.log(val); }

  constructor() { }

  ngOnInit() {
  }

}
