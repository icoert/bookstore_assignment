import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Book, decrementStock } from "../store/slices/bookSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { Link } from "react-router-dom";

type Props = {
  book: Book;
};

export const BookCard = ({ book }: Props) => {
  const dispatch = useDispatch();

  const handleAddToCart = (book: Book) => {
    if (book.stock > 0) {
      dispatch(
        addToCart({
          id: book.id,
          title: book.title,
          price: book.price,
          quantity: 1,
        })
      );
      dispatch(decrementStock(book.id)); // Deduct stock
    } else {
      alert("Out of stock!");
    }
  };
  return (
    <Card key={book.id} className="shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{book.title}</CardTitle>
        <CardDescription>Author: {book.author}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col space-y-2">
        <p className="text-gray-700">Price: ${book.price.toFixed(2)}</p>
        <p className="text-gray-500">Stock: {book.stock}</p>
        <Link
          to={`/books/${book.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
        <Button
          type="button"
          className="w-full bg-slate-100 hover:bg-slate-300"
          onClick={() => handleAddToCart(book)}
          disabled={book.stock === 0}
        >
          {book.stock === 0 ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};
