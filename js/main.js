/* const domBookList = document.querySelector('#book-list');
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const buttonAdd = document.querySelector('#button-add');

const stringBookList = localStorage.getItem('bookList');

let bookList = [];

if (stringBookList) {
  const parsedBookList = JSON.parse(stringBookList);
  if (Array.isArray(parsedBookList)) {
    bookList = parsedBookList;
  }
}

function removeBook(index) {
  bookList.splice(index, 1);
}

function drawBooks() {
  domBookList.innerHTML = '';

  bookList.forEach((book, index) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `
    <li>
      <h3>${book.title}</h3>
      ${book.author}
      <button id="remove_btn_${index}">Remove</button>
    </li>
    `;

    domBookList.appendChild(newLi);
    const removeBtn = document.querySelector(`#remove_btn_${index}`);
    removeBtn.addEventListener('click', () => {
      removeBook(index);
      drawBooks();
    });
  });

  localStorage.setItem('bookList', JSON.stringify(bookList));
}

drawBooks();

function addBook(title, author) {
  if (title && author) {
    bookList.push({ title, author });
    drawBooks();
  }
}

buttonAdd.addEventListener('click', (event) => {
  event.preventDefault();
  addBook(inputTitle.value, inputAuthor.value);

  inputTitle.value = '';
  inputAuthor.value = '';
}); */

import BookList from './bookList.js';

const myList = new BookList();

myList.addBook('1', 'Nobody');
myList.addBook('2', 'Nobody');
myList.addBook('3', 'Nobody');