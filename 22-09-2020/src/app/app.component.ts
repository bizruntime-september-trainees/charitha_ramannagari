import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2';
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
 var currentVal="";
}
getValue(val){
  console.warn(val)
 
}
 name2="modi"
 disabledBox=true
 enableBox(){
   this.disabledBox=false
 }
 show1=false
 show2=true
col="green";
color="red";
data=['charitha','modi','mohan','chandana']
/**data{
  name:'charitha',
  age:'23'
}
{
  name:'modi',
  age:'22';
}*/

}