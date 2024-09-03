// Find the length of string.
// code is written by sultan 

// NOTE : Convert an array of numbers into a new array with only the even elements.

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let b = [];
function ArrayMultipyBy2(arr,arr2){
    arr.forEach(element =>{
        if((element)%2 ==0){
            arr2.push(element)
        }
    });
    arr2.forEach(element => {
        console.log(element);        
    });

}
ArrayMultipyBy2(arr1,b);
