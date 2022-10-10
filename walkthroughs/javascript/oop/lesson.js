class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
}

class Shelf {
  constructor() {
    this.books = [];
  }

  add(book) {
    this.books.push(book);
  }

  find(title) {
    return this.books.find((book) => book.title == title)
  }

  remove(title) {
    return this.books.splice(this.books.findIndex((book) => book.title == title), 1)
  }
}

class Bookcase {
  constructor(size) {
    this.shelves = new Array(size).fill(new Shelf());
  }
  
  addShelf() {
    this.shelves.push(new Shelf()); 
  }
  
  selectShelf(shelfNumber) {
    return this.shelves[shelfNumber - 1];
  }
}

let bookcase = new Bookcase(3);

console.log(bookcase);
