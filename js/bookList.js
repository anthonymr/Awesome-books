import Book from './book.js';

export default class BookList {
    constructor(){
        this.bookList = [];
        this.domBookList = document.querySelector('#book-list');
        this.inputTitle = document.querySelector('#input-title');
        this.inputAuthor = document.querySelector('#input-author');
        this.buttonAdd = document.querySelector('#button-add');
    }

    addBook(title, author){
        const myBook = new Book(title, author);
        this.bookList.unshift(myBook);
    }

    removeBook(index) {
        this.bookList.splice(index, 1);
    }
}