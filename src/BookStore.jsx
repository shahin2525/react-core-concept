import Book from "./Book";

/* eslint-disable react/prop-types */
const BookStore = ({ books }) => {
  return (
    <div>
      <h1>books:{books.length}</h1>
      {books.map((book) => (
        <Book key={book.id} book={book}></Book>
      ))}
    </div>
  );
};

export default BookStore;
