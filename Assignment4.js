// code is written by sultan 
// NOTE : plz ignore spelling. and focus to learn.

// Assignment 4 : palindrome
// example : nitin = nitin

// first we reves an string and than compair to string to vavlidate that the given string is palindrome or not. 

function reverseString(value){
    let array = value.split("");//first split to string 
    let newArray=[];//create new array to store new reverse string 
    for(let i=array.length-1;i>=0;i--){
        newArray+=array[i]; //append to string in new array
    }
    return newArray;
}

function CheckPalindrome(name){
 let second = reverseString(name);
 if(name == second){
    console.log("This is palindrome.");
 }else{
    console.log("This is not");
 }
}

CheckPalindrome("nitin");