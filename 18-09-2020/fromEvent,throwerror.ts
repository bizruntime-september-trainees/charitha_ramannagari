import { fromEvent, interval } from 'rxjs';
import { buffer } from 'rxjs/operators';

let btn = document.getElementById("btnclick");
let btn_clicks = fromEvent(btn, 'click');
let interval_events = interval(1000);
let buffered_array = interval_events.pipe(buffer(btn_clicks));
buffered_array.subscribe(arr => console.log(arr));


import { throwError, concat, of } from 'rxjs';

const result =throwError(new Error('error occurred'));
result.subscribe(x => console.log(x), e => console.error(e));