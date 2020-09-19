import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trial';

  ngOnInit()
  {
  }
  

  name="cherry";
  getName(){
    return this.name
  }
   Obj={
    name:'cherry',
    age:22
  } 
  arr=['cherry','modi','mohan']
  siteUrl=window.location.href
funct()
{
    alert('hlo cherry');
}
funct2(name){
    alert(name);
}
myevent(evt){
  console.warn(evt);
}
}  