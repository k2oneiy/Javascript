

function search() {
    let myvalue = document.getElementById('input').value
    // console.log(myvalue);

    if(myvalue=="hi"){
        // console.log("hi how are you");
        alert('alert');

       
    }

    let body = document.querySelector('body')
    body.style.background = "red";


}

function white() {
    // let body = document.querySelector('body')
    // body.style.background = "lightgreen";

    let ul = document.querySelector('ul');
    let newcli = document.createElement('li');
    newcli.textContent = "Java Script";
    ul.appendChild(newcli);


}

