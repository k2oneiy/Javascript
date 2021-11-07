let email = "kiyappan104gmail.com";
let password = "iyappan9578";

function emailcheck(email){
    if(email.includes('@')){
        return true;
    }
    else{
        return false;
    }
}


console.log(emailcheck(email));



function passwordcheck(pass){
    if((pass.includes('')) && (pass.length > 6)){
        return true;
    }
    else{
        return false;
    }
}

console.log(passwordcheck(password));