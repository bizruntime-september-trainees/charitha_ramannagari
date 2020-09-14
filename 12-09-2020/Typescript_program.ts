var message = "Hello Charitha";
console.log(message);

class Greeting { 
    greet():void { 
       console.log("Hello Ramannagari!!!") 
    } 
 } 
 var obj = new Greeting(); 
 obj.greet();

 var c:string="modi";
 console.log(c);
var b:string;
b="mohan";
console.log(b);

var c:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("c"+c) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)

var str = '1' 
var str2:number = <number> <any> str   
console.log(typeof(str2))

var global_num = 12          
class Numbers { 
   num_val = 13;            
   static sval = 10;       
   
   storeNum():void { 
      var local_num = 14;   
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   

var msg:string = "Ramannagari"+"Charitha" 
console.log(msg)

var num:number = -2 
var result = num > 0 ?"positive":"non-positive" 
console.log(result)

var num = 12 
console.log(typeof num); 

var n:number = 5 
while(n > 5) { 
   console.log("while") 
} 
do { 
   console.log("do…while") 
} 
while(n>5)

var i:number = 1 
while(i<=10) { 
   if (i % 5 == 0) {   
      console.log ("The first multiple of 5  between 1 and 10 is : "+i) 
      break    
   } 
   i++ 
}  

var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
   if (num % 2==0) {
      continue
   }
   count++
}
console.log (" The count of odd values between 0 and 20 is: "+count)

function disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name:",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id:",mail_id); 
 }
 disp_details(123,"charitha");
 disp_details(111,"modi","bhuvaneshcmv@gmail.com");

 function addNumbers(...nums:number[]) {  
    var j;   
    var sum:number = 0; 
    
    for(j = 0;j<nums.length;j++) { 
       sum = sum + nums[j]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)

 var msg1 = function() { 
    return "hello world";  
 } 
 console.log(msg1())

 var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);

function factorial(number) {
    if (number <= 0) {         
       return 1; 
    } else {     
       return (number * factorial(number - 1));    
    } 
 }; 
 console.log(factorial(6));   

 var d = (x:number)=>10 + x 
console.log(d(100))

var func = (x)=> {           
    if(typeof x=="number") { 
       console.log(x+" is numeric") 
    } else if(typeof x=="string") { 
       console.log(x+" is a string") 
    }  
 } 
 func(3) 
 func("cherry")

 function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("modi") 
disp(1,"chandu");

var alphas:string[]; 
alphas = ["1","2","3","4"] 
for(var i = 0;i<alphas.length;i++) { 
    console.log(alphas[i]) 
}
var nums:number[] = [1,2,3,3] 
console.log(nums[0]); 
console.log(alphas[0]); 
console.log(alphas[1]);

var j:any; 
var nums:number[] = [1001,1002,1003,1004] 

for(j in nums) { 
   console.log(nums[j]) 
} 

var tuple = [10,"Hello"];   
console.log(tuple[0]) 
console.log(tuple[1])
console.log("before pushing:"+tuple.length)
tuple.push(12)
console.log("after pushing:"+tuple.length)
console.log("popping:"+tuple.pop());

function disp1(name:string|string[]) { 
    if(typeof name == "string") { 
       console.log(name) 
    } else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 } 
 disp1("mark") 
 console.log("Printing names array....") 
 disp1(["cherry","chandu","Modi","mohan"])

 var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**numeric array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  

arr = ["Mumbai","Pune","Delhi"] 
console.log("**string array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
} 

interface interf { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:interf = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
 var employee:interf = { 
    firstName:"modiiii",
    lastName:"cherryyyy", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName);
 console.log(employee.lastName);


 interface Person {      
    age:number 
 } 
 
 interface Musician extends Person { 
    instrument:string 
 } 
 
 var drummer = <Musician>{}; 
 drummer.age = 27 
 drummer.instrument = "Piano" 
 console.log("Age:  "+drummer.age)
 console.log("Instrument:  "+drummer.instrument)


 interface person1 {       
    v1:number 
 } 
 
 interface person2 { 
    v2:number 
 } 
 
 interface Child extends person1, person2 { } 
 var Iobj:Child = { v1:12, v2:23} 
 console.log("value 1: "+this.v1+" value 2: "+this.v2)

 class Car {      //class
    engine:string; 
    
     constructor(engine:string) { 
       this.engine = engine 
    }  
    
     disp():void { 
       console.log("Function displays Engine is  :   "+this.engine) 
    } 
 } 
 
 
 var obj1 = new Car("Inova")
 
 console.log("Engine :  "+obj1.engine)  
 
 obj1.disp()

 class ParentClass {      
    doPrint():void {
       console.log("from Parent called…") 
    } 
 } 
 
 class Subclass extends ParentClass { 
    doPrint():void { 
       super.doPrint() 
       console.log("printing from a string…")
    } 
 } 
 

class Static_example {   
   static num:number; 
   
   static disp():void { 
      console.log("The value of num is"+ Static_example.num) 
   } 
} 

Static_example.num = 12     
Static_example.disp()   

class instance{ }        
var obj3 = new instance() 
var instance_of = obj3 instanceof instance; 
console.log("checking instance_of " + instance_of);

class Encapsulate2 { 
    str:string = "hello" 
    private str2:string = "world" 
 }
  
 var obj4 = new Encapsulate2() 
 console.log(obj.str)     
 console.log(obj.str2)