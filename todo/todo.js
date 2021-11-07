let mytodos = ["Go to collage","Go to home","Laarn php and js"];

mytodos.unshift("go to musiri"); //elemet first
mytodos.push("hi"); //element last add


mytodos.forEach(function (pos,val){
    console.log(`${val+1}.${pos}`);
})