Timing Functions

- `setInterval`: Returns the ID of a new timer. Side-effect: starts the timer.
- `clearInterval`: Stops the timer with the given ID.

## The wrong way:

```js
var currentTimerID;
function sayHi(){
  console.log("hi");
}
$("#start").click(function(){
  currentTimerID = setInterval(sayHi, 1000);
});
$("#stop").click(function(){
  clearInterval(currentTimerID);
});
```

### Analogy

When you press the "start" button you create a stopwatch, you start it running, and you put that stopwatch in a bucket.

When you press the "start" button again, you create a new stopwatch, dump the old stopwatch out of the bucket onto the floor, and put the new stopwatch in the bucket.

When you press the "stop" button, it clears the stopwatch in the bucket. All the other stopwatches on the floor continue to run.

So if you press the "start" button 50 times, and then press "stop", it'll only reset the 50th stopwatch because that's the one in the bucket. There'll be 49 other stopwatches ticking merrily away on the floor.

### What's happening

`currentTimerID = setInterval(sayHi, 1000)` is overwriting the current value of the `currentTimerID` variable. It's exactly the same as this:

```js
var name = "Alice";
name = "Bob";
name = "Carol";
console.log(name);
// prints "Carol"
```

`clearInterval(currentTimerID)` is stopping whatever timer has the ID currently held by the `currentTimerID` variable. There is only ever one timer ID at a time in the variable. To have multiple, it would need to be an array.

## The right way:

```js
var currentTimerID = null;
function sayHi(){
  console.log("hi");
}
$("#start").click(function(){
  if(currentTimerID === null){
    currentTimerID = setInterval(sayHi, 1000);
  }
});
$("#stop").click(function(){
  clearInterval(currentTimerID);
  currentTimerID = null;
});
```

# Common Errors

```js
function sayHi(){
  console.log("hi");
}
setInterval(sayHi(), 1000);
```

The `()` after `sayHi` means it is called immediately and only once, rather than after every 1000 miliseconds.

---

```js
var timer = setInterval(sayHi, 1000);
clearInterval(sayHi);
```

You must pass the timer object itself into `clearInterval` -- not the function the timer object is running.

# Note

In most browsers, intervals can actually only be spaced at a minimum of 4ms. If you try to run something every 1ms, it'll run every 4. [More information](http://ejohn.org/blog/how-javascript-timers-work/)
