const form = document.getElementById("noteForm");
const title = document.getElementById("noteTitle");
const content = document.getElementById("noteContent");
const errorMessage = document.getElementById("errorMessage");
const noteList = document.getElementById("noteList");
const noteView = document.getElementById("noteView");

// Read from localstorage
const localStorageNotes = localStorage.getItem("note");

// Made sure that note is an array and it is correctly parsed
const notes = JSON.parse(localStorageNotes) ?? []; // Null coalescing operator

// Initial display of the notes in localstorage
displayNotes(notes);
function displayNotes(notes) {
  noteList.innerHTML = "";
  if (notes.length > 0) {
    notes.forEach(function (note) {
      noteList.innerHTML += `
      <button class="list-group-item text-start" onclick="showNote('${note.title}', '${note.content}')">${note.title}</button>`;
    });
  } else {
    noteList.textContent = "No item found";
  }
}

let open = false;
function showForm(element) {
  open = !open;
  console.log(open);

  if (open == false) {
    element.textContent = "Open Form";
  } else {
    element.textContent = "Close Form";
  }
  form.classList.toggle("d-none");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (title.value == "" || content.value == "") {
    errorMessage.textContent = "Note title and content is required";
    errorMessage.classList.remove("d-none");
  } else {
    errorMessage.classList.add("d-none");
    errorMessage.textContent = "";
    notes.push({ title: title.value, content: content.value });
    console.log(notes);
    displayNotes(notes);
    storeNotes(notes);
  }
});

function storeNotes(notes) {
  localStorage.setItem("note", JSON.stringify(notes));
}

function showNote(title, content) {
  console.log("clicked");
  noteView.classList.remove("d-none");
  noteView.innerHTML = `<h4> ${title} </h4> <p>${content}</p>`;
}


// localStorage.clear()


function navigateToPage() {
  window.location = "index.html";
}
