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
