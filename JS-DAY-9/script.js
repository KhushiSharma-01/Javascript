//Event Handling

// function handleClick() {
//  document.getElementById("btn").textContent = "Clicked!";
//  document.getElementById("btn").style.backgroundColor = "green";
// }

// function handleClick() {
//     const haed= document.querySelector("h1")
//     head.style.color="tomato";
//     head.textContent="New Heading";
// }



// function handleClick() {
   
//     const spanEl= document.createElement("span").textContent="This is a new span tag";
//     const image =document.createElement("img")
    // image.setAttribute("src","https://etimg.etb2bimg.com/photo/107684845.cms");
    // image.setAttribute("alt","Car");
    // document.getElementById("content").appendChild(spanEl);
    // document.getElementById("content").appendChild(image);
// }

function handleClick() {

document.getElementById("btn").addEventlisterner("click",()=>{
    const spanEl= document.createElement("span").textContent="This is a new span tag";
    const image =document.createElement("img")
    image.setAttribute("src","https://etimg.etb2bimg.com/photo/107684845.cms");
    image.setAttribute("alt","Car");
    document.getElementById("content").appendChild(spanEl);
    document.getElementById("content").appendChild(image);
    });
}


    

