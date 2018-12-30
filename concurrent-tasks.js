"use strict";
let logUpdate = require('log-update');

let PromiseQueue = function (promises = [], concurrentRun = 1, monitor = f => f) {
    let todo = promises,
        running = [],
        concurrent = concurrentRun,
        complete = [];

    let runAnother = () => {
        return (running.length < concurrent) && todo.length;
    };

    this.run = () => {
        while (runAnother()) {
            let promise = todo.shift();
            promise.then(() => {
                complete.push(running.shift());
                logTasks();
                this.run();
            });

            running.push(promise);
            logTasks();
        }
    };

    let logTasks = () => {
        logUpdate(`todo: [${todo.map(monitor)}],\nrunning: [${running.map(monitor)}],\ncomplete: [${complete.map(monitor)}]\nrunning: ${running.length}\nremained: ${todo.length}`);
    };
};

module.exports = PromiseQueue;
