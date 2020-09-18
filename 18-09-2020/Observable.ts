import { Observable } from 'rxjs';
 
const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(6);
  subscriber.next(100); 
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); 
  }, 1000);
});
console.log('before');
foo.subscribe(x => {
  console.log(x);

});
console.log('after');

const observable = new Observable(function subscribe(subscriber) {
  try{  console.log('hi')
    subscriber.next(1)
    
    subscriber.complete();
    subscriber.next(2);
}
    catch (err) {
        subscriber.error(err); 
      }
    });
      observable.subscribe(x=>{
          console.log(x);
    });

    const observable2 = new Observable(function subscribe(subscriber) {
        const intervalId = setInterval(() => {
          subscriber.next('hi');
        }, 1000);
      
        
        return function unsubscribe() {
          clearInterval(intervalId);
        };
      });