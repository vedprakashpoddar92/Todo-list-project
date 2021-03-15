//Show notes
showNotes();
//If user adds a note, add it to the local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(){
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('Notes');

    let notesObj;
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addText.value);
    localStorage.setItem('Notes', JSON.stringify(notesObj));
    addText.value = '';
    showNotes();
});
//Show Notes
function showNotes(){
    let notes = localStorage.getItem('Notes');

    let notesObj;
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 15.7rem;">
                    <div class="card-body">
                    <h5 class="card-title">Note ${index + 1} </h5>
                    <p class="card-text"> ${element} </p>
                    <button class="btn btn-primary btn-sm" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
                    </div>
                </div>`;
    });

    let notesElem = document.getElementById('notes');
    
        if(notesObj.length != 0){
            notesElem.innerHTML = html;
        }else{
            notesElem.innerHTML = `Nothing into show! Use "Add a Note" Section above to show Notes `;
        }
}

//Delete Notes
function deleteNote(index){
   
    let notes = localStorage.getItem('Notes');

    let notesObj;
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes);
    }
    if(confirm(`Are you sure! You Want to Delete this task from the list?`))
    notesObj.splice(index, 1);
    localStorage.setItem('Notes', JSON.stringify(notesObj));
    showNotes();
}

//Search Text
let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){
    let inputVal = search.value.toLowerCase();
    
    let notesCard = document.getElementsByClassName('noteCard');
    Array.from(notesCard).forEach(function(element){
        
        let cartTxt = element.getElementsByTagName("p")[0].innerText;
        
        if(cartTxt.includes(inputVal)){
            element.style.display = 'block';
        }else{
            element.style.display = 'none';
        }
    });
});