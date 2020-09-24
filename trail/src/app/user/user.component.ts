import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Output() parentFunc:EventEmitter<any>=  new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }
  sendData(){
    let data={name:'charitha',age:23}
    this.parentFunc.emit(data)
  }
}
 