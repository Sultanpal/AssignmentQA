// code is written by sultan 
// NOTE : plz ignore spelling. and focus to learn.

// Assignment 3 : In This assignment we work the string and rearrange the letter in different order and make a another word.

// Take a string and reverse it
let str = "jai shri radhe";

function reverseString(value){
    let array = value.split("");//first split to string 
    console.log(array);
    let newArray=[];//create new array to store new reverse string 
    for(let i=array.length-1;i>=0;i--){
        console.log(array[i]);
        newArray+=array[i]; //append to string in new array
    }
    console.log(newArray);
}


reverseString(str);
