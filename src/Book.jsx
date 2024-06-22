/* eslint-disable react/prop-types */
import "./Book.css";
const Book = ({ book }) => {
  return (
    <div className="book">
      <p>Name : {book.name}</p>
      <p>Name : {book.price}</p>
    </div>
  );
};

export default Book;
