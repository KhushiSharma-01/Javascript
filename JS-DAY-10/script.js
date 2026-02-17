//Promises

//promises is a constructor function that takes a callback function as an argument. The callback function has two parameters: resolve and reject. 

let myProm =new Promise((resolve,reject)=>{
    resolve("promise resolved");

});
console.log(myProm);   //promise resolved


let myPromise =new Promise((resolve,reject)=>{
    reject("promise rejected");

});
console.log(myPromise);    //promise rejected

//create promises
let myPromise1 =new Promise((resolve,reject)=>{
    let data = "this is data";  
    if(data){
        resolve(data);
    }  else{
        reject("error");
    }
});
console.log(myPromise1);   //this is data


//promises are smart organization of callback functions.


//promise handling
myPromise1.then((data)=>{
    console.log(data);
},(error)=>{
    console.log(error);
});

//last me catch laga do to handle error triple then single catch is sufficient

let myPromise2 =new Promise((resolve,reject)=>{
    let data = "this is data";  
    if(data){
        resolve(data);
    }  else{
        reject("error");
    }
});
console.log(myPromise2); 

myPromise2.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});


//fetch function :API call karne ke liye use hota hai. fetch function returns a promise.

let response= fetch("https://jsonplaceholder.typicode.com/posts")
response.then((robject)=>{ 
    // console.log(robject);                              // response object in the form of promise
    robject.json().then((data)=>{
        console.log(data);             //nested then hai so if it 10 level then so i is a promises hell
    });
});

//promises hell
//promises chaining is solution of callback hell and promises hell

fetch("https://jsonplaceholder.typicode.com/posts")
.then(robj=>{
    return robj.json();
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log(error);
});

