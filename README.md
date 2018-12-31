# concurrent-tasks
Make a task queue to run specified number of tasks concurrently at the same time.

## Installation
This is a Node.js module available through the npm registry.

`$ npm i @hamed.motallebi/concurrent-tasks`

## Usage
```ecmascript 6
let PromiseQueue = require('@hamed.motallebi/concurrent-tasks');

let show = () => 'X';
let delay = (seconds) => new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
});

let tasks = [
    delay(4),
    delay(5),
    delay(1),
    delay(4),
    delay(6),
    delay(3),
    delay(1),
    delay(9),
    delay(9),
    delay(5),
    delay(11),
    delay(0),
    delay(2),
    delay(8),
    delay(4),
];

let delayQueue = new PromiseQueue(tasks, 2, show);
delayQueue.run();
```

See the package <a href="https://github.com/ivy-man/concurrent-tasks">source</a> for more details.
