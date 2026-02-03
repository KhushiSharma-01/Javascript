
//id traversal
const heading = document.getElementId("myheading");
console.log(heading)

// console.log(heading.textContent)
heading.textContent="Hello, India"
heading.style.color="tomato";
heading.style.backgroundColour="yellow";

//class traversal
const para = document.getElementByClassname("para");
console.log(para);

for(let i=0;i<para.length;i++){
    para[i].style.backgroundColour="cyan";
}

//query selector

const qs = document.querySelector("#content p")
console.log(qs);
qs.textContent="hvgfhhfjgkcffgjgjgj";