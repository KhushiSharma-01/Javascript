//Q1.
// Reverse the array by using push and pop methods.
let arr = [1, 2, 3, 4, 5];
let reversedArr = [];
while (arr.length > 0) {
    reversedArr.push(arr.pop());
}
console.log(reversedArr);

// Q2.
// Remove all the negative elements from the array
let Arr=[9,-12,8,-8,7,10,-6]
let posIn=[]
while(Arr.length>0){
    let val=Arr.shift();
    if(val>0){
        posIn.push(val)
    }
}
console.log(posIn);

arr=[1,2,2,1]
