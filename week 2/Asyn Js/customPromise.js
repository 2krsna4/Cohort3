class Promise2{
    constructor(someFxnGiven){
        this.fxn=someFxnGiven; 
        this.fxn(this.arg);
    }

    /*logic:
    fxn(arg)-->arg() called-->resolve() called--> callbackfxn()*/

    arg=()=>{ //anyonmous fxn with no argument;
        this.resolve();
    }

    

    then(somefxn){ 
        this.resolve=somefxn;
    }


}

module.exports=Promise2;
