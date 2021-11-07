

// console.log(typeof 10);


let convertrupeees = (doller) => {
    if(typeof doller == "number" ){
        return doller*69

    }
    else{
        throw("error was occured");
    }
}

// console.log(convertrupeees('one'));


try{
    console.log(convertrupeees('one'));
}
catch(e){
    console.log(e);
}

console.log("working ...........................");



