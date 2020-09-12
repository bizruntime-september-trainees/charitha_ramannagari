let first:number=12.0;
let second:number=0b0001101;
let third:number=0o377;
let empName: string = "cherry";   
let empDept: string = "IT";   
let result: string = `${empName} works in the ${empDept} department.`;   
let checking: boolean = false; 
let tempNum: void = undefined;  
  tempNum = null;      
     
console.log(first);
console.log(second);
console.log(third);
console.log(result);
console.log(checking);
console.log(tempNum);
function ProcessData(x: any, y: any) {  
    return x + y;  
}  
let result1: any;  
result1 = ProcessData("Hello ", "Any!");   
result1 = ProcessData(2, 3); 