//Set Local Storage
//localStorage.setItem('Name', 'Vedprakash');
//localStorage.setItem('Age', '29');

//Set Session Storage
//sessionStorage.setItem('Name', 'Baby');

//Remove from Storage
//localStorage.removeItem('Name');
//sessionStorage.removeItem('Name');

//Get from storage
//const name = localStorage.getItem('Name');
//const age = localStorage.getItem('Age');
//const name2 = sessionStorage.getItem('Name');

//Clear Storage
//localStorage.clear();
//sessionStorage.clear();
//console.log(name2);
//console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){

    const task = document.getElementById('task').value;

    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));

    alert('Task Saved!!');
    e.preventDefault();
});

const addtask = JSON.parse(localStorage.getItem('tasks'));

addtask.forEach(function(task, index){
    console.log(`ID ${index + 1} Task Name: ${task} `);
});

//tasks.forEach(function(task, index){
//    console.log(`ID: ${index} and Task Name: ${task} `);
//});