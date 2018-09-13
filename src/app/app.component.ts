import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'Recpie';
  onNav(newChoose)
 {
  console.log("newChoose");

   console.log(newChoose);
  this.name = newChoose;
 }
}
