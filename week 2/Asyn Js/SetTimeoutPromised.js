/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
const Promise2=require('./customPromise')

function wait(n) {
    return new Promise2((arg)=>{
        setTimeout(arg,n)
    }).then(callbackfxn)  //n sec baad-->call arg-->then call resolve-->then call the callback fxn
}


function callbackfxn(){
    console.log("fxn finised runinng....")
}

wait(10000)
module.exports = wait;