"use strict";
const book = {
    id: 1,
    title: "My title",
    author: "Dominicode",
};
const books = [];
function getBook() {
    return { id: 1, title: "My title", author: "Lalo" };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    title: "My title",
    author: "Lalo",
    coAuthor: "Bezael",
};
createBook(newBook);
