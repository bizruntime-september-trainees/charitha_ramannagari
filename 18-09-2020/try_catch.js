"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observer = new rxjs_1.Observable(function subscribe(subscriber) {
    try {
        subscriber.next("My First Observable");
        subscriber.next("Testing Observable");
        subscriber.complete();
    }
    catch (e) {
        subscriber.error(e);
    }
});
observer.subscribe(function (x) { return console.log(x); }, function (e) { return console.log(e); }, function () { return console.log("Observable is complete"); });
