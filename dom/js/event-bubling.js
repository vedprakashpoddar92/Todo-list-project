//Event Bubbling

/*document.querySelector('.card-title').addEventListener('click', function(){
console.log('Card Title');
});

document.querySelector('.card-content').addEventListener('click', function(){
    console.log('Card Content');
});

document.querySelector('.card').addEventListener('click', function(){
    console.log('Card');
});
document.querySelector('.col').addEventListener('click', function(){
    console.log('Col');
});*/

//Event Deligation
//const deleteItem = document.querySelector('.delete-item');
//deleteItem.addEventListener('click', deteteItem);

document.body.addEventListener('click', deteteItem);

function  deteteItem(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('Remove Btn click');
        e.target.parentElement.parentElement.remove();
    }

    e.preventDefault();
};