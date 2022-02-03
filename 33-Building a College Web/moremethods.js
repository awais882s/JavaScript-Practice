console.log("Exercise");
class Library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedBooks = {};
  }
  getBookList() {
    this.bookList.array.forEach((element) => {
      console.log(element);
    });
  }
  issueBook(bookName, user) {
    if (this.issuedBooks[bookName] == undefined) {
      this.issuedBooks.push[bookName] = user;
    } else {
      console.log("This book is alredy issued");
    }
  }
  returnBook(bookName) {
    delete this.issuedBooks[bookName];
  }
}
