import Book from './book.js';

export default class BookList {
  constructor() {
    this.bookList = [];
    this.domBookList = document.querySelector('#book-list');
    this.inputTitle = document.querySelector('#input-title');
    this.inputAuthor = document.querySelector('#input-author');
    this.buttonAdd = document.querySelector('#button-add');

    this.buttonAdd.addEventListener('click', (event) => {
      event.preventDefault();
      this.addBook(this.inputTitle.value, this.inputAuthor.value);
      
      this.inputTitle.value = '';
      this.inputAuthor.value = '';
    });
    this.drawBooks();
  }

  addBook(title, author) {
    const myBook = new Book(title, author);
    this.bookList.unshift(myBook);
    this.drawBooks();
  }

  removeBook(index) {
    this.bookList.splice(index, 1);
    this.drawBooks();
  }

  drawBooks() {
    this.domBookList.innerHTML = '';

    this.bookList.forEach((book, index) => {
      const newLi = document.createElement('li');
      newLi.innerHTML = `
            <li>
              <h3>${book.title}</h3>
              ${book.author}
              <button id="remove_btn_${index}">Remove</button>
            </li>
            `;

      this.domBookList.appendChild(newLi);
      const removeBtn = document.querySelector(`#remove_btn_${index}`);
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
        this.drawBooks();
      });
    });
  }
}