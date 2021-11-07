
let hi = {
    title:"how are you",
    author:"iyappan",


    how : function(n,m){
        return m+n;
    },

    changea : function(name){
        this.author = name
    }



}


console.log(hi.how(1,2));
console.log(hi.title);
//hi.changea("arun");

console.log(hi.author);