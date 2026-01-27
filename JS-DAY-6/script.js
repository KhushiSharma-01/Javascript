let user={
    name:"KHUSHI",
    address:"gurugram",
    mobile:xxxxxx,
    favourite:["apple","banana","grapes"],
    demo:function(){
        return"demo";

}
}

console.log("My name is "+user.name+",I live in "+user.address+".My favourite fruits are "+user.favourite[0]+","+user.favourite[1]+" and "+user.favourite[2]+".")


//string literals
console.log(`My name is ${user.name},I live in ${user.address}.My favourite fruits are ${user.favourite[0]},${user.favourite[1]} and ${user.favourite[2]}.`)

//object methods

//1. Object.keys(variable_name)  --> it will return all keys of object in list format
console.log(Object.keys(user));

//2. Object.values(variable_name)  --> it will return all values of object in array format
console.log(Object.values(user));

//3. Object.entries(variable_name)  --> it will return all entries of object in array of arrays format
console.log(Object.entries(user));


//[
//     ["x","o","x"],
//     ["o","x","o"],
//     ["x","o","o"]
// ]
//find the winner. give output logically that x is winner


const car={
    make:"mahindra",
    model:"thar",
};

//freeze the object
Object.freeze(car);  //in freeze we connot add a new key value also cant change or update the values

Object.seal(car);  //in seal we can't add add a key value but we can change or update the values

car.model="thar";
car.color="black";

console.log(car);