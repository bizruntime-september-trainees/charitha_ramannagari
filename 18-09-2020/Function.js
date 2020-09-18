"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var foo = new rxjs_1.Observable(function (subscriber) {
    console.log('Hello');
    subscriber.next(6);
    subscriber.next(100);
    subscriber.next(200);
    setTimeout(function () {
        subscriber.next(300);
    }, 1000);
});
console.log('before');
foo.subscribe(function (x) {
    console.log(x);
});
console.log('after');
var observable = new rxjs_1.Observable(function subscribe(subscriber) {
    try {
        console.log('hi');
        subscriber.next(1);
        subscriber.complete();
        subscriber.next(2);
    }
    catch (err) {
        subscriber.error(err);
    }
});
observable.subscribe(function (x) {
    console.log(x);
});
var observable2 = new rxjs_1.Observable(function subscribe(subscriber) {
    var intervalId = setInterval(function () {
        subscriber.next('hi');
    }, 1000);
    return function unsubscribe() {
        clearInterval(intervalId);
    };
});
