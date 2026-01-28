//Q1.
// Reverse the array by using push and pop methods.
// let arr = [1, 2, 3, 4, 5];
// let reversedArr = [];
// while (arr.length > 0) {
//     reversedArr.push(arr.pop());
// }
// console.log(reversedArr);

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

// Q3. check palindrome series
function palindrome() {
let arr=[1,2,3,2,1]
let original=[]
let reverse=[]
for (let i=0; i<arr.length; i++) {
    original.push(arr[i])
}   

while(arr.length>0){
    reverse.push(arr.pop())
}
for (let i=0; i < original.length; i++){
    if (original[i] !== reverse[i]) {
        return "not a palindrome";
    }
    return "palindrome";
}
console.log(palindrome())
}

