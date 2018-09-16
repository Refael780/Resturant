import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg='';
  name = 'Recpie';
  onNav(newChoose)
 {
  console.log("newChoose");

   console.log(newChoose);
  this.name = newChoose;
 }
  PlayViewWithMassage(massage:string)
  {
   this.msg= massage;
 }
}
