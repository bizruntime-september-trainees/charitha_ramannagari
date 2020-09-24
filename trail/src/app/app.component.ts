import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trail';
color="orange"

UpdateColor(){
  this.color="blue"
}
err=true;  
parentFunc(data){
  console.warn(data)
}
}      