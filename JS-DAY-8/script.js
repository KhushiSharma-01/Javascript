
// Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph.";
console.log(newParagraph);

// Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);

// remove Element
//remove the first paragraph of container
document.querySelector("#container p").remove();



const image = document.createElement("img");

image.setAttribute("src","https://etimg.etb2bimg.com/photo/107684845.cms");

image.setAttribute("alt","Car");

const gallery = document.getElementById("gallery");
gallery.appendChild(image);


// Date method

let date = new Date()
console.log(date);

setInterval(()=>{
let date = new Date()
console.log(date);

let hour = date.getHours();
let min=date.getMinutes();
let second= date.getSeconds();

let clock = document.getElementById("digi-clock");

clock.textContent=`${hour} : ${min} : ${second}`

},1000)