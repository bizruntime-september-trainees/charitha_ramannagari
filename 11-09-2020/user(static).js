var list = [1, 3, 5]; //array
console.log(list);
var a1 = ["hi", 8, "how", 5]; //touple 
var Calculator = {
    subtract: function (first, second) {
        return first - second;
    }
};
var Student //class
 = /** @class */ (function () {
    function Student(_RollNo, Name) {
        this.RollNo = _RollNo;
        this.Name = Name;
    }
    Student.prototype.showDetails = function () {
        console.log(this.RollNo + " : " + this.Name);
    };
    return Student;
}());


var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;


var c;
var ColorColor = Color.Green;
function add(a, b) {
    return a + b;
}
;
var sum1 = function (a, y) {
    return a + y;
    console.log(sum1);
};
function identity(arg) {
    return arg;
}
var output1 = identity("RAMANNAGARI CHARITHA");
var output2 = identity(100);
console.log(output1);
var a = null;
console.log(a);
console.log(typeof (a));


var b;
console.log(b);
console.log(typeof (b));
var s = "hey hi"; //var
var times = 5;
if (times > 3) {
    var s = "RAMANNAGARI CHARITHA";
}
console.log(s);


var greeter = "hey hi"; //let
var times1 = 5;
if (times > 3) {
    var hello = "Say Hello JavaTpoint";
    console.log(hello);
}
