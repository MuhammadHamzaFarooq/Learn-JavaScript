console.log("Welcome Magic note app . This is app.js ");

// if user a add note . Add it to the localstroage
let addBtn = document.getElementById('addBtn');    // grab element by id for btn
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById('addTxt');  // grab element by id for addtxt
    let note = localStorage.getItem("notes");             // note variable take data local storage 
    let notesObj;  //creating array for notesObj this array store all note data
    if (note == null) {
        notesObj = [];
        console.log(notesObj);
    }
    else {
        notesObj = JSON.parse(note)
        // console.log(notesObj);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    // funciton cal show note this show my note in your DOM 
    showNotes();

});

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
        console.log(element,index)
        html +=
            `  
        <div id="noteCard" class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index}</h5>
            <p class="card-text">${element}</p>
            <button id="delelteBtn" class="btn btn-primary">Delete Note</button>
        </div>
        </div>
    
        `
    });

    let noteElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        noteElm.innerHTML = html;
    }
}