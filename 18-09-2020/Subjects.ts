import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import {ReplaySubject} from 'rxjs';
import {AsyncSubject} from 'rxjs';

const async_subject=new AsyncSubject();
async_subject.subscribe({
next: (v)=>console.log(`testing async e:${v}`)
});
async_subject.next(1);
async_subject.next(2);
async_subject.complete();
async_subject.subscribe({
   next: (v) => console.log(`Testing Async Subject f: ${v}`)
});


const replay_subject=new ReplaySubject(2);
replay_subject.subscribe({
    next: (v)=>console.log(`replay testing c: ${v}`)
})
replay_subject.next(1);
replay_subject.next(2);
replay_subject.next(3);
replay_subject.subscribe({
   next: (v)=>console.log(`replay testing d: ${v}`)
});
replay_subject.next(5);

const behavior_subject = new BehaviorSubject("RAMANNAGARI CHARITHA");
behavior_subject.subscribe({
    next: (v) => console.log(`observer A: ${v}`)
});

behavior_subject.next("Hello");
behavior_subject.subscribe({
    next: (v) => console.log(`observer B: ${v}`)
});
behavior_subject.next("Last call to Behaviour Subject");

const subject_test = new Subject();

subject_test.subscribe({
    next: (v) => console.log(`From Subject: ${v}`)
});
subject_test.subscribe({
    next: (v) => console.log(`From Subject: ${v}`)
});
subject_test.next("A");
subject_test.complete();
subject_test.next("B");

const subject_ajax = new Subject();
subject_ajax.subscribe({
    next: (v) => console.log(v)
})
subject_ajax.subscribe({
    next: (v) => console.log(v)
})
let final_val = ajax('https://jsonplaceholder.typicode.com/users').pipe(map(e => e.response));
let subscriber = final_val.subscribe(subject_test);

const subject_error = new Subject();
subject_error.subscribe({
    error: (e) => console.log(`From Subject : ${e}`)
});
subject_error.subscribe({
    error: (e) => console.log(`From Subject : ${e}`)
});
subject_error.error(new Error("There is an error"));

