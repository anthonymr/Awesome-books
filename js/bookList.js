export default class BookList {
    constructor(){
        this.bookList = [];
        this.domBookList = document.querySelector('#book-list');
        this.inputTitle = document.querySelector('#input-title');
        this.inputAuthor = document.querySelector('#input-author');
        this.buttonAdd = document.querySelector('#button-add');
    }
}