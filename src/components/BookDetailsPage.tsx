import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const BookDetailsPage = () => {
  const { id } = useParams();
  const book = useSelector((state: RootState) =>
    state.books.books.find((b) => b.id === parseInt(id!))
  );

  if (!book) {
    return <p className="text-center text-gray-500">Book not found.</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-gray-700 mb-2">Author: {book.author}</p>
      <p className="text-gray-700 mb-2">Price: ${book.price.toFixed(2)}</p>
      <p className="text-gray-500 mb-4">Stock: {book.stock}</p>
    </div>
  );
};
