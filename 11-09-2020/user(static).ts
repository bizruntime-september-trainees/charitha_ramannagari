var list : number[] = [1, 3, 5];  //array
console.log(list);
let a1 = ["hi", 8, "how", 5];   //touple 
interface Calc {              //interface
    subtract (first: number, second: number): any;  
}  
   
let Calculator: Calc = {  
    subtract(first: 4, second: 3) {  
        return first - second;  
    }  
}  
class Student            //class
{  
    RollNo: number;  
    Name: string;   
    constructor(_RollNo: number, Name: string)   
    {  
        this.RollNo = _RollNo;  
        this.Name = Name;  
    }  
    showDetails()  
    {  
        console.log(this.RollNo + " : " + this.Name);  
    }  
}  
enum Color {             //enum
    Red, Green, Blue  
};

let c: Color;  
var ColorColor = Color.Green;  
function add(a: 3, b: 4): number {     //function
    return a + b;  
}; 

let sum1 = function (a: 3, y:4): number {  
    return a + y;  
    console.log(sum1);
}; 
function identity<T>(arg: T): T {     //generic
    return arg;  
}  
let output1 = identity<string>("RAMANNAGARI CHARITHA");  
let output2 = identity<number>( 100 );  
console.log(output1);

var a = null;   
console.log( a );    
console.log( typeof(a) );   

var b;
console.log( b );    
console.log( typeof(b) );

var s = "hey hi";    //var
var times = 5;  
if (times > 3) {  
   var s = "RAMANNAGARI CHARITHA";   
}  
console.log(s) ;

let greeter = "hey hi";  //let
let times1 = 5;  
if (times > 3) {  
   let hello = "hello";   
   console.log(hello);
} 
let Bike = { Company1: 'Honda',
             Company2: 'Hero',
             Company3: 'Royal Enfield'
           };
delete Bike.Company1;
console.log(Bike);    
