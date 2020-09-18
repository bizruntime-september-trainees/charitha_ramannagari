"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var rxjs_2 = require("rxjs");
var rxjs_3 = require("rxjs");
var rxjs_4 = require("rxjs");
var subject5 = new rxjs_4.AsyncSubject();
subject5.subscribe({
    next: function (v) { return console.log("observerj: " + v); }
});
subject5.next(1);
subject5.next(2);
subject5.next(3);
subject5.next(4);
subject5.subscribe({
    next: function (v) { return console.log("observerk: " + v); }
});
subject5.next(5);
subject5.complete();
var subject2 = new rxjs_3.ReplaySubject(3);
subject2.subscribe({
    next: function (v) { return console.log("observere: " + v); }
});
subject2.next(1);
subject2.next(2);
subject2.next(3);
subject2.next(4);
subject2.subscribe({
    next: function (v) { return console.log("observerf: " + v); }
});
subject2.next(5);
/**const subject4 = new ReplaySubject(100, 500 );
subject4.subscribe({
  next: (v) => console.log(`observerh: ${v}`)
});
 
let i = 1;
setInterval(() => subject4.next(i++), 200);
 
setTimeout(() => {
  subject4.subscribe({
    next: (v) => console.log(`observeri: ${v}`)
  });
}, 1000);*/
var subject = new rxjs_2.BehaviorSubject(0);
subject.subscribe({
    next: function (v) { return console.log("observerc: " + v); }
});
subject.next(1);
subject.next(2);
subject.subscribe({
    next: function (v) { return console.log("observerd: " + v); }
});
subject.next(3);
var subject1 = new rxjs_1.Subject();
subject1.subscribe({
    next: function (v) { return console.log("observerA: " + v); }
});
subject1.subscribe({
    next: function (v) { return console.log("observerB: " + v); }
});
//subject1.next(1);
//subject1.next(2);
var observable = rxjs_1.from([1, 2, 3]);
observable.subscribe(subject1);
