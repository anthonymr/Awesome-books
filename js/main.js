const domBookList = document.querySelector('#book-list');

const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const buttonAdd = document.querySelector('#button-add');

const bookList = [
    {
        title: 'Lorem ipsum',
        author: 'Testeroo Testyy',
    },
    {
        title: 'Second book',
        author: 'Testeroo Testyy',
    },
    {
        title: 'Book 3',
        author: 'Testeroo Testyy',
    },
];

function addBook (title, author) {
    if(title && author){
        bookList.push({title, author});
        drawBooks();
    }
}

function removeBook (index) {
    bookList.splice(index, 1);
    drawBooks();
}

function drawBooks() {
    let innerHtml = '';

    bookList.forEach((book, index) => {
        innerHtml += `
        <li>
            <h3>${book.title}</h3>
            ${book.author}
            <button id="remove_btn_${index}">Remove</button>
        </li>
        `;
    });

    domBookList.innerHTML = innerHtml;
}

addEventListener("load", () => {
    drawBooks();
});

buttonAdd.addEventListener('click', (event) => {
    event.preventDefault();
    addBook (inputTitle.value, inputAuthor.value);
    inputTitle.value = '';
    inputAuthor.value = '';
})