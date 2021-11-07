console.log(document.documentURI)
document.title = "k2oneiy";


// let p = document.getElementById('this');
// console.log(p);

// console.log(document.getElementById('this'));



// let d = document.getElementsByClassName('.hi1');
// console.log(d);

// let hi = document.querySelector('p');
// console.log(hi);

console.log(document.querySelector('#this'));

console.log(document.querySelector('.hi1'));

let mytag = document.querySelectorAll('p');
mytag.forEach((p) => {
    p.textContent = "This is my pen";
    p.remove();
})

let newtag = document.createElement('h1');
newtag.textContent = "i love kk";
document.querySelector('body').appendChild(newtag);





