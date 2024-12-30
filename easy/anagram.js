function isAnag(str1, str2){
    //sort both the string
    srt_str1= str1.split("").sort().join("");
    srt_str2= str2.split("").sort().join("");

    if(srt_str1==srt_str2){
        return true;
    }else{
        return false;
    }
}

console.log(isAnag('g','k'))

module.exports=isAnag;
