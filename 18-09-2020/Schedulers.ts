import { Observable, asyncScheduler } from 'rxjs';
import { observeOn } from 'rxjs/operators';

var observable = new Observable(function subscribe(subscriber) {
    subscriber.next("My First Observable");
    subscriber.next("Testing Observable");
    subscriber.complete();

}).pipe(
    observeOn(asyncScheduler)
);

console.log("Observable Created");
observable.subscribe(
    x => console.log(x),
    (e) => console.log(e),
    () => console.log("Observable is complete")
);

console.log('Observable Subscribed');


//import { fromEvent, merge } from 'rxjs';
//import { sample, mapTo } from 'rxjs/operators';

//const listener = merge(
   // fromEvent(document, 'mousedown').pipe(mapTo(false)),
   // fromEvent(document, 'mousemove').pipe(mapTo(true))
//)
  //  .pipe(sample(fromEvent(document, 'mouseup')))
    //.subscribe(isDragging => {
      //  console.log('Were you dragging?', isDragging);
    //});