console.log("Welcome Magic note app . This is app.js ");
showNotes();
// if user a add note . Add it to the localstroage
let addBtn = document.getElementById('addBtn');    // grab element by id for btn
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');  // grab element by id for addtxt
    let addTitle = document.getElementById('addTitle');  // grab element by id for addtxt
    let note = localStorage.getItem("notes");             // note variable take data local storage 
    let notesObj;  //creating array for notesObj this array store all note data
    if (note == null) {
        notesObj = [];
        console.log(notesObj);
    
    }
    else {
        console.log(note)
        notesObj = JSON.parse(note)
        // console.log(notesObj);
    }
      let myObj = {
          title: addTitle.value,
          text : addTxt.value
      }
    notesObj.push(myObj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notesObj);

    // funciton cal show note this show my note in your DOM 
    showNotes();

});

// Function to elements form localstorage
function showNotes() {
    let note = localStorage.getItem("notes"); // note variable take data from local storage 
    if (note == null) {
        notesObj = [];
        console.log(notesObj);
    }
    else {
        notesObj = JSON.parse(note)
        // console.log(notesObj);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        console.log(element, index)
        html +=
            `  
        <div  class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button onclick = "deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
        </div>
        </div>
    
        `
    });

    let noteElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteElm.innerHTML = html;
    }
    else {
        noteElm.innerHTML = `Nothing to show! use "Add  a Note " section above to add notes .  `;
    }
}


// Function to delete note 
function deleteNote(index) {
    console.log("I am deleting note", index);

    let note = localStorage.getItem("notes"); // note variable take data from local storage 
    if (note == null) {
        notesObj = [];
        console.log(notesObj);
    }
    else {
        notesObj = JSON.parse(note)
        console.log(notesObj);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}



let search = document.getElementById("searchTxt");
search.addEventListener('input',function() {
   let inputVal = search.value.toLowerCase();
   let noteCards = document.getElementsByClassName("noteCard");
   Array.from(noteCards).forEach(function(element) {
       let cardTxt =element.getElementsByTagName('p')[0].innerText;
       if(cardTxt.includes(inputVal)){
           element.style.display = "block";
       }
       else{
        element.style.display = "none";
       }
     
        //    console.log(cardTxt)



    });
});

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/