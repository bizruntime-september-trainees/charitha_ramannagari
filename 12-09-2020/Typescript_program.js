var message = "Hello Charitha";
console.log(message);
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello Ramannagari!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
var c = "modi";
console.log(c);
var b;
b = "mohan";
console.log(b);
var c = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("c" + c);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
var str = '1';
var str2 = str;
console.log(typeof (str2));
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14;
    };
    Numbers.sval = 10;
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval);
var msg = "Ramannagari" + "Charitha";
console.log(msg);
var num = -2;
var result = num > 0 ? "positive" : "non-positive";
console.log(result);
var num = 12;
console.log(typeof num);
var n = 5;
while (n > 5) {
    console.log("while");
}
do {
    console.log("do…while");
} while (n > 5);
var i = 1;
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("The first multiple of 5  between 1 and 10 is : " + i);
        break;
    }
    i++;
}
var num = 0;
var count = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 0) {
        continue;
    }
    count++;
}
console.log(" The count of odd values between 0 and 20 is: " + count);
function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name:", name);
    if (mail_id != undefined)
        console.log("Email Id:", mail_id);
}
disp_details(123, "charitha");
disp_details(111, "modi", "bhuvaneshcmv@gmail.com");
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var j;
    var sum = 0;
    for (j = 0; j < nums.length; j++) {
        sum = sum + nums[j];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
var msg1 = function () {
    return "hello world";
};
console.log(msg1());
var myFunction = new Function("a", "b", "return a * b"); //function cons//
var x = myFunction(4, 3);
console.log(x);
function factorial(number) {
    if (number <= 0) { // recursive
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
;
console.log(factorial(6));
var d = function (x) { return 10 + x; };
console.log(d(100));
var func = function (x) {
    if (typeof x == "number") {
        console.log(x + " is numeric");
    }
    else if (typeof x == "string") {
        console.log(x + " is a string");
    }
};
func(3);
func("cherry");
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("modi");
disp(1, "chandu");
var alphas;
alphas = ["1", "2", "3", "4"];
for (var i = 0; i < alphas.length; i++) {
    console.log(alphas[i]);
}
var nums = [1, 2, 3, 3];
console.log(nums[0]);
console.log(alphas[0]);
console.log(alphas[1]);
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j]);
}
var tuple = [10, "Hello"]; //  tuple 
console.log(tuple[0]);
console.log(tuple[1]);
console.log("before pushing:" + tuple.length);
tuple.push(12);
console.log("after pushing:" + tuple.length);
console.log("popping:" + tuple.pop());
function disp1(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        var i;
        for (i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp1("mark");
console.log("Printing names array....");
disp1(["cherry", "chandu", "Modi", "mohan"]);
var arr;
var i;
arr = [1, 2, 4];
console.log("**numeric array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["Mumbai", "Pune", "Delhi"];
console.log("**string array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "modiiii",
    lastName: "cherryyyy",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
var drummer = {};
drummer.age = 27;
drummer.instrument = "Piano";
console.log("Age:  " + drummer.age);
console.log("Instrument:  " + drummer.instrument);
var Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Function displays Engine is  :   " + this.engine);
    };
    return Car;
}());
var obj1 = new Car("Inova");
console.log("Reading attribute value Engine as :  " + obj1.engine);
//access the function
obj1.disp();
