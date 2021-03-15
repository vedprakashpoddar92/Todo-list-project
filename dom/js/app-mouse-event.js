const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
//clearBtn.addEventListener('dblclick', runEvents);
//Double Click
//clearBtn.addEventListener('dblclick', runEvents);
//Event Hendler
//mouse Down and Up Event
//clearBtn.addEventListener('mousedown', runEvents);
//clearBtn.addEventListener('mouseup', runEvents);

//Mouse Enter Event
//card.addEventListener('mouseenter', runEvents);
//Mouse leave Event
//card.addEventListener('mouseleave', runEvents);

//Mouse over Event
//card.addEventListener('mouseover', runEvents);

//Mouse Out Event
card.addEventListener('mouseout', runEvents);

//Mouse move Event
card.addEventListener('mousemove', runEvents);

function runEvents(e){
    console.log(`EVENT TYPE ${e.type}`);

    heading.textContent = `Mouse X: ${e.offsetX} and Mouse Y: ${e.offsetY}`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
    e.preventDefault();
}