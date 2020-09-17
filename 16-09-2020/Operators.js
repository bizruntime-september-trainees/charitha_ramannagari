"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var rxjs_2 = require("rxjs");
var rxjs_3 = require("rxjs");
var operators_2 = require("rxjs/operators");
var rxjs_4 = require("rxjs");
var operators_3 = require("rxjs/operators");
var operators_4 = require("rxjs/operators");
var operators_5 = require("rxjs/operators");
var operators_6 = require("rxjs/operators");
var rxjs_5 = require("rxjs");
var rxjs_6 = require("rxjs");
var rxjs_7 = require("rxjs");
var list2 = rxjs_1.of(2, 53, 44);
var list3 = rxjs_1.of(3, 5, 7, 9);
var fin = list2.pipe(operators_6.concat(list3));
fin.subscribe(function (x) { return console.log("concat values:" + x); });
var f_val = rxjs_5.forkJoin([list2, list3]);
f_val.subscribe(function (x) { return console.log("fork_join:" + x); });
var final_merge = rxjs_6.merge(list2, list3);
final_merge.subscribe(function (x) { return console.log("merge:" + x); });
var final_race = rxjs_7.race(list2, list3);
final_race.subscribe(function (x) { return console.log("race:" + x); });
var items = [
    { item1: "a", price: 1000.00 },
    { item2: "b", price: 450 },
    { item3: "c", price: 550 },
    { item4: "d", price: 650 },
    { item5: "e", price: 750 },
];
var fin_val = rxjs_2.from(items).pipe(operators_1.reduce(function (acc, itemsdet) { return acc + itemsdet.price; }, 0));
fin_val.subscribe(function (x) { return console.log("total amount:" + x); });
var num1 = [2, 56, 34, 3, 22, 323];
var final1 = rxjs_1.of(2, 56, 34, 3, 22, 323).pipe(operators_5.min());
final1.subscribe(function (x) { return console.log("minimum value is:" + x); });
var numericals = rxjs_1.of(1, 64, 67, 45, 8787);
var final = numericals.pipe(operators_4.max());
final.subscribe(function (x) { return console.log("maximum value is:" + x); });
var num = rxjs_1.of(1, 5, 3, 4, 6, 5, 70);
var final_val = num.pipe(operators_3.count(function (a) { return a % 2 === 0; }));
final_val.subscribe(function (x) { return console.log("count is:" + x); });
//let numbers=timer(10,10);   //timer
//numbers.subscribe(x=>console.log(x));
var b = rxjs_4.range(1, 10); //range
b.subscribe(function (x) { return console.log(x); });
var testing = rxjs_3.interval(2000); //interval
var case2 = testing.pipe(operators_2.take(5));
case2.subscribe(function (x) { return console.log(x); });
//import { fromEvent, interval } from 'rxjs';
//import { buffer } from 'rxjs/operators';
//let btn = document.getElementById("btnclick");
//let btn_clicks = fromEvent(btn, 'click');
//let interval_events = interval(1000);
//let buffered_array = interval_events.pipe(buffer(btn_clicks));
//buffered_array.subscribe(arr => console.log(arr));
var arr = [2, 4, 6, 8, 10]; //from()
var test = rxjs_2.from(arr);
test.subscribe(function (x) { return console.log(x); });
var test1 = rxjs_1.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //of()
var case1 = test1.pipe(operators_1.filter(function (x) { return x % 2 === 0; }), operators_1.reduce(function (acc, one) { return acc + one; }, 0));
case1.subscribe(function (x) { return console.log(x); });
