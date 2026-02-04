const Task1 =document.getElementById('profile');
Task1.style.backgroundColor="lightblue";
Task1.style.padding="15px";
Task1.style.textAlign="center";


const Task2 =document.getElementsByClassName('para');

for(let i=0;i<Task2.length;i++){
    Task2[i].style.fontSize="50px";
    Task2[i].style.color="purple";
}
console.log(Task2);

const content=document.getElementById('content');
const Task3 =content.querySelectorAll('#content p');
for(let i=0;i<Task3.length;i++){
    Task3[i].style.backgroundColor="lightgreen";
}

