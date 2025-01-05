/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(n) {
    return new Promise((resolve,reject)=>{
        const start=Date.now();
        while(Date.now()-start<n*1000){}; //halt the theard and do nothing n sec
        resolve("Thread do nothing for"+n+"sec");
    })
}

sleep(4).then((message)=>{
    console.log(message)
})

module.exports = sleep;