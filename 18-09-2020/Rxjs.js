"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var ajax_1 = require("rxjs/ajax");
var operators_1 = require("rxjs/operators");
var rxjs_2 = require("rxjs");
var rxjs_3 = require("rxjs");
var rxjs_4 = require("rxjs");
var async_subject = new rxjs_4.AsyncSubject();
async_subject.subscribe({
    next: function (v) { return console.log("testing async e:" + v); }
});
var replay_subject = new rxjs_3.ReplaySubject(2);
replay_subject.subscribe({
    next: function (v) { return console.log("replay testing c: " + v); }
});
replay_subject.next(1);
replay_subject.next(2);
replay_subject.next(3);
replay_subject.subscribe({
    next: function (v) { return console.log("replay testing d: " + v); }
});
replay_subject.next(5);
var behavior_subject = new rxjs_2.BehaviorSubject("RAMANNAGARI CHARITHA");
behavior_subject.subscribe({
    next: function (v) { return console.log("observer A: " + v); }
});
behavior_subject.next("Hello");
behavior_subject.subscribe({
    next: function (v) { return console.log("observer B: " + v); }
});
behavior_subject.next("Last call to Behaviour Subject");
var subject_test = new rxjs_1.Subject();
subject_test.subscribe({
    next: function (v) { return console.log("From Subject: " + v); }
});
subject_test.subscribe({
    next: function (v) { return console.log("From Subject: " + v); }
});
subject_test.next("A");
subject_test.complete();
subject_test.next("B");
var subject_ajax = new rxjs_1.Subject();
subject_ajax.subscribe({
    next: function (v) { return console.log(v); }
});
subject_ajax.subscribe({
    next: function (v) { return console.log(v); }
});
var final_val = ajax_1.ajax('https://jsonplaceholder.typicode.com/users').pipe(operators_1.map(function (e) { return e.response; }));
var subscriber = final_val.subscribe(subject_test);
var subject_error = new rxjs_1.Subject();
subject_error.subscribe({
    error: function (e) { return console.log("From Subject : " + e); }
});
subject_error.subscribe({
    error: function (e) { return console.log("From Subject : " + e); }
});
subject_error.error(new Error("There is an error"));
