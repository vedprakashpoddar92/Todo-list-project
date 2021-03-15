//document.querySelector('.clear-tasks').addEventListener('click', function(e){
//    console.log('Hello World');
//    e.preventDefault();
//})
document.querySelector('.clear-tasks').addEventListener('click', target);

function target(e){
    
    //event target
    let val;
    val = e;
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = "Hello";
    //Event Type
    val = e.type;
    //Timestamp
    val = e.timeStamp;
    //Coords Event related to the window
    val = e.clientY;
    val = e.clientX;
    //Coords Event related to the Element
    val = e.offsetY;
    val = e.offsetX;

    console.log(val);
    e.preventDefault();
}