"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var observable = new rxjs_1.Observable(function subscribe(subscriber) {
    subscriber.next("My First Observable");
    subscriber.next("Testing Observable");
    subscriber.complete();
}).pipe(operators_1.observeOn(rxjs_1.asyncScheduler));
console.log("Observable Created");
observable.subscribe(function (x) { return console.log(x); }, function (e) { return console.log(e); }, function () { return console.log("Observable is complete"); });
console.log('Observable Subscribed');
var rxjs_2 = require("rxjs");
var operators_2 = require("rxjs/operators");
var listener = rxjs_2.merge(rxjs_2.fromEvent(document, 'mousedown').pipe(operators_2.mapTo(false)), rxjs_2.fromEvent(document, 'mousemove').pipe(operators_2.mapTo(true)))
    .pipe(operators_2.sample(rxjs_2.fromEvent(document, 'mouseup')))
    .subscribe(function (isDragging) {
    console.log('Were you dragging?', isDragging);
});
