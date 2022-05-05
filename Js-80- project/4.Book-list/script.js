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
}
//ADD-EVENT LISENTER
form.addEventListener("submit", newBook);
//FUNCTION

function newBook(e) {
  //   Collecting Value from the Form
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;

  let book = new Book(title, author, isbn);
  //   console.log(book);

  //   table  class
  let table = new Table();
  table.addToBookList(book);
  table.clear();
  e.preventDefault();
}
