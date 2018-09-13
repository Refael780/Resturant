import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 @Output() fetureEvent= new EventEmitter<string>();
  constructor() { }

  onSelect(SelectCo:string)
  {
    //console.log("1");
    this.fetureEvent.emit(SelectCo);
  }
  ngOnInit() {
  }

}
