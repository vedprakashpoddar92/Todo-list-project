//Define UI Var
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//localStorage.clear();
//load all event listeners
loadEventListrners();

function loadEventListrners(){
    //DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add Task Event
    form.addEventListener('submit', addTask);
    //Remove Task Event
    tasklist.addEventListener('click', removeTask);
    //Clear Task Event
    clearBtn.addEventListener('click', clearTask);
    //Filter Task Event
    filter.addEventListener('keyup', filterTask);
}
//Get Task From LS
function getTasks(e){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        //Create li Element
        const li = document.createElement('li');
        //add className
        li.className = 'collection-item';
        //Create Text Node and append to li
        li.appendChild(document.createTextNode(task));

        //Create new link element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        //Add icons HTML
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //append the link to li
        li.appendChild(link);
        //append li to ul
        //console.log(li);
        tasklist.appendChild(li);
    });
}

//Add task
function addTask(e){
    if(taskInput.value === ''){
        alert('Add Task');
    }else{
       // console.log(taskInput.value);
    }
    //Create li Element
    const li = document.createElement('li');
    //add className
    li.className = 'collection-item';
    //Create Text Node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    //Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //Add icons HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);
    //append li to ul
    //console.log(li);
    tasklist.appendChild(li);
    //Store Task in LS
    //console.log(taskInput.value);
    storeTaskLocalStorage(taskInput.value);
    //Clear the input 
    taskInput.value = '';

    e.preventDefault();
}
//Store Task
function storeTaskLocalStorage(task){
    //console.log(task);
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        //console.log(e.target);
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();

            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
    e.preventDefault();
}
//Remove From LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
//Clear All Task
function clearTask(e){
    if(confirm('Are You Sure You Want To Remove All Task?')){
        while(tasklist.firstChild){
            tasklist.removeChild(tasklist.firstChild);
        }
        //Clear Task From LS
        clearTaskFromLocalStorage();
    }
    e.preventDefault();
}

//Clear Task LS
function clearTaskFromLocalStorage(){
    localStorage.clear();
}
//filtere task
function filterTask(e){

    const text = e.target.value.toLowerCase();
    //console.log(text);
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
    e.preventDefault();    
}