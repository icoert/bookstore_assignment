import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { BookCard } from "../components/BookCard";
import { Input } from "../components/ui/input";

export const BooksPage = () => {
  const books = useSelector((state: RootState) => state.books.books);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery);
    return matchesSearch;
  });

  return (
    <div className="p-6">
      <div className="mb-6 space-y-2">
        <Input
          id="search"
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <BookCard book={book} />
        ))}
        {filteredBooks.length === 0 && (
          <p className="text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
};
