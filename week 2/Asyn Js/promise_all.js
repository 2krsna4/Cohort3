/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

const { resolve } = require("path");

function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000)
    })
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000)
    })
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000)
    })
}

function calculateTime(t1, t2, t3) {
    const start=Date.now();
    let promise1=wait1(t1);
    let promise2=wait2(t2);
    let promise3=wait3(t3);

    return Promise.all([promise1,promise2,promise3]).then(()=>{
        const end=Date.now();
        return end-start;
    })
}

calculateTime(1,2,3).then((t)=>{
    console.log("time to run this is:"+t)
})
module.exports = calculateTime;