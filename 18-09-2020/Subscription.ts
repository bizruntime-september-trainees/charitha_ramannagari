import { interval } from 'rxjs';

const observable1 = interval(400);
const observable2 = interval(300);

const subscription = observable1.subscribe(x => console.log('first: ' + x));
const childSubscription = observable2.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscription);

setTimeout(() => {

  subscription.unsubscribe();
}, 1000);











import { Subject,from } from 'rxjs';
import { multicast } from 'rxjs/operators';
const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

//subject.next(1);
//subject.next(2);
 
const observable = from([1, 2, 3]);
 
observable.subscribe(subject);