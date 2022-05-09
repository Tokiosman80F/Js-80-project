// DEFINEING UI ELEMENT
let form = document.getElementById("book-form");
// DEFINING CLASS
// 1. Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//2. Table
class Table {
  constructor() {}

  addToBookList(book) {
    // console.log(book, "hi");
    let list = document.getElementById("book-list");
    let row = document.createElement("tr");
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;

    list.appendChild(row);
  }
  // clear fild
  clear() {
    document.getElementById("title").value = " ";
    document.getElementById("author").value = " ";
    document.getElementById("isbn").value = " ";
  }
  showAlert(message, className) {
    let div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector(".container");
    let form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
//ADD-EVENT LISENTER
form.addEventListener("submit", newBook);
//FUNCTION

function newBook(e) {
  //   Collecting Value from the Form
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;
  let table = new Table();
  if (title === " " || author === " " || isbn === " ") {
    table.showAlert("please fill all the feild", "error");
  } else {
    let book = new Book(title, author, isbn);
    //   console.log(book);

    //   table  class
    let table = new Table();
    table.addToBookList(book);
    table.clear();
    table.showAlert("Book added!", "success");
  }

  e.preventDefault();
}
