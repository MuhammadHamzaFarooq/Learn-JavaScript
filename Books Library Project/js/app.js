console.log("Welcome to Magic Library");

// Constructor 
function Book(name, author, type) {
    this.name = name;
    this.type = type;
    this.author = author;
}

// Display Constructor
function Display() {

}


// Add methods to display prototype
Display.prototype.add = function (book) { 
    console.log("Adding to UI");
    let tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr> `;
    tableBody.innerHTML += uiString;
                   

};
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
};


// Add submit event listner to form 
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log("You have submited library form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    // creating object
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();
}