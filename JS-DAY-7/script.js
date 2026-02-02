const heading = document.getElementId("myheading");
console.log(heading)

heading.style.color="tomato";
heading.style.backgroundColour="yellow";


const para = document.getElementByClassname("para");
console.log(para);

for(let i=0;i<para.length;i++){
    para[i].style.backgroundColour="cyan";
}