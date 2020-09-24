import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular1';

  name="cherry";
  getName(){
    return this.name
  }
   Obj={
    name:'cherry',
    age:22
  } 
  arr=['cherry','modi','mohan']
  siteUrl=window.location.href;

  name1(){
     alert("hello charitha");
  }
}
