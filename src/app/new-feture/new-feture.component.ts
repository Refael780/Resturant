import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-feture',
  templateUrl: './new-feture.component.html',
  styleUrls: ['./new-feture.component.css']
})
export class NewFetureComponent implements OnInit {
@Output() some=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  sendToParent(massage:string)
  {
    massage='wow';
    this.some.emit(massage);
  }

}
