
console.log("search");

let mydoes = [];

mydoes.push("go to gym");
mydoes.push("then i am going to collage");
mydoes.push("return go to home");

console.log(mydoes);

console.log(mydoes.indexOf("return go to home"));

let findtodo =  function(todolist,searchitem){
    let myfo = todolist.findIndex(function(todo){
        return todo.toLowerCase() == searchitem.toLowerCase()
    })
    return myfo;
}

console.log(findtodo(mydoes,"go to gym"))
