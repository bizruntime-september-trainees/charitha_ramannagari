import { of } from 'rxjs';
import { map, reduce, filter } from 'rxjs/operators';
import { from } from 'rxjs';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { timer, range } from 'rxjs';
import { count } from 'rxjs/operators';
import { max } from 'rxjs/operators';
import { min } from 'rxjs/operators';
import { concat } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { merge } from 'rxjs';
import { race } from 'rxjs';
import { distinct } from 'rxjs/operators';
import { first } from 'rxjs/operators';
import { last } from 'rxjs/operators';

let dist = of(1, 6, 15, 1, 10, 6, 40, 10, 58, 20, 40);
let final_dist = dist.pipe(distinct());
final_dist.subscribe(x => console.log("Distinct_values:" + x));

let all_num = of(1, 6, 5, 10, 9, 20, 40);
let final_filter = all_num.pipe(filter(a => a % 2 === 0));
final_filter.subscribe(x => console.log("filtered_elements:" + x));

let final_first = all_num.pipe(first());
final_first.subscribe(x => console.log("first_value:" + x));

let final_last = all_num.pipe(last());
final_last.subscribe(x => console.log("last_value:" + x));

let list2 = of(2, 53, 44);
let list3 = of(3, 5, 7, 9);
let fin = list2.pipe(concat(list3));
fin.subscribe(x => console.log("concat values:" + x));

let f_val = forkJoin([list2, list3]);
f_val.subscribe(x => console.log("fork_join:" + x));

let final_merge = merge(list2, list3);
final_merge.subscribe(x => console.log("merge:" + x));

let final_race = race(list2, list3);
final_race.subscribe(x => console.log("race:" + x));

let items = [
    { item1: "a", price: 1000.00 },
    { item2: "b", price: 450 },
    { item3: "c", price: 550 },
    { item4: "d", price: 650 },
    { item5: "e", price: 750 },]
let fin_val = from(items).pipe(reduce((acc, itemsdet) => acc + itemsdet.price, 0));
fin_val.subscribe(x => console.log("total amount:" + x));

let num1 = [2, 56, 34, 3, 22, 323];
let final1 = of(2, 56, 34, 3, 22, 323).pipe(min());
final1.subscribe(x => console.log("minimum value is:" + x));

let numericals = of(1, 64, 67, 45, 8787);
let final = numericals.pipe(max());
final.subscribe(x => console.log("maximum value is:" + x));

let num = of(1, 5, 3, 4, 6, 5, 70);
let final_val = num.pipe(count(a => a % 2 === 0));
final_val.subscribe(x => console.log("count is:" + x));

//let numbers=timer(10,10);   //timer
//numbers.subscribe(x=>console.log(x));

let b = range(1, 10);   //range
b.subscribe(x => console.log(x));

let testing = interval(2000);     //interval
let case2 = testing.pipe(take(5));
case2.subscribe(x => console.log(x));


//import { fromEvent, interval } from 'rxjs';
//import { buffer } from 'rxjs/operators';
//let btn = document.getElementById("btnclick");
//let btn_clicks = fromEvent(btn, 'click');
//let interval_events = interval(1000);
//let buffered_array = interval_events.pipe(buffer(btn_clicks));
//buffered_array.subscribe(arr => console.log(arr));


let arr = [2, 4, 6, 8, 10];      //from()
let test = from(arr);
test.subscribe(x => console.log(x));

let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);   //of()
let case1 = test1.pipe(
    filter(x => x % 2 === 0),
    reduce((acc, one) => acc + one, 0)
)
case1.subscribe(x => console.log(x));