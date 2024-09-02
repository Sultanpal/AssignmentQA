 // now starting working with Asch function 

function someof100(){
    let sum=0;
    for (let i=0;i<100;i++){
        sum+=i;
    }
   console.log(sum);
}


setTimeout(someof100,100);
console.log("jai shri radhe");

const fs = require('fs');
fs.readFile('assignment.txt',"utf-8",function(err,data){
    console.log(data);
})
console.log("this is another msz.");
