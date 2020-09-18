
import { Subject,from } from 'rxjs';
import { multicast } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { ReplaySubject } from 'rxjs';
import { AsyncSubject } from 'rxjs';
const subject5 = new AsyncSubject();
 
subject5.subscribe({
  next: (v) => console.log(`observerj: ${v}`)
});
 
subject5.next(1);
subject5.next(2);
subject5.next(3);
subject5.next(4);
 
subject5.subscribe({
  next: (v) => console.log(`observerk: ${v}`)
});
 subject5.next(5);
subject5.complete();


const subject2 = new ReplaySubject(3); 
subject2.subscribe({
  next: (v) => console.log(`observere: ${v}`)
});

subject2.next(1);
subject2.next(2);
subject2.next(3);
subject2.next(4);

subject2.subscribe({
  next: (v) => console.log(`observerf: ${v}`)
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


const subject = new BehaviorSubject(0); 
 subject.subscribe({
  next: (v) => console.log(`observerc: ${v}`)
});
 
subject.next(1);
subject.next(2);
 
subject.subscribe({
  next: (v) => console.log(`observerd: ${v}`)
});
 
subject.next(3);
 


const subject1 = new Subject<number>();

subject1.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject1.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

//subject1.next(1);
//subject1.next(2);
 
const observable = from([1, 2, 3]);
 
observable.subscribe(subject1);