

// let hello = function (name){
//     return "Hi "+name
// }




// console.log(hello("iyappan"))


// Arrow funcation

// let sayhello = (name) => `Hello ${name}`

// console.log(sayhello("sadkgsdgk"));

let mytodos = [{
    title:'Go to Gym',
    isdone:true
},
{
    title:'hi guys ',
    isdone:false
},
{
    title:'take both',
    isdone:false
}];

let filter = mytodos.filter((todo)=>todo.isdone===true );
console.log(filter);

